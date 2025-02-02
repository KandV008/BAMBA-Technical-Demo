import Map from "@/components/map";
import NavigationBar from "@/components/navigationBar";
import ToggleButton from "@/components/buttons/toggleButton";
import SearchBar from "@/components/searchBar";
import { Keyboard, Pressable, View } from "react-native";
import { styled } from "nativewind";
import MapTypeToggle from "@/components/toggleMenu/mapTypeMenu";
import { useEffect, useRef, useState } from "react";
import { MapTypeEnum } from "./model/mapTypeEnum";
import MapView, { LatLng, Region } from "react-native-maps";
import EmergencyButton from "@/components/buttons/emergencyButton";
import Button from "@/components/buttons/button";
import { Link, router } from "expo-router";
import TextButton from "@/components/buttons/textButton";

const StyledView = styled(View);

// Constants for initial map settings
const INITIAL_LAT = 40.445414;
const INITIAL_LNG = -4.001441;
const LATITUDE_DELTA = 0.02;
const LONGITUDE_DELTA = 0.02;

// Google Maps API configuration
const googleApisUrl =
  "https://maps.googleapis.com/maps/api/place/textsearch/json";
const key = process.env.EXPO_PUBLIC_GOOGLE_MAPS_KEY;

// Initial region for the map
const initialRegion: Region = {
  latitude: INITIAL_LAT,
  longitude: INITIAL_LNG,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA,
};

// Default user location
const userLocation: LatLng = {
  latitude: INITIAL_LAT,
  longitude: INITIAL_LNG,
};

/**
 * Fetches search results from Google Maps API.
 *
 * @param {string} searchText - The text to search for.
 * @param {string} location - The location coordinates as a string.
 * @returns {Promise<any[]>} - A promise that resolves to an array of search results.
 */
async function fetchSearchResults(
  searchText: string,
  location: string
): Promise<any[]> {
  const url = `${googleApisUrl}?query=${encodeURIComponent(
    searchText
  )}&location=${location}&radius=20&key=${key}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return data.results || [];
}

/**
 * Adjusts the map view to fit provided coordinates.
 *
 * @param {React.RefObject<MapView>} mapRef - Reference to the MapView component.
 * @param {LatLng[]} coords - Array of coordinates to fit.
 */
function handleMapCoordinates(
  mapRef: React.RefObject<MapView>,
  coords: LatLng[]
): void {
  if (coords.length) {
    mapRef.current?.fitToCoordinates(coords, {
      edgePadding: {
        top: 50,
        right: 50,
        bottom: 50,
        left: 50,
      },
      animated: true,
    });
    Keyboard.dismiss();
  }
}

/**
 * Main component of the application.
 * It manages the map, search, and UI interactions.
 *
 * @returns {JSX.Element} The Index component.
 */
export default function Index(): JSX.Element {
  const [mapType, setMapType] = useState<MapTypeEnum>("standard");
  const selectMapType = (option: MapTypeEnum): void => {
    setMapType(option);
  };

  const [searchText, setSearchText] = useState<string>("");
  const [results, setResults] = useState<any[]>([]);
  const map = useRef<MapView | null>(null);

  useEffect(() => {
    if (searchText.trim().length) {
      const input = searchText.trim();
      const location = `${INITIAL_LAT},${INITIAL_LNG}`;

      fetchSearchResults(input, location)
        .then((fetchedResults) => {
          const coords: LatLng[] = fetchedResults.map((item: any) => ({
            latitude: item.geometry.location.lat,
            longitude: item.geometry.location.lng,
          }));

          setResults(fetchedResults);
          handleMapCoordinates(map, coords);
        })
        .catch((error) => {
          console.error("Error fetching location:", error);
        });
    }
  }, [searchText]);

  const getInputSearch = (input: string): void => {
    setSearchText(input);
  };

  return (
    <StyledView className="flex flex-col justify-between flex-1">
      {/* Main Content */}
      <StyledView className="relative flex-grow min-h-screen">
        {/* Map */}
        <Map
          mapType={mapType}
          initialRegion={initialRegion}
          mapRef={map}
          results={results}
          userLocation={userLocation}
        />
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
      {/* Quiz Button */}
      <StyledView className="absolute left-5 bottom-24 ">
      <TextButton
            buttonText={"Encuesta"}
            onPress={() => router.push("./quiz")}
          />
      </StyledView>
      {/* Emergency Button */}
      <StyledView className="absolute right-5 bottom-20 ">
        <EmergencyButton />
      </StyledView>
      {/* Navigation Bar at the bottom */}
      <StyledView className="absolute bottom-0 left-0 right-0">
        <NavigationBar />
      </StyledView>
    </StyledView>
  );
}
