import Ionicons from "@expo/vector-icons/Ionicons";
import { View, TextInput } from "react-native";
import { styled } from "nativewind";
import { useState } from "react";

const StyledView = styled(View);
const StyledInput = styled(TextInput);

interface SearchBarProps {
  action: (input: string) => void;
}

/**
 * SearchBar component.
 * Displays a search input field with a search icon and handles text input submission.
 *
 * @param action Function to call with the input text when the user submits the search.
 * 
 * @returns {JSX.Element} A styled search bar component with an input field and search icon.
 */
export default function SearchBar({ action }: SearchBarProps) {
  const [inputText, setInputText] = useState("");

  /**
   * Handles the submission of the text input.
   * Calls the `action` function with the input text and clears the input field.
   */
  const handleTextSubmit = () => {
    console.log("Search:", inputText);
    action(inputText);
    setInputText("");
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
