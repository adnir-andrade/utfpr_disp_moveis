import { View, StyleSheet, ImageSourcePropType } from "react-native";
import React from "react";
import Category from "./Category";

export default function Categories() {
  const categoryImg: ImageSourcePropType = require("../../assets/images/menu.png");
  const celularImg: ImageSourcePropType = require("../../assets/images/smartphone.png");
  const tvImg: ImageSourcePropType = require("../../assets/images/tv.png");
  const informaticaImg: ImageSourcePropType = require("../../assets/images/laptop.png");
  const belezaImg: ImageSourcePropType = require("../../assets/images/lipstick.png");
  const modaImg: ImageSourcePropType = require("../../assets/images/shirt.png");
  const esporteImg: ImageSourcePropType = require("../../assets/images/football.png");
  const casaImg: ImageSourcePropType = require("../../assets/images/sofa.png");
  const mercadoImg: ImageSourcePropType = require("../../assets/images/mercado.png");
  const utilidadeImg: ImageSourcePropType = require("../../assets/images/pan.png");

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Category title="Categorias" imagePath={categoryImg} />
        <Category title="Celulares" imagePath={celularImg} />
        <Category title="TVs" imagePath={tvImg} />
        <Category title="Informática" imagePath={informaticaImg} />
        <Category title="Beleza" imagePath={belezaImg} />
      </View>
      <View style={styles.row}>
        <Category title="Moda" imagePath={modaImg} />
        <Category title="Esportes" imagePath={esporteImg} />
        <Category title="Casa" imagePath={casaImg} />
        <Category title="Mercado" imagePath={mercadoImg} />
        <Category title="Utilidades" imagePath={utilidadeImg} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
  },
});
