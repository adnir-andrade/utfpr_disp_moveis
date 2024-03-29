import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import React from "react";

export default function Main() {
  const getRandomId = () => {
    return Math.floor(Math.random() * 100) + 1;
  };

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Routes</Text>
        <Link href={{ pathname: `/player/${getRandomId()}` }}>
          Player View{" "}
        </Link>
        <Link href="/dm">Dungeon Master View</Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
