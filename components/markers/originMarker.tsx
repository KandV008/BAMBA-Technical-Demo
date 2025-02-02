import React from "react";
import { LatLng, Marker } from "react-native-maps";

interface OriginMarkerProps {
  userLocation: LatLng;
  setOrigin: (coordinate: LatLng) => void;
}

/**
 * OriginMarker component
 * Displays a marker on the map to represent the user's location.
 * 
 * @param {LatLng} userLocation - The coordinates of the user's location.
 * @returns {JSX.Element} A Marker component representing the user's location on the map.
 */
export default function OriginMarker({
  userLocation,
  setOrigin
}: OriginMarkerProps): JSX.Element {
  return (
    <Marker
      coordinate={userLocation}
      image={require("../../assets/images/user_location.png")}
      title="Tú ubicación"
      draggable
      onDragEnd={(direction) => {setOrigin(direction.nativeEvent.coordinate)}}
    />
  );
}
