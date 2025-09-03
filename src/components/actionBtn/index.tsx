import { COLORS, ColorType } from "@/src/theme/colors";
import AppText from "../appText";
import React from "react";
import { StyleSheet, ViewStyle } from "react-native";
import { Source } from "react-native-fast-image";
import { GST } from "@/src/theme/globalStyles";
import { RF } from "@/src/theme/responsive";
import Pressable from "../pressable";
import AppIcon from "../appIcon";

type Props = {
  title: string;
  icon: Source;
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  onPress?: () => void;
  bgColor?: ColorType;
  containerStyle?: ViewStyle | ViewStyle[];
  iconPosition: "left" | "right";
};

const ActionBtn = ({
  title,
  icon,
  top,
  bottom,
  left,
  right,
  onPress,
  bgColor = "WHITE",
  containerStyle,
  iconPosition,
}: Props) => (
  <Pressable
    style={[
      styles.container,
      { top, bottom, left, right, backgroundColor: COLORS[bgColor] },
      containerStyle as ViewStyle,
    ]}
    onPress={onPress}
  >
    {iconPosition == "left" && (
      <AppIcon path={icon} size={23} tintColor={"GREEN_500"} />
    )}
    <AppText
      font={"SEMI_BOLD"}
      size={"BASE"}
      color={"GREEN_500"}
      style={GST.MX2}
    >
      {title}
    </AppText>
    {iconPosition == "right" && <AppIcon path={icon} size={24} />}
  </Pressable>
);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: RF(16),
    paddingVertical: RF(8),
    borderRadius: RF(16),
    ...GST.FLEX_ROW,
    ...GST.SHADOW_LIGHT,
    position: "absolute",
  },
});

export default ActionBtn;
