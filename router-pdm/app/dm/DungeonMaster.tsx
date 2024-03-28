import { View, Text } from "react-native";
import { Link, Stack } from "expo-router";
import React from "react";

export default function DungeonMaster() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Stack.Screen
        options={{
          title: "DM View",
          headerStyle: { backgroundColor: "#cda882" },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Link href={{ pathname: "/" }}>Go to Index</Link>
      <Link href={{ pathname: "/player/Player" }}>Go to DM View</Link>
    </View>
  );
}
