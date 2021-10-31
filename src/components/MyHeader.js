import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/core";

const MyHeader = ({ title, style }) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{
        ...style,
        flexDirection: "row",
        height: 80,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableOpacity
        onPress={() => {
          navigation.openDrawer();
        }}
        style={{ marginLeft: 10, flex: 1 }}
      >
        <Feather name="menu" size={28} color="black" />
      </TouchableOpacity>
      <View style={{ flex: 2, marginLeft: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>{title}</Text>
      </View>
    </SafeAreaView>
  );
};

export default MyHeader;
