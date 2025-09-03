import { useFonts } from "expo-font";
import { Redirect, SplashScreen } from "expo-router";
import React, { useEffect } from "react";
import { LogBox } from "react-native";

const Main = () => {
  const [loaded] = useFonts({
    ExtraBold: require("../assets/fonts/Urbanist-ExtraBold.ttf"),
    Bold: require("../assets/fonts/Urbanist-Bold.ttf"),
    SemiBold: require("../assets/fonts/Urbanist-SemiBold.ttf"),
    Medium: require("../assets/fonts/Urbanist-Medium.ttf"),
    Regular: require("../assets/fonts/Urbanist-Regular.ttf"),
    Italic: require("../assets/fonts/Urbanist-Italic.ttf"),
    Light: require("../assets/fonts/Urbanist-Light.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
      LogBox.ignoreAllLogs();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <Redirect href={"/onBoarding"} />;
};

export default Main;
