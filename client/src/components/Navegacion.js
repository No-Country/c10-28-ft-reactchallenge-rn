import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../pages/Home";
import ListaItems from "./ListaItems";
import CardItems from "./CardItems";
import Detalles from "../pages/Detalles";

const Stack = createStackNavigator();

const Navegacion = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Lista" component={ListaItems} />
      <Stack.Screen name="cards" component={CardItems} />
      <Stack.Screen name="Detalles" component={Detalles} />
    </Stack.Navigator>
  );
};

export default Navegacion;
