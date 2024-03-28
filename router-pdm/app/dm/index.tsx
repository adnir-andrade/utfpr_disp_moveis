import { Button, View } from "react-native";
import { Link, useNavigation, router } from "expo-router";
import React from "react";

export default function DungeonMaster() {
  const navigation = useNavigation();

  const getRandomId = () => {
    return Math.floor(Math.random() * 100) + 1;
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Link href={{ pathname: `/player/${getRandomId()}` }}>
        Go to Player View
      </Link>
      <Button title="Go to Index" onPress={() => router.replace("/")}></Button>
    </View>
  );
}
