import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import DrawerNaviagion from "./src/navigations/DrawerNaviagion";
import HomeScreen from "./src/screens/HomeScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <DrawerNaviagion />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
