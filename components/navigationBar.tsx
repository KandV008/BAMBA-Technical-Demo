import Ionicons from "@expo/vector-icons/Ionicons";
import { View, Text, TouchableOpacity } from "react-native";
import { styled } from "nativewind";

const StyledView = styled(View);
const StyledButton = styled(TouchableOpacity);
const StyledText = styled(Text);

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
