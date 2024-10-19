import { Text } from "react-native";
import React from "react";
import { ScrollView } from "react-native";
import { HomeIcon } from "../components/Icons";
import { Header } from "../components/Header";
import { Screen } from "../components/Screen";

export default function About() {
  return (
    <Screen>
      <ScrollView style={{ backgroundColor: "black" }}>
        <Text
          style={{
            justifyContent: "center",
            color: "#fff",
            alignItems: "center",
            flex: 1,
          }}
        >
          About Project
        </Text>
      </ScrollView>
    </Screen>
  );
}
