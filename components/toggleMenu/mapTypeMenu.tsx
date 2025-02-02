import { MapTypeEnum } from "@/app/model/mapTypeEnum";
import { styled } from "nativewind";
import { View, Text, TouchableOpacity } from "react-native";

const StyledView = styled(View);
const StyledButton = styled(TouchableOpacity);
const StyledText = styled(Text);

interface MapTypeToggleProps {
  /**
   * Callback function to handle the selection of a map type.
   *
   * @param {MapTypeEnum} option - The selected map type.
   */
  selectOption: (option: MapTypeEnum) => void;
}

/**
 * MapTypeToggle component
 * A component that provides options to toggle between different map types (e.g., "standard" and "satellite").
 *
 * @param {MapTypeToggleProps} props - The properties for the MapTypeToggle component.
 * @param {(option: MapTypeEnum) => void} props.selectOption - Callback function to handle map type selection.
 * @returns {JSX.Element} The MapTypeToggle component.
 */
export default function MapTypeToggle({ selectOption }: MapTypeToggleProps): JSX.Element {
  return (
    <StyledView className="flex flex-col justify-between bg-white border-2 border-black">
      {/* Standard Map Option */}
      <StyledButton
        onPress={() => {
          selectOption("standard");
        }}
        className="p-2"
      >
        <StyledText className="text-base font-bold text-center">Estándar</StyledText>
      </StyledButton>
      {/* Satellite Map Option */}
      <StyledButton
        onPress={() => {
          selectOption("satellite");
        }}
        className="p-2"
      >
        <StyledText className="text-base font-bold text-center">Satelital</StyledText>
      </StyledButton>
    </StyledView>
  );
}
