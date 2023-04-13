import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import ProductsHeaders from "../components/ProductsHeaders";
import PostDetail from "../components/PostDetail";

const Detalles = ({ route }) => {
  const id = route.params;

  const [data, setData] = useState();

  useEffect(() => {
    fetch(`https://cambialoapi-production.up.railway.app/posts/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  if (data)
    return (
      <View style={styles.fondo}>
        <View style={styles.principalColor}></View>
        <ScrollView style={{ flex: 1, position: "absolute", height: "100%" }}>
          <ProductsHeaders data={data} />
          <View style={{ height: "80%" }}>
            <PostDetail data={data} />
          </View>
        </ScrollView>
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
