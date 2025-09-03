import { COLORS, ColorType } from "@/src/theme/colors";
import React from "react";
import { ViewStyle } from "react-native";
import FastImage, {
  ImageStyle,
  ResizeMode,
  Source,
} from "react-native-fast-image";
import Pressable from "../pressable";
import { GST } from "@/src/theme/globalStyles";
import { RF } from "@/src/theme/responsive";

type Props = {
  path: Source;
  uri: string;
  resizeMode: ResizeMode;
  size: number;
  width: number;
  percentWidth: number;
  height: number;
  percentHeight: number;
  customStyle: ImageStyle;
  onPress: () => void;
  tintColor: ColorType;
  containerStyle: ViewStyle | ViewStyle[];
  radius: number;
};

const AppImage = ({
  path,
  uri,
  resizeMode = "contain",
  size,
  width = 0,
  height = 0,
  customStyle,
  percentWidth,
  percentHeight,
  onPress,
  tintColor,
  containerStyle,
  radius,
}: Partial<Props>) => {
  return (
    <>
      <Pressable
        disabled={!onPress}
        onPress={onPress}
        hitSlop={GST.HITSLOP}
        style={containerStyle}
      >
        <FastImage
          source={uri ? { uri } : path}
          resizeMode={resizeMode}
          style={[
            {
              width: percentWidth ? `${percentWidth}%` : RF(size || width),
              height: percentHeight ? `${percentHeight}%` : RF(size || height),
              borderRadius: radius ? RF(radius) : 0,
            },
            customStyle,
          ]}
          tintColor={tintColor && COLORS[tintColor]}
        />
      </Pressable>
    </>
  );
};

export default AppImage;
