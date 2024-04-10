import {
  View,
  ImageBackground,
  StyleSheet,
  ImageSourcePropType,
} from "react-native";
import React from "react";

type ProductProps = {
  imagePath: ImageSourcePropType | undefined;
};

export default function ProductImage({ imagePath }: ProductProps) {
  return (
    <View style={styles.container}>
      <ImageBackground source={imagePath} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    borderRadius: 50,
    overflow: "hidden",
    backgroundColor: "white",
  },
  image: {
    flex: 1,
  },
});
