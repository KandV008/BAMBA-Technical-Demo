import { StyleSheet, View } from 'react-native';
import { styled } from "nativewind";
import MapView from 'react-native-maps';

const StyledView = styled(View);

export default function Map() {
  return (
    <StyledView className="w-full h-full bg-green-200">
      <MapView style={styles.map} />
    </StyledView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
