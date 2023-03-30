import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import ProductsHeaders from "../components/ProductsHeaders";
import PostDetail from "../components/PostDetail";

const Detalles = ({ route }) => {
  const data = route.params;
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
