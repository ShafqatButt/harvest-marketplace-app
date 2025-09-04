import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SafeAreaWrapper from "@/src/components/safeAreaWrapper";
import NotificationHeader from "@/src/components/homeComponents/notificationHeader";
import SearchAndFilter from "@/src/components/homeComponents/filter";
import { category, logistic, quotation } from "@/src/assets/icons";
import ActionsCard from "@/src/components/homeComponents/actionsCard";
import { slide, sliderPic } from "@/src/assets/images";
import SliderCard from "@/src/components/homeComponents/sliderCard";

const Home = () => {
  const actions: Actions[] = [
    {
      id: 1,
      icon: category,
      text: "Source by category",
      bold: "category",
    },
    {
      id: 2,
      icon: quotation,
      text: "Request for Quotation",
      bold: "Quotation",
    },
    {
      id: 3,
      icon: logistic,
      text: "Logistic services",
      bold: "Logistic",
    },
  ];

  const sliderAction: SliderActions[] = [
    {
      backgroundImage: slide,
      text_1: "Are you a",
      buttonText_1: "Farmer",
      text_2: "Sell your",
      text_3: "Products here",
      TAndC: "T & C Apply",
      buttonText_2: "Sell",
      image: sliderPic,
    },
    {
      backgroundImage: slide,
      text_1: "Are you a",
      buttonText_1: "Farmer",
      text_2: "Sell your",
      text_3: "Products here",
      TAndC: "T & C Apply",
      buttonText_2: "Sell",
      image: sliderPic,
    },
    {
      backgroundImage: slide,
      text_1: "Are you a",
      buttonText_1: "Farmer",
      text_2: "Sell your",
      text_3: "Products here",
      TAndC: "T & C Apply",
      buttonText_2: "Sell",
      image: sliderPic,
    },
    {
      backgroundImage: slide,
      text_1: "Are you a",
      buttonText_1: "Farmer",
      text_2: "Sell your",
      text_3: "Products here",
      TAndC: "T & C Apply",
      buttonText_2: "Sell",
      image: sliderPic,
    },
  ];

  return (
    <SafeAreaWrapper>
      <NotificationHeader />
      <SearchAndFilter />
      <ActionsCard data={actions} />
      <SliderCard data={sliderAction} />
    </SafeAreaWrapper>
  );
};

export default Home;

const styles = StyleSheet.create({});
