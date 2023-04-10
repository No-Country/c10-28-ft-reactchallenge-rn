import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Cabecera from "../components/Cabecera";
import ProductsHeaders from "../components/ProductsHeaders";
import Botons from "../components/Botons";
import Carrousel from "../components/Carrousel";
import ProductUser from "../components/ProductUser";

const Perfil = () => {
  return (
    <View style={styles.fondo} className="h-full relative ">
      <View
        style={styles.principalColor}
        className="w-screen h-2/3 rounded-br-full  "></View>
      <View style={styles.main} className="absolute">
        <View>
          <View>
            <ProductsHeaders />
          </View>
          <View className=" flex items-end m-4">
            <Botons
              icon={"plus"}
              title={"Publicar"}
              bgBotton={"#9874BA"}
              redondo={10}
              size={28}
              flex={"row"}
              altura={40}
              navegar={"Publicar"}
            />
          </View>
        </View>
        <View>
          <Text className="text-purple-400 font-bold text-xl">
            Acerca de mi
          </Text>
          <View className="m-3">
            <Text className="text-gray-50">
              {" "}
              {/* {descripcion} */}
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod
              exercitationem autem est maxime deleniti! Vitae amet eius at
              temporibus ipsa enim beatae obcaecati, minima sunt pariatur aut
              veniam autem reiciendis.{" "}
            </Text>
          </View>
        </View>
        <View className="pt-3">
          <Text className="text-purple-200 my-2 font-bold text-xl border-2 border-purple-900 text-center rounded-full bg-purple-900">
            {" "}
            Productos a la venta o trueque
          </Text>
          {/* <ProductUser /> */}
        </View>
        <View>
          <Text className="text-purple-200 my-2 font-bold text-xl border-2 border-purple-900 text-center rounded-full bg-purple-900">
            {" "}
            Servicios que ofrece
          </Text>
          {/* <ProductUser /> */}
        </View>
      </View>
    </View>
  );
};

export default Perfil;

const styles = StyleSheet.create({
  fondo: {
    backgroundColor: "#eae0f4",
  },
  principalColor: {
    backgroundColor: "#3d2851",
  },
  main: {
    top: "2%",
    left: "6%",
    width: "87%",
    height: "90%",
  },
});
