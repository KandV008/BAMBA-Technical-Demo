import { View, Text, TouchableOpacity } from "react-native";
import { styled } from "nativewind";

const StyledView = styled(View);
const StyledButton = styled(TouchableOpacity);
const StyledText = styled(Text);

interface ButtonProps {
  buttonText: string;
  onPress: () => void;
}

export default function Button({ buttonText, onPress }: ButtonProps): JSX.Element {

  return (
    <StyledView className="flex flex-col items-center w-fit">
      {/* Button */}
      <StyledButton
        onPress={onPress}
        className="flex flex-row w-1/2 p-1 px-2 bg-white border-2 border-black rounded-full justify-evenly"
      >
        {/* Text Button */}
        <StyledText className="text-lg font-bold">{buttonText}</StyledText>
      </StyledButton>
    </StyledView>
  );
}
