import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Property } from "../types/property";
import tw from "../lib/tw";

interface PropertyCardProps {
  property: Property;
  onPress?: () => void;
}

export default function PropertyCard({ property, onPress }: PropertyCardProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={tw`bg-white rounded-xl shadow-md mb-4`}
      onPress={onPress}
    >
      <Image
        source={{ uri: property.images[0] }}
        style={tw`w-full h-48 rounded-t-xl`}
        resizeMode="cover"
      />
      <View style={tw`p-4`}>
        <View style={tw`flex-row justify-between items-center mb-2`}>
          <Text style={tw` font-bold text-black`}>{property.title}</Text>
          <View
            style={tw`${
              property.status === "active" ? "bg-green-100" : "bg-gray-100"
            } px-2 py-1 rounded-full`}
          >
            <Text
              style={tw`${
                property.status === "active"
                  ? "text-green-700"
                  : "text-gray-700"
              } text-xs font-medium`}
            >
              {property.status}
            </Text>
          </View>
        </View>

        <Text style={tw`text-xl font-bold text-yellow-400 mb-2`}>
          ${property.price.toLocaleString()}
          {property.type === "rent" ? "/month" : ""}
        </Text>

        <View style={tw`flex-row items-center mb-2`}>
          <MaterialCommunityIcons name="map-marker" size={16} color="#666" />
          <Text style={tw`ml-1 text-gray-600`}>{property.location}</Text>
        </View>

        <View style={tw`flex-row justify-between mb-2`}>
          <View style={tw`flex-row items-center`}>
            <MaterialCommunityIcons name="bed" size={16} color="#666" />
            <Text style={tw`ml-1 text-gray-600`}>{property.bedrooms} beds</Text>
          </View>
          <View style={tw`flex-row items-center`}>
            <MaterialCommunityIcons name="shower" size={16} color="#666" />
            <Text style={tw`ml-1 text-gray-600`}>
              {property.bathrooms} baths
            </Text>
          </View>
          <View style={tw`flex-row items-center`}>
            <MaterialCommunityIcons
              name="ruler-square"
              size={16}
              color="#666"
            />
            <Text style={tw`ml-1 text-gray-600`}>{property.size} sq ft</Text>
          </View>
        </View>

        <View style={tw`flex-row flex-wrap gap-2 mt-2`}>
          {property.amenities.slice(0, 3).map((amenity, index) => (
            <View key={index} style={tw`bg-gray-100 px-2 py-1 rounded-full`}>
              <Text style={tw`text-xs text-gray-600`}>{amenity}</Text>
            </View>
          ))}
          {property.amenities.length > 3 && (
            <View style={tw`bg-gray-100 px-2 py-1 rounded-full`}>
              <Text style={tw`text-xs text-gray-600`}>
                +{property.amenities.length - 3} more
              </Text>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
}
