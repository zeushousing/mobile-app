import React from "react";
import { TouchableOpacity, ScrollView, ToastAndroid } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ThemedView } from "../../components/ThemedView";
import { ThemedText } from "../../components/ThemedText";
import tw from "../../lib/tw";

export default function PropertyScreen() {
  return (
    <SafeAreaView style={tw`flex-1`}>
      <ThemedView style={tw`px-4 py-2 flex-row justify-between items-center`}>
        <ThemedText type="title" style={tw`text-2xl font-bold`}>
          My properties
        </ThemedText>
        <TouchableOpacity
          style={tw`bg-yellow-400 px-4 py-2 rounded-full`}
          onPress={() => {
            /* Handle post navigation */
          }}
        >
          <ThemedText style={tw`font-semibold text-black`}>+ Post</ThemedText>
        </TouchableOpacity>
      </ThemedView>

      <ThemedView style={tw`flex-row space-x-2 px-4 py-2`}>
        <TouchableOpacity style={tw`bg-black px-6 py-2 rounded-full`}>
          <ThemedText style={tw`text-white`}>All</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity style={tw`px-6 py-2 rounded-full border border-gray-200`}>
          <ThemedText>Active</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity style={tw`px-6 py-2 rounded-full border border-gray-200`}>
          <ThemedText>Inactive</ThemedText>
        </TouchableOpacity>
      </ThemedView>

      <ScrollView style={tw`flex-1 px-4`}>
        <ThemedView style={tw`items-center justify-center py-12 bg-yellow-100 rounded-lg mt-4`}>
          <MaterialCommunityIcons
            name="home-city-outline"
            size={48}
            color="gray"
          />
          <ThemedText style={tw`text-xl font-semibold mt-4 text-black`}>
            No property
          </ThemedText>
          <ThemedText style={tw`text-gray-500 mt-2`}>
            You don't have any property yet.
          </ThemedText>
          <TouchableOpacity
            style={tw`bg-yellow-400 px-6 py-3 rounded-full mt-6`}
            onPress={() => {
              /* Handle post property */
              ToastAndroid.show("Property Posted successfully", ToastAndroid.SHORT);
            }}
          >
            <ThemedText style={tw`font-semibold text-black`}>+ Post property</ThemedText>
          </TouchableOpacity>
        </ThemedView>
      </ScrollView>
    </SafeAreaView>
  );
}