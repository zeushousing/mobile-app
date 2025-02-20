import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "../../lib/tw";

export default function EventsScreen() {
  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <View style={tw`flex-1 items-center justify-center`}>
        <Text style={tw`text-xl`}>Events Screen</Text>
      </View>
    </SafeAreaView>
  );
}
