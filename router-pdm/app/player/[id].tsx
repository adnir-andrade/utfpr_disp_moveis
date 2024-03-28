import { Button, View } from "react-native";
import { Link, router } from "expo-router";
import React from "react";

export default function Player() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Link href={{ pathname: "/dm" }}>Go to DM View</Link>
      <Button title="Go to Index" onPress={() => router.replace("/")}></Button>
    </View>
  );
}
