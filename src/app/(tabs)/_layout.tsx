import React from "react";
import { Link, Tabs } from "expo-router";
import { StyleSheet, View } from "react-native";
import { RF } from "@/src/theme/responsive";
import AppIcon from "@/src/components/appIcon";
import AppText from "@/src/components/appText";
import { GST } from "@/src/theme/globalStyles";
import { COLORS } from "@/src/theme/colors";
import { Source } from "react-native-fast-image";

export default function TabLayout() {
  return (
    <>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: styles.tabBar,
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
          }}
        />
        <Tabs.Screen
          name="explore"
          options={{
            title: "Explore",
          }}
        />
        <Tabs.Screen
          name="cart"
          options={{
            title: "Cart",
          }}
        />

        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
          }}
        />
      </Tabs>
    </>
  );
}

const TabBarIcon = ({
  focused,
  icon,
  label,
}: {
  focused: boolean;
  icon: Source;
  label: string;
}) => (
  <View
    style={[
      styles.tabBarIcon,
      { backgroundColor: focused ? COLORS.GREEN_300 : COLORS.GREEN_100 },
    ]}
  >
    <AppIcon
      path={icon}
      size={32}
      tintColor={focused ? "WHITE" : "GRAY_400"}
      containerStyle={GST.MB0_5}
    />
    <AppText size={"XS"} color={focused ? "WHITE" : "BLACK_800"}>
      {label}
    </AppText>
  </View>
);
const styles = StyleSheet.create({
  tabBar: {
    borderTopRightRadius: RF(16),
    borderTopLeftRadius: RF(16),
    height: RF(100),
  },
  tabBarIcon: {},
});
