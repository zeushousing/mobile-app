import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter, usePathname } from "expo-router";
import tw from "../lib/tw";

type TabIconName = "magnify" | "home" | "plus" | "chat" | "calendar";

const tabs: Array<{
  name: string;
  icon: TabIconName;
  label: string;
}> = [
  { name: "search", icon: "magnify", label: "Search" },
  { name: "property", icon: "home", label: "Property" },
  { name: "post", icon: "plus", label: "Post" },
  { name: "chat", icon: "chat", label: "Chat" },
  { name: "events", icon: "calendar", label: "Events" },
];

export default function BottomTabBar() {
  const router = useRouter();
  const pathname = usePathname();

  const handlePress = (tabName: string) => {
    router.push(`/(tabs)/${tabName}` as any);
  };

  return (
    <View style={tw`flex-row justify-around py-4 bg-yellow-400`}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.name}
          style={tw`items-center`}
          onPress={() => handlePress(tab.name)}
        >
          <MaterialCommunityIcons
            name={tab.icon}
            size={24}
            color={pathname.includes(tab.name) ? "#000" : "#666"}
          />
          <Text
            style={tw`text-xs ${
              pathname.includes(tab.name) ? "text-black" : "text-gray-600"
            }`}
          >
            {tab.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
