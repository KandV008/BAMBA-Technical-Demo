import Map from "@/components/map";
import NavigationBar from "@/components/navigationBar";
import ToggleButton from "@/components/toggleButton";
import SearchBar from "@/components/searchBar";
import { Keyboard, View } from "react-native";
import { styled } from "nativewind";
import MapTypeToggle from "@/components/toggleMenu/mapTypeMenu";
import { useEffect, useRef, useState } from "react";
import { MapTypeEnum } from "./model/mapTypeEnum";
import MapView, { LatLng, Region } from "react-native-maps";

const StyledView = styled(View);

const INITIAL_LAT = 40.445414;
const INITIAL_LNG = -4.001441;
const LATITUDE_DELTA = 0.02;
const LONGITUDE_DELTA = 0.02;

const googleApisUrl =
  "https://maps.googleapis.com/maps/api/place/textsearch/json";
const key = process.env.EXPO_PUBLIC_GOOGLE_MAPS_KEY

const initialRegion: Region = {
  latitude: INITIAL_LAT,
  longitude: INITIAL_LNG,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA,
};

const userLocation: LatLng = {
  latitude: INITIAL_LAT,
  longitude: INITIAL_LNG
}

export default function Index() {
  const [mapType, setMapType] = useState<MapTypeEnum>("standard");
  const selectMapType = (option: MapTypeEnum) => {
    setMapType(option);
  };

  const [searchText, setSearchText] = useState("");
  const [results, setResults] = useState<any[]>([])
  const map = useRef<MapView | null>(null)

  useEffect(() => {
    if (searchText.trim().length) {
      const input = searchText.trim();
      const location = `${INITIAL_LAT},${INITIAL_LNG}`;
      const url = `${googleApisUrl}?query=${encodeURIComponent(
        input
      )}&location=${location}&radius=20&key=${key}`;

      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          if (data && data.results) {
            const coords : LatLng[] = []

            for (const item of data.results){
              coords.push({
                latitude: item.geometry.location.lat,
                longitude: item.geometry.location.lng,
              })
            }

            setResults(data.results)

            if (coords.length) {
              map.current?.fitToCoordinates(coords, {
                edgePadding: {
                  top: 50,
                  right: 50,
                  bottom: 50,
                  left: 50,
                },
                animated: true
              })
              Keyboard.dismiss()
            }
          }
        })
        .catch((error) => {
          console.error("Error fetching location:", error);
        });
    }
  }, [searchText, googleApisUrl, key]);

  const getInputSearch = (input: string) => {
    setSearchText(input);
  };

  return (
    <StyledView className="flex flex-col justify-between flex-1">
      {/* Main Content */}
      <StyledView className="relative flex-grow min-h-screen">
        {/* Map */}
        <Map mapType={mapType} initialRegion={initialRegion} mapRef={map} results={results} userLocation={userLocation}/>
        {/* Search Bar */}
        <StyledView className="absolute left-0 right-0 items-center top-5">
          <SearchBar action={getInputSearch} />
        </StyledView>
        {/* Options */}
        <StyledView className="absolute left-0 right-0 items-center top-20">
          <ToggleButton
            buttonText={"Tipo de Mapa"}
            children={<MapTypeToggle selectOption={selectMapType} />}
          />
        </StyledView>
      </StyledView>
      {/* Navigation Bar at the bottom */}
      <StyledView className="absolute bottom-0 left-0 right-0">
        <NavigationBar />
      </StyledView>
    </StyledView>
  );
}
