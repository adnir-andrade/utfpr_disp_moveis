import { Button, View } from "react-native";
import { Link, Stack, router } from "expo-router";
import React from "react";

export default function Player() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Stack.Screen
        options={{
          title: "Player View",
        }}
      />
      <Link href={{ pathname: "/dm" }}>Go to DM View</Link>
      <Button title="Go to Index" onPress={() => router.replace("/")}></Button>
    </View>
  );
}
