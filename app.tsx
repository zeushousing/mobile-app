import { useEffect } from "react";
import { StyleSheet } from "react-native";
import { ExpoRoot } from "expo-router";
import "nativewind/types";

export default function App() {
  return <ExpoRoot context={require.context(".", true, /\.(js|jsx|ts|tsx)$/)} />;
}
