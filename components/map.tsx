import React, { MutableRefObject, useState } from "react";
import {
  Alert,
  StyleSheet,
  View,
} from "react-native";
import { styled } from "nativewind";
import MapView, {
  Geojson,
  LatLng,
  Marker,
  Polyline,
  PROVIDER_GOOGLE,
  Region,
} from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { GeoJsonData } from "@/lib/data";
import DestinyMarker from "./destinyMarker";

const StyledView = styled(View);
const key = process.env.EXPO_PUBLIC_GOOGLE_MAPS_KEY;

interface MapProps {
  mapType: "standard" | "satellite";
  initialRegion: Region;
  mapRef: MutableRefObject<MapView | null>;
  results: any[];
  userLocation: LatLng;
}

export default function Map({
  mapType,
  initialRegion,
  mapRef,
  results,
  userLocation,
}: MapProps): JSX.Element {
  const features = GeoJsonData.features;
  const [origin, setOrigin] = useState<LatLng>(userLocation);
  const [destination, setDestination] = useState<LatLng | null>(null);

  return (
    <StyledView className="w-full h-full bg-green-200">
      <MapView
        ref={mapRef}
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        mapType={mapType}
        initialRegion={initialRegion}
        showsUserLocation
        showsMyLocationButton
      >
        {features.map(renderGeojsonFeature)}
        {results.map((item, i) => {
          const coord: LatLng = {
            latitude: item.geometry.location.lat,
            longitude: item.geometry.location.lng,
          };
          return (
            <DestinyMarker
              key={`search-item-${i}`}
              coordinate={coord}
              title={item.name}
              setDestination={setDestination}
            />
          );
        })}
        <Marker
          coordinate={userLocation}
          image={require("../assets/images/user_location.png")}
          title="Tú ubicación"
        />
        {destination && (
          <MapViewDirections
            origin={origin}
            destination={destination}
            apikey={key!}
            strokeColor="blue"
            strokeWidth={8}
          />
        )}
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
