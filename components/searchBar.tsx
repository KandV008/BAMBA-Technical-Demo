import Ionicons from "@expo/vector-icons/Ionicons";
import { View, TextInput } from "react-native";
import { styled } from "nativewind";
import { useState } from "react";

const StyledView = styled(View);
const StyledInput = styled(TextInput);

interface SearchBarProps {
  action: (input: string) => void
}

export default function SearchBar({ action }: SearchBarProps) {
  const [inputText, setInputText] = useState("");

  const handleTextSubmit = () => {
    console.log("Search:", inputText);
    action(inputText)
    setInputText("")
  };

  return (
    <StyledView className="flex flex-row justify-between w-5/6 px-5 py-2 bg-white border-2 border-black rounded-3xl">
      {/* Profile Button */}
      {/* TODO */}
      {/* Input */}
      <StyledInput
        className="text-lg placeholder:text-gray-900"
        placeholder="Selecciona tu destino..."
        value={inputText}
        onChangeText={setInputText}
        onSubmitEditing={handleTextSubmit}
        returnKeyType="search"
      />
      {/* Icon */}
      <StyledView>
        <Ionicons name="search" size={32} color="black" />
      </StyledView>
    </StyledView>
  );
}
