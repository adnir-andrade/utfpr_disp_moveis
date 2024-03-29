import { Link, router, useLocalSearchParams } from "expo-router";
import { Button, View, Text } from "react-native";
import React from "react";

export default function Player() {
  const { id } = useLocalSearchParams();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Viewing Player ID: {id}</Text>
      <Link href={{ pathname: "/dm" }}>Go to DM View</Link>
      <Button title="Go to Index" onPress={() => router.replace("/")}></Button>
    </View>
  );
}
