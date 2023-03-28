import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { createStackNavigator } from "@react-navigation/stack";

const Botons = () => {
  const Stack = createStackNavigator();

  return (
    <View className="h-full flex  justify-center items-center bg-slate-700">
      <View className="flex flex-row gap-5 justify-center items-center">
        <TouchableOpacity
          style={styles.fondo}
          className=" text-center p-2 rounded-lg ">
          <Text className="text-slate-50 font-bold text-center">
            {/* {texto} */}
            Comprar
            </Text>
        </TouchableOpacity>

        {/* <TouchableOpacity
          style={styles.fondo}
          className=" text-center p-2 rounded-lg ">
          <Text className="text-slate-50 font-bold text-center">Trueque</Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

export default Botons;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  fondo: {
    backgroundColor: "#9874BA",
  },
  principalColor: {
    backgroundColor: "#3d2851",
  },
});
