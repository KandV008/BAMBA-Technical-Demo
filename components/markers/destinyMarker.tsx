import React from "react";
import { Alert } from "react-native";
import { LatLng, Marker } from "react-native-maps";

interface DestinyMarkerProps {
  coordinate: LatLng;
  title: string;
  setDestination: (coordinate: LatLng | null) => void;
}

/**
 * DestinyMarker component
 * A modularized Marker with an `onPress` event to handle navigation logic.
 *
 * @param {LatLng} coordinate - The coordinates of the marker.
 * @param {string} title - The title of the marker.
 * @param {function} setDestination - Callback to set the destination.
 * @returns {JSX.Element} The CustomMarker component.
 */
export default function DestinyMarker({
  coordinate,
  title,
  setDestination,
}: DestinyMarkerProps): JSX.Element {
  return (
    <Marker
      coordinate={coordinate}
      title={title}
      onPress={(event) => {
        event.persist();
        Alert.alert(
          "Entrar en modo navegación",
          "¿Quieres ir hasta ahí?",
          [
            {
              text: "Cancelar",
              onPress: () => setDestination(null),
              style: "cancel",
            },
            {
              text: "Sí",
              onPress: () => setDestination(event.nativeEvent.coordinate),
              style: "default",
            },
          ]
        );
      }}
    />
  );
}
