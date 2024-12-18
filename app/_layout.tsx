import { Stack } from "expo-router";

/**
 * RootLayout component
 * This component defines the root layout for the application using `expo-router`.
 * It configures a stack navigator with a single screen.
 *
 * @returns {JSX.Element} The RootLayout component with the stack configuration.
 */
export default function RootLayout(): JSX.Element {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "BAMBA-MVP", // Sets the title displayed in the header
          headerTitleAlign: "center", // Centers the header title
        }}
      />
    </Stack>
  );
}
