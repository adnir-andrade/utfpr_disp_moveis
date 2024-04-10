import { StyleSheet, Text } from "react-native";
import React from "react";
import Scrollable from "@/components/containers/Scrollable";
import HeaderWithSearchBar from "@/components/headers/HeaderWithSearchBar";
import AddressBar from "@/components/ui/AddressBar";
import Categories from "@/components/category";

export default function home() {
  return (
    <Scrollable>
      <HeaderWithSearchBar headerBackVisible={true} />

      <AddressBar />

      <Text>home</Text>
      <Text>home</Text>
      <Text>home</Text>
      <Text>home</Text>
      <Text>home</Text>
      <Text>home</Text>
      <Text>home</Text>
      <Text>home</Text>
      <Text>home</Text>

      <Text style={styles.slogan}>Tem tudo no Magalu ;)</Text>
      <Categories />
    </Scrollable>
  );
}

const styles = StyleSheet.create({
  slogan: {
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  text: {
    color: "white",
    fontSize: 12,
  },
});
