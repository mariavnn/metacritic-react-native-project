import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Screen } from "../components/Screen";
import { Logo } from "../components/svg/Logo";
import { AppButtons } from "../components/AppButtons";

export default function Home() {
  return (
    <Screen>
      <View style={styles.container}>
        <Logo />

        <AppButtons type={"primary"} label={"Login"} />

        <AppButtons type={"secondary"} label={"Register"} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 25,
  },
});
