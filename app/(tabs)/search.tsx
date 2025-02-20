import tw from "@/lib/tw";
import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SearchScreen() {
  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <View style={tw`flex-1 items-center justify-center`}>
        <Text style={tw`text-xl`}>Search Screen</Text>
      </View>
    </SafeAreaView>
  );
}
