import { StyleSheet, View } from "react-native";
import { styled } from "nativewind";
import MapView, {
  Geojson,
  LatLng,
  Marker,
  PROVIDER_GOOGLE,
  Region,
} from "react-native-maps";
import { GeoJsonData } from "@/lib/data";
import { MutableRefObject } from "react";

const StyledView = styled(View);

interface MapProps {
  mapType: "standard" | "satellite";
  initialRegion: Region;
  mapRef: MutableRefObject<MapView | null>;
  results: any[];
}

export default function Map({
  mapType,
  initialRegion,
  mapRef: ref,
  results,
}: MapProps) {
  const features = GeoJsonData.features;

  return (
    <StyledView className="w-full h-full bg-green-200">
      <MapView
        ref={ref}
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        key={process.env.GOOGLE_MAPS_KEY}
        mapType={mapType}
        googleMapId={process.env.GOOGLE_MAPS_ID}
        initialRegion={initialRegion}
      >
        {features.map(renderGeojsonFeature)}
        {results.length
          ? results.map((item, i) => {
              const coord: LatLng = {
                latitude: item.geometry.location.lat,
                longitude: item.geometry.location.lng,
              };
              return (
                <Marker
                  key={`search-item-${i}`}
                  coordinate={coord}
                  title={item.name}
                />
              );
            })
          : null}
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

type GeoJSONGeometryType =
  | "Point"
  | "LineString"
  | "Polygon"
  | "MultiPoint"
  | "MultiLineString"
  | "MultiPolygon"
  | "GeometryCollection";

const allowedTypes: GeoJSONGeometryType[] = [
  "Point",
  "LineString",
  "Polygon",
  "MultiPoint",
  "MultiLineString",
  "MultiPolygon",
  "GeometryCollection",
];

const parseGeometryType = (type: string): GeoJSONGeometryType | null => {
  return allowedTypes.includes(type as GeoJSONGeometryType)
    ? (type as GeoJSONGeometryType)
    : null;
};

const getStrokeColor = (bambaValue: number) => {
  if (bambaValue < 3) return "red";
  if (bambaValue < 6) return "orange";
  return "green";
};

const renderGeojsonFeature = (feature: any, index: number) => {
  const bambaValue = feature.properties?.BAMBA || 0;

  const geometryType = parseGeometryType(feature.geometry.type);
  if (!geometryType) {
    console.warn(`Invalid geometry type: ${feature.geometry.type}`);
    return null;
  }

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

  console.warn(
    `Unsupported geometry type or invalid coordinates for feature at index ${index}`
  );
  return null;
};
