import { StyleSheet } from "react-native";
import Colors from "./Colors";

const TextStyles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.textPrimary,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "600",
    color: Colors.textSecondary,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 22,
    color: Colors.textPrimary,
  },
  smallText: {
    fontSize: 12,
    color: Colors.textSecondary,
  },
});

export default TextStyles;
