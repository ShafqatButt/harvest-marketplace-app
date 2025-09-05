import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useRef } from "react";
import { GST } from "@/src/theme/globalStyles";
import Carousel, {
  ICarouselInstance,
  Pagination,
} from "react-native-reanimated-carousel";
import { useSharedValue } from "react-native-reanimated";
import { HP, RF, WP } from "@/src/theme/responsive";
import { COLORS } from "@/src/theme/colors";
import AppText from "../../appText";
import Pressable from "../../pressable";
import PolygonCard from "./polygonCard";
import AppImage from "../../appImage";
import { sliderPic } from "@/src/assets/images";

const width = Dimensions.get("screen").width;
interface Props {
  data: SliderActions[];
}

const SliderCard = ({ data }: Props) => {
  const ref = useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);

  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      count: index - progress.value,
      animated: true,
    });
  };

  return (
    <View style={[GST.FLEX, GST.MT3]}>
      <Carousel
        ref={ref}
        width={width}
        height={HP(25)}
        data={data}
        onProgressChange={progress}
        renderItem={({ item }) => {
          return (
            <ImageBackground
              source={item?.backgroundImage}
              resizeMode={"cover"}
              style={styles.backgroundImageStyle}
              imageStyle={{ borderRadius: RF(30) }}
            >
              <View style={{ flexDirection: "row" }}>
                <View style={{ width: "50%" }}>
                  <AppText
                    color={"GREEN_70"}
                    style={[GST.MT5, GST.ML7]}
                    size={"BASE"}
                    font={"Montserrat_Regular"}
                  >
                    {item?.text_1}
                  </AppText>
                  <PolygonCard text={item?.buttonText_1} />
                  <AppText
                    size={"SM"}
                    font={"Montserrat_Regular"}
                    color={"BROWN_250"}
                    style={GST.ML18}
                  >
                    {item.text_2}
                  </AppText>
                  <AppText
                    size={"SM"}
                    font={"Montserrat_Regular"}
                    color={"BROWN_250"}
                    style={GST.ML18}
                  >
                    {item.text_3}
                  </AppText>
                  <View style={styles.sellContainer}>
                    <AppText
                      size={"TINY"}
                      font={"BOLD"}
                      color={"WHITE"}
                      style={GST.MT2}
                    >
                      {item.TAndC}
                    </AppText>
                    <Pressable style={styles.sellBtnContainer}>
                      <AppText size={"SM"} color={"WHITE"}>
                        {item?.buttonText_2}
                      </AppText>
                    </Pressable>
                  </View>
                </View>
                <View
                  style={{
                    alignSelf: "baseline",
                  }}
                >
                  <AppImage
                    path={sliderPic}
                    // height={RF(200)}
                    // width={RF(160)}
                    height={HP(25)}
                    width={WP(45)}
                    resizeMode={"contain"}
                  />
                </View>
              </View>
            </ImageBackground>
          );
        }}
      />
      <Pagination.Basic
        progress={progress}
        data={data}
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
        containerStyle={styles.container}
        onPress={onPressPagination}
      />
    </View>
  );
};

export default SliderCard;

const styles = StyleSheet.create({
  backgroundImageStyle: {
    width: width,
    height: HP(25),
  },
  dotStyle: {
    backgroundColor: COLORS.GRAY_10,
    borderRadius: RF(50),
  },
  activeDotStyle: {
    backgroundColor: COLORS.GREEN_80,
  },
  container: {
    gap: RF(10),
    marginTop: RF(10),
  },
  sellBtnContainer: {
    height: RF(25),
    width: RF(70),
    backgroundColor: COLORS.ORANGE_150,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: RF(5),
  },
  sellContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    ...GST.MT4,
    width: "75%",
    ...GST.ML4,
  },
});
