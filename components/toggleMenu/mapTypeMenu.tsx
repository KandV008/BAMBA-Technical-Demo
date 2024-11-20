import { MapTypeEnum } from "@/app/model/mapTypeEnum";
import { styled } from "nativewind";
import { View, Text, TouchableOpacity } from "react-native";

const StyledView = styled(View);
const StyledButton = styled(TouchableOpacity);
const StyledText = styled(Text);

interface MapTypeToggleProps{
    selectOption: (option: MapTypeEnum) => void
}

export default function MapTypeToggle({ selectOption }: MapTypeToggleProps) {
  return (
    <StyledView className="flex flex-col justify-between bg-white border-2 border-black">
      <StyledButton onPress={() => {selectOption("standard")}} className="p-2">
        <StyledText className="text-base font-bold text-center">Estándar</StyledText>
      </StyledButton>
      <StyledButton onPress={() => {selectOption("satellite")}} className="p-2">
        <StyledText className="text-base font-bold text-center">Satelital</StyledText>
      </StyledButton>
    </StyledView>
  );
}
