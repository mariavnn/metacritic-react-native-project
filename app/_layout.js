import { View, StyleSheet } from "react-native";
import React from "react";
import { Slot, Stack } from "expo-router";
import { Header } from "../components/Header";
import { Logo } from "../components/svg/Logo";
import { CircleInfoIcon } from "../components/Icons";

export default function _layout() {
  return (
    <View style={styles.container}>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "black" },
          headerTintColor: "white",
          headerTitle: "",
          headerLeft: () => <Logo />,
          headerRight: () => <CircleInfoIcon />,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});