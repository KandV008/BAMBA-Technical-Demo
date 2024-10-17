import Ionicons from "@expo/vector-icons/Ionicons";
import { View, Text, TouchableOpacity } from "react-native";
import { styled } from "nativewind";

const StyledView = styled(View);
const StyledButton = styled(TouchableOpacity);
const StyledText = styled(Text);

export default function Options() {
  return (
    <StyledView className="flex flex-row gap-2">
      {/* Map Type */}
      <StyledButton className="flex flex-row p-1 px-2 bg-white border-2 border-black rounded-full">
        <Ionicons name="chevron-down" size={20} color="black" />
        <StyledText className="text-sm">Seleccionar tipo de mapa</StyledText>
      </StyledButton>
      {/* Index View */}
      <StyledButton className="flex flex-row p-1 px-2 bg-white border-2 border-black rounded-full">
        <Ionicons name="chevron-down" size={20} color="black" />
        <StyledText className="text-sm">Seleccionar índice</StyledText>
      </StyledButton>
    </StyledView>
  );
}
