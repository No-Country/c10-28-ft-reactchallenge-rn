import { View, Text, Image, StyleSheet } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import ProductsHeaders from "../components/ProductsHeaders";
import PostDetail from "../components/PostDetail";
import { useNavigation } from "@react-navigation/native";
import Menu from "../components/Menu";

const Detalles = ({ route }) => {
  const data = route.params;
  const navigation = useNavigation();

  return (
    <View style={styles.fondo}>
      <View style={styles.principalColor}>
        <ProductsHeaders />
      </View>
      <View style={{ height: "80%" }}>
        <PostDetail data={data} />
      </View>
    </View>
  );
};

export default Detalles;

const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    height: "100%",
    backgroundColor: "#eae0f4",
  },
  principalColor: {
    backgroundColor: "#3d2851",
    height: "50%",
    borderBottomRightRadius: 1000,
  },
});
