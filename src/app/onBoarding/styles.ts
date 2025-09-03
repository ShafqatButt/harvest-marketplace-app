import { COLORS } from "@/src/theme/colors";
import { GST } from "@/src/theme/globalStyles";
import { RF } from "@/src/theme/responsive";
import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        ...GST.FLEX_ALIGNED
      },
      slide: {
        ...GST.FLEX_ALIGNED,
      },
      dotsContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginVertical: RF(20),
      },
      dot: {
        width: RF(8),
        height: RF(8),
        borderRadius: RF(5),
        backgroundColor: COLORS.GRAY_10,
        marginHorizontal: RF(5),
      },
      activeDot: {
        backgroundColor: COLORS.GREEN_90,
        width: RF(10),
        height: RF(10),
      },
      button: {
       backgroundColor: COLORS.BROWN_200, 
       paddingVertical: RF(14),
       paddingHorizontal:RF (40),
       borderRadius: RF(4),
       marginBottom: RF(40),
       ...GST.MX3,

  // iOS Shadow
       shadowColor: COLORS.GREEN_90, 
       shadowOffset: { width: 0, height: 4 },
       shadowOpacity: 0.4,
       shadowRadius: 6,

  // Android Shadow
      elevation: 8,
      },
      buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "600",
      },
});