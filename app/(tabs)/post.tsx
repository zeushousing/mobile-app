import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "../../lib/tw";

export default function PostScreen() {
  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <View style={tw`flex-1 items-center justify-center`}>
        <Text style={tw`text-xl`}>Post Screen</Text>
      </View>
    </SafeAreaView>
  );
}
