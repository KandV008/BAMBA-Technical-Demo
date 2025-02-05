import Ionicons from "@expo/vector-icons/Ionicons";
import { View, Text, TouchableOpacity } from "react-native";
import { styled } from "nativewind";
import { useState } from "react";

const StyledView = styled(View);
const StyledButton = styled(TouchableOpacity);
const StyledText = styled(Text);

interface ToggleButtonProps {
  buttonText: string;
  children: React.ReactNode;
}

/**
 * ToggleButton component
 * A button that toggles the visibility of additional content when pressed.
 *
 * @param {ToggleButtonProps} props - The properties for the ToggleButton component.
 * @param {string} props.buttonText - The text displayed on the button.
 * @param {React.ReactNode} props.children - The content displayed when the button is toggled open.
 * @returns {JSX.Element} The ToggleButton component.
 */
export default function ToggleButton({ buttonText, children }: ToggleButtonProps): JSX.Element {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <StyledView className="flex flex-col w-fit">
      {/* Button */}
      <StyledButton
        onPress={() => {
          setIsExpanded(!isExpanded);
        }}
        className="flex flex-row p-1 px-2 bg-white border-2 border-black rounded-full justify-evenly"
      >
        {/* Icon */}
        {isExpanded ? (
          <Ionicons name="chevron-up" size={20} color="black" />
        ) : (
          <Ionicons name="chevron-down" size={20} color="black" />
        )}
        <StyledText className="text-base">{buttonText}</StyledText>
      </StyledButton>
      {/* Toggle Menu */}
      <StyledView className="m-3">
        <StyledView className="flex flex-col gap-1" role="none">
          {isExpanded && (
            <StyledView className="w-full">{children}</StyledView>
          )}
        </StyledView>
      </StyledView>
    </StyledView>
  );
}
