import { useFonts } from "expo-font";
import { Redirect, SplashScreen } from "expo-router";
import React, { useEffect } from "react";
import { LogBox } from "react-native";
import { FONTS } from "../theme/fonts";

const Main = () => {
  const [loaded] = useFonts({
    ExtraBold: require("../assets/fonts/Urbanist-ExtraBold.ttf"),
    Bold: require("../assets/fonts/Urbanist-Bold.ttf"),
    SemiBold: require("../assets/fonts/Urbanist-SemiBold.ttf"),
    Medium: require("../assets/fonts/Urbanist-Medium.ttf"),
    Regular: require("../assets/fonts/Urbanist-Regular.ttf"),
    Italic: require("../assets/fonts/Urbanist-Italic.ttf"),
    Light: require("../assets/fonts/Urbanist-Light.ttf"),
    Montserrat_ExtraBold: require("../assets/fonts/Montserrat-ExtraBold.ttf"),
    Montserrat_Bold: require("../assets/fonts/Montserrat-Bold.ttf"),
    Montserrat_SemiBold: require("../assets/fonts/Montserrat-SemiBold.ttf"),
    Montserrat_Medium: require("../assets/fonts/Montserrat-Medium.ttf"),
    Montserrat_Regular: require("../assets/fonts/Montserrat-Regular.ttf"),
    Montserrat_Light: require("../assets/fonts/Montserrat-Light.ttf"),
    Montserrat_Thin: require("../assets/fonts/Montserrat-Thin.ttf"),
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
