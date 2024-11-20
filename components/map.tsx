import { StyleSheet, View } from "react-native";
import { styled } from "nativewind";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

const StyledView = styled(View);

interface MapProps {
  mapType: "standard" | "satellite";
}

export default function Map({ mapType }: MapProps) {
  return (
    <StyledView className="w-full h-full bg-green-200">
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        key={process.env.GOOGLE_MAPS_KEY}
        mapType={mapType}
      />
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
