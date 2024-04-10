import { View, StyleSheet, Text, ImageSourcePropType } from "react-native";
import React from "react";
import ProductImage from "./ProductImage";

type CategoryProps = {
  title: string;
  imagePath: ImageSourcePropType | undefined;
};

export default function Category({ title, imagePath }: CategoryProps) {
  return (
    <View style={styles.container}>
      <ProductImage imagePath={imagePath} />
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { justifyContent: "center", alignItems: "center" },
  text: {
    marginTop: 10,
    fontSize: 15,
  },
});
