import { View, TouchableOpacity, Platform, Linking } from "react-native";
import { styled } from "nativewind";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const StyledView = styled(View);
const StyledButton = styled(TouchableOpacity);

/**
 * EmergencyButton component
 * This component renders a styled emergency button. When pressed, it initiates a phone call to the emergency number (112).
 *
 * @returns {JSX.Element} The EmergencyButton component.
 */
export default function EmergencyButton(): JSX.Element {
  /**
   * Initiates a phone call to the emergency number (112).
   * Uses platform-specific schemes for Android and iOS.
   */
  const makePhoneCall = (): void => {
    if (Platform.OS === "android") {
      Linking.openURL("tel:112");
    } else {
      Linking.openURL("telprompt:112");
    }
  };

  return (
    <StyledView className="flex flex-col w-fit">
      {/* Emergency Button */}
      <StyledButton
        onPress={makePhoneCall}
        className="flex flex-row items-center justify-center w-20 h-20 p-1 px-2 bg-red-400 border-2 border-black rounded-full"
      >
        {/* SOS Icon */}
        <MaterialIcons name="sos" size={44} color="black" />
      </StyledButton>
    </StyledView>
  );
}
