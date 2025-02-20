import React from "react";
import { View, Text, TouchableOpacity, ScrollView, ToastAndroid } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import BottomTabBar from "../../components/BottomTabBar";
import tw from "../../lib/tw";

const PropertyScreen = () => {
  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <View style={tw`px-4 py-2 flex-row justify-between items-center`}>
        <Text style={tw`text-2xl font-bold`}>My properties</Text>
        <TouchableOpacity
          style={tw`bg-yellow-400 px-4 py-2 rounded-full`}
          onPress={() => {
            /* Handle post navigation */
          }}
        >
          <Text style={tw`font-semibold`}>+ Post</Text>
        </TouchableOpacity>
      </View>

      <View style={tw`flex-row space-x-2 px-4 py-2`}>
        <TouchableOpacity style={tw`bg-black px-6 py-2 rounded-full`}>
          <Text style={tw`text-white`}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`px-6 py-2 rounded-full border border-gray-200`}
        >
          <Text>Active</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`px-6 py-2 rounded-full border border-gray-200`}
        >
          <Text>Inactive</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={tw`flex-1 px-4`}>
        <View
          style={tw`items-center justify-center py-12 bg-gray-100 rounded-lg mt-4`}
        >
          <MaterialCommunityIcons
            name="home-city-outline"
            size={48}
            color="gray"
          />
          <Text style={tw`text-xl font-semibold mt-4`}>No property</Text>
          <Text style={tw`text-gray-500 mt-2`}>
            You don't have any property yet.
          </Text>
          <TouchableOpacity
            style={tw`bg-yellow-400 px-6 py-3 rounded-full mt-6`}
            onPress={() => {
              /* Handle post property */
              ToastAndroid.show("Property posted successfully", ToastAndroid.SHORT);
            }}
          >
            <Text style={tw`font-semibold`}>+ Post property</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

     
    </SafeAreaView>
  );
};

export default PropertyScreen;
