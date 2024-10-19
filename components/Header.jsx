import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Logo } from "./svg/Logo";
import { CircleInfoIcon } from "./Icons";

export function Header() {
  return (
    <View style={styles.container}>
      <View>
        <Logo />
      </View>
      <CircleInfoIcon />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
});
