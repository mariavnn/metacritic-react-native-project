/* eslint-disable no-unused-expressions */
import { Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import Colors from "../constants/Colors";

export function AppButtons({ type, label }, ref) {
  const getButtonStyles = () => {
    switch (type) {
      case "primary":
        return styles.primaryButton;
      case "secondary":
        return styles.secondaryButton;
      default:
        return styles.primaryButton;
    }
  };
  return (
    <Pressable ref={ref} style={[styles.button, getButtonStyles()]}>
      <Text style={styles.text}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 170,
    height: 45,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  primaryButton: {
    backgroundColor: Colors.primary,
  },
  secondaryButton: {
    backgroundColor: "transparent",
    borderColor: Colors.primary,
    borderWidth: 2,
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
    color: Colors.textPrimary,
  },
});
