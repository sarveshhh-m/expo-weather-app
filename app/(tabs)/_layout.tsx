import { Tabs } from "expo-router";
import React, { useEffect } from "react";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#ADD8E6",
          height: 72,
          borderTopWidth: 0,
        },
        tabBarItemStyle: {
          alignSelf: "center",
          alignItems: "center",
          justifyContent: "center",
          padding: 8,
        },
        tabBarActiveTintColor: "#121249",
        tabBarInactiveTintColor: "#12124922",
        headerShown: false,
        tabBarLabelPosition: "below-icon",
        tabBarIconStyle: {
          padding: 0,
          margin: 0,
        },
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: "bold",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Current Location",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "location" : "location-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="other"
        options={{
          title: "Search Location",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "search" : "search-outline"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
