import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { GST } from "@/src/theme/globalStyles";
import { COLORS } from "@/src/theme/colors";
import AppIcon from "../appIcon";
import AppText from "../appText";
import { RF } from "@/src/theme/responsive";

interface Props {
  data: Actions[];
}

const ActionsCard = ({ data }: Props) => {
  return (
    <View style={styles.container}>
      {data.map((item, index) => {
        const parts = item.text.split(" ");
        return (
          <Pressable key={index} style={styles.card}>
            <AppIcon path={item?.icon} size={21} />
            <AppText style={styles.text} size={"XS"}>
              {parts.map((word, index) =>
                word.toLowerCase().includes(item.bold.toLowerCase()) ? (
                  <AppText key={index} style={styles.bold}>
                    {word + " "}
                  </AppText>
                ) : (
                  <AppText key={index}>{word + " "}</AppText>
                )
              )}
            </AppText>
          </Pressable>
        );
      })}
    </View>
  );
};

export default ActionsCard;

const styles = StyleSheet.create({
  container: {
    ...GST.FLEX_ROW_SPACED,
    ...GST.MX3,
    ...GST.MT3,
  },
  card: {
    flex: 1,
    borderWidth: RF(0.6),
    borderColor: COLORS.GRAY_10,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.WHITE,
    borderRadius: RF(2),
    padding: RF(10),
    marginHorizontal: RF(3),
    shadowColor: COLORS.BLACK_800,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 6,
  },
  text: {
    flexWrap: "wrap",
    ...GST.ML1,
  },
  bold: {
    fontWeight: "700",
  },
});
