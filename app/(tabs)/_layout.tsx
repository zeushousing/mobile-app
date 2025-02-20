import { Tabs } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons as IconType } from '@expo/vector-icons';

type IconName = keyof typeof IconType.glyphMap;

const tabs: Array<{
  name: string;
  icon: IconName;
  label: string;
}> = [
  { name: "search", icon: "magnify", label: "Search" },
  { name: "property", icon: "home", label: "Property" },
  { name: "post", icon: "plus", label: "Post" },
  { name: "chat", icon: "chat", label: "Chat" },
  { name: "events", icon: "calendar", label: "Events" },
];

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#000",
        tabBarInactiveTintColor: "#666",
        tabBarStyle: {
          height: 64,
          paddingBottom: 8,
          paddingTop: 8,
          backgroundColor: "#FBBF24",
          borderTopWidth: 0,
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
        headerShown: false,
      }}
    >
      {tabs.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            title: tab.label,
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name={tab.icon} size={24} color={color} />
            ),
          }}
        />
      ))}
    </Tabs>
  );
}
