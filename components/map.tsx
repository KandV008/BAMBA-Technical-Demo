import { StyleSheet, View } from "react-native";
import { styled } from "nativewind";
import MapView, { Geojson, PROVIDER_GOOGLE, Region } from "react-native-maps";
import { GeoJsonData } from "@/lib/data";

const StyledView = styled(View);

interface MapProps {
  mapType: "standard" | "satellite";
}

type GeoJSONGeometryType =
  | "Point"
  | "LineString"
  | "Polygon"
  | "MultiPoint"
  | "MultiLineString"
  | "MultiPolygon"
  | "GeometryCollection";

const parseGeometryType = (type: string): GeoJSONGeometryType | null => {
  const allowedTypes: GeoJSONGeometryType[] = [
    "Point",
    "LineString",
    "Polygon",
    "MultiPoint",
    "MultiLineString",
    "MultiPolygon",
    "GeometryCollection",
  ];
  return allowedTypes.includes(type as GeoJSONGeometryType) ? (type as GeoJSONGeometryType) : null;
};

export default function Map({ mapType }: MapProps) {
  const initialRegion: Region = {
    latitude: 40.445414,
    longitude: -4.001441,
    latitudeDelta: 0.02,
    longitudeDelta: 0.02,
  };

  const features = GeoJsonData.features;

  const getStrokeColor = (bambaValue: number) => {
    if (bambaValue < 3) return "red";
    if (bambaValue < 6) return "orange";
    return "green";
  };

  return (
    <StyledView className="w-full h-full bg-green-200">
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        key={process.env.GOOGLE_MAPS_KEY}
        mapType={mapType}
        googleMapId={process.env.GOOGLE_MAPS_ID}
        initialRegion={initialRegion}
      >
        {features.map((feature, index) => {
          const bambaValue = feature.properties?.BAMBA || 0;

          const geometryType = parseGeometryType(feature.geometry.type);
          if (!geometryType) {
            console.warn(`Invalid geometry type: ${feature.geometry.type}`);
            return null;
          }

          // Validate coordinates based on geometry type
          const coordinates = feature.geometry.coordinates;
          if (
            geometryType === "LineString" &&
            Array.isArray(coordinates) &&
            coordinates.every((coord) => Array.isArray(coord) && coord.length === 2)
          ) {
            return (
              <Geojson
                key={index}
                geojson={{
                  type: "FeatureCollection",
                  features: [
                    {
                      type: "Feature",
                      geometry: {
                        type: "LineString",
                        coordinates: coordinates as [number, number][], 
                      },
                      properties: feature.properties,
                    },
                  ],
                }}
                strokeColor={getStrokeColor(bambaValue)}
                strokeWidth={2}
              />
            );
          }

          console.warn(`Unsupported geometry type or invalid coordinates for feature at index ${index}`);
          return null;
        })}
      </MapView>
    </StyledView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
