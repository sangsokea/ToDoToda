import React, { useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../constant/colors";

const Card = ({ title, color, iconName }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true, // <-- Add thisr
    }).start();
  }, [fadeAnim]);
  return (
    <Animated.View
      style={[styels.constainer, { backgroundColor: color, opacity: fadeAnim }]}
    >
      <Ionicons name={iconName} size={40} style={styels.icon} />
      <Text style={styels.text}>{title}</Text>
    </Animated.View>
  );
};
const styels = StyleSheet.create({
  constainer: {
    flexDirection: "row",
    overflow: "hidden",
    padding: 10,
    marginVertical: 20,
    backgroundColor: "rgba(255,255,2555,0.8)",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 50,
    opacity: 1,
  },
  text: {
    flex: 2,
    marginLeft: 10,
    fontSize: 28,
    fontWeight: "bold",
  },
  icon: { flex: 1, marginLeft: 20 },
});
export default Card;
