import { View, Text, TouchableOpacity } from "react-native";
import { styled } from "nativewind";

const StyledView = styled(View);
const StyledButton = styled(TouchableOpacity);
const StyledText = styled(Text);

interface ButtonProps {
  buttonText: string;
  onPress: () => void;
}

/**
 * Renders a button with customizable text and press handler.
 * 
 * @param {Object} props - Component props
 * @param {string} props.buttonText - The text displayed on the button.
 * @param {() => void} props.onPress - Function to call when the button is pressed.
 * 
 * @returns {JSX.Element} A styled button with customizable text and press functionality.
 */
export default function Button({ buttonText, onPress }: ButtonProps): JSX.Element {
  return (
    <StyledView className="flex flex-col items-center w-fit">
      {/* Button */}
      <StyledButton
        onPress={onPress}
        className="flex flex-row items-center w-1/2 p-1 px-2 bg-white border-2 border-black rounded-full justify-evenly"
      >
        {/* Text Button */}
        <StyledText className="w-full text-lg font-bold text-center">
          {buttonText}
        </StyledText>
      </StyledButton>
    </StyledView>
  );
}
