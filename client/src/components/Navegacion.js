import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../pages/Home";
import ListaItems from "./ListaItems";
import CardItems from "./CardItems";
import Detalles from "../pages/Detalles";
import Menu from "./Menu";
import Acercade from "../pages/Acercade";
import MiPerfil from "../pages/MiPerfil";
import Contacto from "../pages/Contacto";
import Registro from "./Registro";




const Stack = createStackNavigator();

const Navegacion = () => {
  return (
    <Stack.Navigator>

      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Lista" component={ListaItems} />
      <Stack.Screen name="cards" component={CardItems} />
      <Stack.Screen name="Detalles" component={Detalles} /> 

      <Stack.Screen name="Menu" component={Menu} />
      <Stack.Screen name="Perfil" component={MiPerfil} />
      <Stack.Screen name="Acercade" component={Acercade} />
      <Stack.Screen name="Contacto" component={Contacto} />
      <Stack.Screen name="Registro" component={Registro} />
    </Stack.Navigator>
  );
};

export default Navegacion;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
