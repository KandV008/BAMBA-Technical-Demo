import { View, Text, TouchableOpacity } from "react-native";
import { styled } from "nativewind";

const StyledView = styled(View);
const StyledButton = styled(TouchableOpacity);
const StyledText = styled(Text);

/**
 * TextButton Component
 * 
 * A reusable button component styled with NativeWind and React Native.
 * 
 * @param {Object} props - Component props.
 * @param {string} props.buttonText - The text displayed on the button.
 * @param {() => void} props.onPress - Function to call when the button is pressed.
 * 
 * @returns {JSX.Element} A styled button with customizable text and press functionality.
 */
interface ButtonProps {
  buttonText: string;
  onPress: () => void;
}

/**
 * Renders a text button with customizable text and press handler.
 * 
 * @param {ButtonProps} props - The props for the button.
 */
export default function TextButton({ buttonText, onPress }: ButtonProps): JSX.Element {
  return (
    <StyledView className="flex flex-col items-center w-fit">
      {/* Button */}
      <StyledButton
        onPress={onPress}
        className="flex flex-row items-center p-2 px-8 my-3 bg-white border-2 border-black rounded-full w-fit justify-evenly"
      >
        {/* Text Button */}
        <StyledText className="text-lg font-bold text-center w-fit">
          {buttonText}
        </StyledText>
      </StyledButton>
    </StyledView>
  );
}
