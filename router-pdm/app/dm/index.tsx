import { Link, useRouter } from "expo-router";
import { Button, View } from "react-native";
import React from "react";

export default function DungeonMaster() {
  const router = useRouter();

  const getRandomId = () => {
    return Math.floor(Math.random() * 100) + 1;
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Link href={{ pathname: `/player/${getRandomId()}` }}>
        Go to Player View
      </Link>

      <Button title="Go to Index" onPress={() => router.push("/")}></Button>
    </View>
  );
}
