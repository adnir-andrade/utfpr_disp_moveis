import { Button, View } from "react-native";
import { Link, Stack, useNavigation, router } from "expo-router";
import React from "react";

export default function DungeonMaster() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Stack.Screen
        options={{
          title: "DM View",
        }}
      />

      <Link href={{ pathname: "/player" }}>Go to Player View</Link>
      <Button title="Go to Index" onPress={() => router.replace("/")}></Button>
    </View>
  );
}
