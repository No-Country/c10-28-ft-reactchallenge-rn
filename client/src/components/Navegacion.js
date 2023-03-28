import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../pages/Home";
import Menu from "./Menu";
import Acercade from "../pages/Acercade";
import MiPerfil from "../pages/MiPerfil";
import Contacto from "../pages/Contacto";




const Stack = createStackNavigator();

const Navegacion = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} /> 
      <Stack.Screen name="Menu" component={Menu} />
      <Stack.Screen name="Perfil" component={MiPerfil} />
      <Stack.Screen name="Acercade" component={Acercade} />
      <Stack.Screen name="Contacto" component={Contacto} />



    </Stack.Navigator>
  );
};

export default Navegacion;
