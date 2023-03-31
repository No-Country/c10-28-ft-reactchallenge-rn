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
import Login from "./Login";


const Stack = createStackNavigator();

const Navegacion = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Lista"
        component={ListaItems}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="cards"
        component={CardItems}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Detalles"
        component={Detalles}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Menu"
        component={Menu}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Perfil"
        component={MiPerfil}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Acercade"
        component={Acercade}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Contacto"
        component={Contacto}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Registro"
        component={Registro}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
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
