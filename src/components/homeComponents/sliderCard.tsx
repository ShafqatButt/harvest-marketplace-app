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
import { RF } from "@/src/theme/responsive";
import { COLORS } from "@/src/theme/colors";
import AppText from "../appText";

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
    <View style={GST.FLEX}>
      <Carousel
        ref={ref}
        width={width}
        height={width / 2}
        data={data}
        onProgressChange={progress}
        renderItem={({ item }) => {
          return (
            <ImageBackground
              source={item?.backgroundImage}
              resizeMode={"contain"}
              style={styles.backgroundImageStyle}
              imageStyle={{ borderRadius: RF(30) }}
            >
              <AppText
                color={"GREEN_70"}
                style={[GST.MT5, GST.ML7]}
                font={"Mont_Regular"}
                size={"BASE"}
              >
                {item?.text_1}
              </AppText>
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
    height: width / 2,
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
});
