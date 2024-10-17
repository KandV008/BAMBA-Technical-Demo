import Map from "@/components/map";
import NavigationBar from "@/components/navigationBar";
import Options from "@/components/options";
import SearchBar from "@/components/searchBar";
import { View } from "react-native";
import { styled } from "nativewind";

const StyledView = styled(View);

export default function Index() {
  return (
    <StyledView className="flex flex-col justify-between flex-1">
      {/* Main Content */}
      <StyledView className="relative flex-grow min-h-screen">
        {/* Map */}
        <Map />

        {/* Search Bar */}
        <StyledView className="absolute left-0 right-0 items-center top-5">
          <SearchBar />
        </StyledView>

        {/* Options */}
        <StyledView className="absolute left-0 right-0 items-center top-20">
          <Options />
        </StyledView>
      </StyledView>

      {/* Navigation Bar at the bottom */}
      <StyledView className="absolute bottom-0 left-0 right-0">
        <NavigationBar />
      </StyledView>
    </StyledView>
  );
}
