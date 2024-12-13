import { StyleSheet, View } from "react-native";
import { styled } from "nativewind";
import MapView, { PROVIDER_GOOGLE, Region } from "react-native-maps";
import * as FileSystem from 'expo-file-system';
import { Asset } from 'expo-asset';

const StyledView = styled(View);

interface MapProps {
  mapType: "standard" | "satellite";
}


export default function Map({ mapType }: MapProps) {
   
  const initialRegion: Region = {
    latitude: 40.445414,
    longitude: -4.001441,
    latitudeDelta: 0.02,
    longitudeDelta: 0.02,
  }

  getGeoJSON()

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

const getGeoJSON = async () => {
  const url = 'https://storage.googleapis.com/bamba_mvp/villanueva_streets_bamba.geojson';

  try {
    // Hacer la solicitud para obtener el archivo .geojson
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('No se pudo obtener el archivo .geojson');
    }

    // Convertir la respuesta en JSON
    const geoJsonData = await response.json();
    console.log(geoJsonData); // Ahora puedes trabajar con el contenido del archivo .geojson
  } catch (error) {
    console.error('Error al cargar el archivo desde GCS:', error);
  }
};
