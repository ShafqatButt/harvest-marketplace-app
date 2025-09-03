import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    ExtraBold: require("../assets/fonts/Urbanist-ExtraBold.ttf"),
    Bold: require("../assets/fonts/Urbanist-Bold.ttf"),
    SemiBold: require("../assets/fonts/Urbanist-SemiBold.ttf"),
    Medium: require("../assets/fonts/Urbanist-Medium.ttf"),
    Regular: require("../assets/fonts/Urbanist-Regular.ttf"),
    Italic: require("../assets/fonts/Urbanist-Italic.ttf"),
    Light: require("../assets/fonts/Urbanist-Light.ttf"),
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
