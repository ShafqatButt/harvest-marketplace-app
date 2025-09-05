import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { GST } from "@/src/theme/globalStyles";
import Svg, { Polygon } from "react-native-svg";
import AppText from "../../appText";
import { RF } from "@/src/theme/responsive";

const PolygonCard = ({ text }: { text: string }) => {
  const ribbonWidth = 150;
  const ribbonHeight = 40;
  const cutSize = 20;
  return (
    <View>
      <Svg
        width={ribbonWidth}
        height={ribbonHeight}
        viewBox={`0 0 ${ribbonWidth} ${ribbonHeight}`}
        style={[GST.ML5, GST.MT1]}
      >
        <Polygon
          points={`
                0,0
                ${ribbonWidth},0
                ${ribbonWidth - cutSize},${ribbonHeight / 2}
                ${ribbonWidth},${ribbonHeight}
                0,${ribbonHeight}
                ${cutSize},${ribbonHeight / 2}
                `}
          fill="#007b4a"
        />
      </Svg>
      <View style={styles.farmerTextContainer}>
        <AppText size={"BASE"} font={"Montserrat_Regular"} color={"WHITE"}>
          {text}
        </AppText>
      </View>
    </View>
  );
};

export default PolygonCard;

const styles = StyleSheet.create({
  farmerTextContainer: {
    position: "absolute",
    left: RF(50),
    top: RF(10),
    bottom: 0,
    right: 0,
  },
});
