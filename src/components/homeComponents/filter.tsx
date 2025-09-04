import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Input from "../input";
import { COLORS } from "@/src/theme/colors";
import { RF, WP } from "@/src/theme/responsive";
import Pressable from "../pressable";
import AppIcon from "../appIcon";
import { filter, search } from "@/src/assets/icons";
import { GST } from "@/src/theme/globalStyles";

const SearchAndFilter = () => {
  return (
    <View style={styles.mainContainer}>
      <Input
        containerStyle={styles.inputContainer}
        leftIcon={search}
        placeholder={"Search"}
      />
      <AppIcon
        path={filter}
        size={25}
        containerStyle={styles.filterContainer}
      />
    </View>
  );
};

export default SearchAndFilter;

const styles = StyleSheet.create({
  mainContainer: {
    ...GST.FLEX_ROW_SPACED,
    ...GST.MX1,
    ...GST.MT3,
  },
  inputContainer: {
    backgroundColor: COLORS.WHITE,
    borderWidth: RF(1),
    borderColor: COLORS.GRAY_70,
    borderRadius: RF(30),
    width: WP(82),
    height: RF(48),
  },
  filterContainer: {
    height: RF(48),
    width: RF(48),
    backgroundColor: COLORS.GREEN_50,
    borderRadius: RF(30),
    justifyContent: "center",
    alignItems: "center",
    bottom: RF(8),
  },
});
