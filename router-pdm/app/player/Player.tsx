import { View } from "react-native";
import { Link, Stack } from "expo-router";
import React from "react";

export default function Player() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Stack.Screen
        options={{
          title: "Player View",
          headerStyle: { backgroundColor: "#cda882" },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Link href={{ pathname: "/" }}>Go to Index</Link>
      <Link href={{ pathname: "/user/DungeonMaster" }}>Go to Player View</Link>
    </View>
  );
}
