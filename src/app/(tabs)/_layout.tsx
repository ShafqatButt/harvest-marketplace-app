import React from "react";
import { Link, Tabs } from "expo-router";
import { StyleSheet, View } from "react-native";
import { RF } from "@/src/theme/responsive";
import AppIcon from "@/src/components/appIcon";
import AppText from "@/src/components/appText";
import { GST } from "@/src/theme/globalStyles";
import { COLORS } from "@/src/theme/colors";
import { Source } from "react-native-fast-image";
import { cart, explore, home, profile } from "@/src/assets/icons";

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
            tabBarIcon: (props) => (
              <TabBarIcon {...props} icon={home} label={"Home"} />
            ),
          }}
        />
        <Tabs.Screen
          name="explore"
          options={{
            title: "Explore",
            tabBarIcon: (props) => (
              <TabBarIcon {...props} icon={explore} label={"Explore"} />
            ),
          }}
        />
        <Tabs.Screen
          name="cart"
          options={{
            title: "Cart",
            tabBarIcon: (props) => (
              <TabBarIcon {...props} icon={cart} label={"Cart"} />
            ),
          }}
        />

        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            tabBarIcon: (props) => (
              <TabBarIcon {...props} icon={profile} label={"Profile"} />
            ),
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
  <View style={[styles.tabBarIcon]}>
    <AppIcon
      path={icon}
      size={24}
      tintColor={focused ? "GREEN_80" : "SPANISH_GRAY"}
      containerStyle={GST.MB0_5}
    />
    <AppText size={"XS"} color={focused ? "GREEN_80" : "SPANISH_GRAY"}>
      {label}
    </AppText>
  </View>
);
const styles = StyleSheet.create({
  tabBar: {
    borderTopRightRadius: RF(16),
    borderTopLeftRadius: RF(16),
    height: RF(80),
    alignItems: "center",
    justifyContent: "center",
  },
  tabBarIcon: {
    alignItems: "center",
    justifyContent: "center",
    minWidth: RF(70),
    marginTop: RF(20),
  },
});
