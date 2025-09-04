import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppIcon from "../appIcon";
import { onboardingLogo } from "@/src/assets/images";
import { bell } from "@/src/assets/icons";
import { COLORS } from "@/src/theme/colors";
import { GST } from "@/src/theme/globalStyles";
import { RF } from "@/src/theme/responsive";

const NotificationHeader = () => {
  return (
    <View style={styles.bellMainContainer}>
      <AppIcon path={onboardingLogo} width={120} height={40} />
      <Pressable style={styles.bellContainer}>
        <AppIcon path={bell} size={20} />
      </Pressable>
    </View>
  );
};

export default NotificationHeader;

const styles = StyleSheet.create({
  bellMainContainer: {
    ...GST.FLEX_ROW_SPACED,
    ...GST.MX3,
  },
  bellContainer: {
    width: RF(40),
    height: RF(40),
    backgroundColor: COLORS.RED_500,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: RF(20),
  },
});
