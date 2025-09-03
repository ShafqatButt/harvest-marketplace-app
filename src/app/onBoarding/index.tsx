import {
  Dimensions,
  FlatList,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React, { useState } from "react";
import { router, useRouter } from "expo-router";
import {
  onboarding_1,
  onboarding_2,
  onboarding_3,
  onboarding_4,
  onboardingLogo,
} from "@/src/assets/images";
import SafeAreaWrapper from "@/src/components/safeAreaWrapper";
import { styles } from "./styles";
import PrimaryBtn from "@/src/components/primaryBtn";
import AppText from "@/src/components/appText";
import AppIcon from "@/src/components/appIcon";
import { HP, RF, WP } from "@/src/theme/responsive";
import { GST } from "@/src/theme/globalStyles";
import AppImage from "@/src/components/appImage";

const { width } = Dimensions.get("window");

const onboardingData = [
  {
    id: "1",
    icon: onboardingLogo,
    des: "Delivering the supply of quality produce",
    image: onboarding_1,
  },
  {
    id: "2",
    title: "Trust",
    des: "Only verified farmers and suppliers list their produce here — ensuring authenticity and quality you can rely on",
    image: onboarding_2,
  },
  {
    id: "3",
    title: "Trade",
    des: "Seamless transactions with full support at every step — making buying and selling hassle-free",
    image: onboarding_3,
  },
  {
    id: "4",
    title: "Grow",
    des: "Stronger connections, better opportunities, and sustainable growth for everyone in the agri value chain",
    image: onboarding_4,
  },
];

const OnBoarding = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (event: any) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(index);
  };

  return (
    <SafeAreaWrapper>
      <FlatList
        data={onboardingData}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        renderItem={({ item }) => (
          <View style={[styles.slide, { width }]}>
            {item.id === "1" ? (
              <AppIcon
                path={item.icon}
                width={RF(187)}
                height={RF(66)}
                containerStyle={GST.MT10}
              />
            ) : (
              <AppText font={"EXTRA_BOLD"} size={"4XL"} style={GST.MT15}>
                {item.title}
              </AppText>
            )}
            <AppText
              font={"SEMI_BOLD"}
              size={"2XL"}
              center
              style={[GST.MX5, GST.MT10]}
            >
              {item.des}
            </AppText>
            <AppImage
              path={item.image}
              width={RF(300)}
              height={RF(350)}
              resizeMode="contain"
            />
          </View>
        )}
      />
      <View style={styles.dotsContainer}>
        {onboardingData.map((_, index) => (
          <View
            key={index}
            style={[styles.dot, currentIndex === index && styles.activeDot]}
          />
        ))}
      </View>
      <PrimaryBtn
        title={"Get Started"}
        onPress={() => router.replace("/(tabs)/home")}
        containerStyle={styles.button}
      />
    </SafeAreaWrapper>
  );
};

export default OnBoarding;
