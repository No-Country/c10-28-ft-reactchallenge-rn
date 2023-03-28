import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import addHeart from "../../assets/Vector.png";
import start from "../../assets/start.png";

const ProductsHeaders = () => {
  return (
    <View style={styles.fondo} className="h-full relative">
      <View
        style={styles.principalColor}
        className="w-screen h-2/3 rounded-br-full"></View>
      <View className="flex flex-row gap-4 px-5 absolute top-24 ">
        <View className="flex justify-center items-start">
          <View className=" px-4 py-5 rounded-full bg-slate-300 border-purple-400 border-8">
            <Icon name="person-outline" size={83} className="mx-2" />
          </View>
        </View>
        <View>
          <View className="flex items-end mb-2 mx-7">
            <Image source={addHeart} />
          </View>
          <View className="flex flex-row  gap-2">
            <Image source={start} />
            <Image source={start} />
            <Image source={start} />
            <Image source={start} />
            <Image source={start} />
          </View>
          <Text className="font-bold text-lg mt-3 text-zinc-100 ">
            {" "}
            Martina Almiron{" "}
          </Text>
          <Text className="text-base text-zinc-100">
            {" "}
            Buenos Aires, La Plata{" "}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ProductsHeaders;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  fondo: {
    backgroundColor: "#eae0f4",
  },
  principalColor: {
    backgroundColor: "#3d2851",
  },
  chatView: {
    position: "absolute",
    top: "6%",
    left: "6%",
    width: "87%",
    height: "90%",
  },
});
