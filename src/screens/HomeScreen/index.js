import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Card from "../../components/Card";
import colors from "../../constant/colors";
import { useNavigation } from "@react-navigation/core";

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        margin: 20,
      }}
    >
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Tasks");
        }}
        style={{ width: "100%" }}
      >
        <Card title="Scool" iconName="school-outline" color={colors.green} />
      </TouchableOpacity>

      <TouchableOpacity style={{ width: "100%" }}>
        <Card title="Work" iconName="laptop-outline" color={colors.red} />
      </TouchableOpacity>

      <TouchableOpacity style={{ width: "100%" }} r>
        <Card title="Other" iconName="folder-outline" color={colors.purple} />
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
