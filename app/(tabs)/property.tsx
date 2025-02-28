import React, { useState } from "react";
import { TouchableOpacity, ScrollView, ToastAndroid, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ThemedView } from "../../components/ThemedView";
import { ThemedText } from "../../components/ThemedText";
import PropertyCard from "../../components/propertyCard";
import { sampleProperties } from "../../data/sampleProperties";
import { Property } from "../../types/property";
import tw from "../../lib/tw";

type FilterType = "all" | "active" | "inactive";

export default function PropertyScreen() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  const filteredProperties = sampleProperties.filter((property) => {
    if (activeFilter === "all") return true;
    return property.status === activeFilter;
  });

  const handlePropertyPress = (property: Property) => {
    // Handle property press - navigate to detail screen
    ToastAndroid.show(`Selected: ${property.title}`, ToastAndroid.SHORT);
  };

  return (
    <SafeAreaView style={tw`flex-1`}>
      <ThemedView style={tw`px-4 py-2 flex-row justify-between items-center`}>
        <ThemedText type="title" style={tw`text-2xl font-bold`}>
          My properties
        </ThemedText>
        <TouchableOpacity
          style={tw`bg-yellow-400 px-4 py-2 rounded-full`}
          onPress={() => {
            ToastAndroid.show("Post new property", ToastAndroid.SHORT);
          }}
        >
          <ThemedText style={tw`font-semibold text-black`}>+ Post</ThemedText>
        </TouchableOpacity>
      </ThemedView>

      <ThemedView style={tw`flex-row space-x-2 px-4 py-2`}>
        <TouchableOpacity
          style={tw`${
            activeFilter === "all" ? "bg-black" : "border border-gray-200"
          } px-6 py-2 rounded-full`}
          onPress={() => setActiveFilter("all")}
        >
          <ThemedText style={tw`${activeFilter === "all" ? "text-white" : ""}`}>
            All
          </ThemedText>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`${
            activeFilter === "active" ? "bg-black" : "border border-gray-200"
          } px-6 py-2 rounded-full`}
          onPress={() => setActiveFilter("active")}
        >
          <ThemedText
            style={tw`${activeFilter === "active" ? "text-white" : ""}`}
          >
            Active
          </ThemedText>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`${
            activeFilter === "inactive" ? "bg-black" : "border border-gray-200"
          } px-6 py-2 rounded-full`}
          onPress={() => setActiveFilter("inactive")}
        >
          <ThemedText
            style={tw`${activeFilter === "inactive" ? "text-white" : ""}`}
          >
            Inactive
          </ThemedText>
        </TouchableOpacity>
      </ThemedView>

      <ScrollView style={tw`flex-1 px-4`}>
        {filteredProperties.length > 0 ? (
          filteredProperties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              onPress={() => handlePropertyPress(property)}
            />
          ))
        ) : (
          <ThemedView
            style={tw`items-center justify-center py-12 bg-yellow-100 rounded-lg mt-4`}
          >
            <MaterialCommunityIcons
              name="home-city-outline"
              size={48}
              color="gray"
            />
            <ThemedText style={tw`text-xl font-semibold mt-4 text-black`}>
              No property
            </ThemedText>
            <ThemedText style={tw`text-gray-500 mt-2`}>
              You don't have any {activeFilter !== "all" ? activeFilter : ""}{" "}
              property yet.
            </ThemedText>
            <TouchableOpacity
              style={tw`bg-yellow-400 px-6 py-3 rounded-full mt-6`}
              onPress={() => {
                ToastAndroid.show("Post new property", ToastAndroid.SHORT);
              }}
            >
              <ThemedText style={tw`font-semibold text-black`}>
                + Post property
              </ThemedText>
            </TouchableOpacity>
          </ThemedView>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
