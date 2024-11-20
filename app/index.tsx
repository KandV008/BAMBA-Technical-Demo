import Map from "@/components/map";
import NavigationBar from "@/components/navigationBar";
import ToggleButton from "@/components/toggleButton";
import SearchBar from "@/components/searchBar";
import { View } from "react-native";
import { styled } from "nativewind";
import MapTypeToggle from "@/components/toggleMenu/mapTypeMenu";
import { useState } from "react";
import { MapTypeEnum } from "./model/mapTypeEnum";

const StyledView = styled(View);

export default function Index() {
  const [mapType, setMapType] = useState<MapTypeEnum>("standard")

  const selectMapType = (option: MapTypeEnum) => {
    setMapType(option)
  }

  return (
    <StyledView className="flex flex-col justify-between flex-1">
      {/* Main Content */}
      <StyledView className="relative flex-grow min-h-screen">
        {/* Map */}
        <Map mapType={mapType}/>
        {/* Search Bar */}
        <StyledView className="absolute left-0 right-0 items-center top-5">
          <SearchBar />
        </StyledView>
        {/* Options */}
        <StyledView className="absolute left-0 right-0 items-center top-20">
          <ToggleButton buttonText={"Tipo de Mapa"} children={<MapTypeToggle selectOption={selectMapType} />}  />
        </StyledView>
      </StyledView>
      {/* Navigation Bar at the bottom */}
      <StyledView className="absolute bottom-0 left-0 right-0">
        <NavigationBar />
      </StyledView>
    </StyledView>
  );
}
