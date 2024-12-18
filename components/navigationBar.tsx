import Ionicons from "@expo/vector-icons/Ionicons";
import { View, Text, TouchableOpacity } from "react-native";
import { styled } from "nativewind";

const StyledView = styled(View);
const StyledButton = styled(TouchableOpacity);
const StyledText = styled(Text);

/**
 * NavigationBar component.
 * Displays a bottom navigation bar with two buttons: 
 * "Pasear" (Street mode) and "Colaborar" (Collaborate mode).
 *
 * Each button contains an icon from Ionicons and a text label.
 *
 * @returns {JSX.Element} A styled navigation bar component.
 */
export default function NavigationBar() {
  return (
    <StyledView className="flex flex-row w-full text-black bg-white">
      {/* Street Button */}
      <StyledButton className="flex flex-col items-center justify-center w-1/2 py-2 bg-transparent rounded-lg">
        <Ionicons name="walk" size={24} color="black" />
        <StyledText className="ml-2 text-lg">Pasear</StyledText>
      </StyledButton>
      {/* Collaborate Button */}
      <StyledButton className="flex flex-col items-center justify-center w-1/2 py-2 bg-transparent rounded-lg">
        <Ionicons name="duplicate" size={24} color="black" />
        <StyledText className="ml-2 text-lg">Colaborar</StyledText>
      </StyledButton>
    </StyledView>
  );
}
