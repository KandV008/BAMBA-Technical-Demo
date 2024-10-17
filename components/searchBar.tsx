import Ionicons from "@expo/vector-icons/Ionicons";
import { View, TextInput } from "react-native";
import { styled } from 'nativewind';

const StyledView = styled(View)
const StyledInput = styled(TextInput)

export default function SearchBar() {
  return (
    <StyledView className="flex flex-row justify-between w-5/6 px-5 py-2 bg-white border-2 border-black rounded-3xl">
      {/* Profile Button */}
        {/* TODO */}
      {/* Input */}
      <StyledInput
        className="text-lg placeholder:text-gray-900"
        placeholder="Selecciona tu destino..."
      />
      {/* Icon */}
      <StyledView >
        <Ionicons name="search" size={32} color="black" />
      </StyledView>
    </StyledView>
  );
}
