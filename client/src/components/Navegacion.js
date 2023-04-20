import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useRef } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../pages/Home";
import ListaItems from "./ListaItems";
import CardItems from "./CardItems";
import Detalles from "../pages/Detalles";
import Menu from "./Menu";
import Acercade from "../pages/Acercade";
import MiPerfil from "../pages/MiPerfil";
import Contacto from "../pages/Contacto";
import Login from "./Login";
import Registro from "./Registro";
import Publicaciones from "../pages/Publicaciones";
import Cabecera from "./Cabecera";
import Publicar from "./Publicar";
import Camara from "./Camara";
import Welcome from "../pages/Welcome";
import { useSelector } from "react-redux";
import TabBar from "./TabBar";
import Chat from "../pages/Chat";

const Stack = createStackNavigator();

const Navegacion = () => {
  const user = useSelector((state) => state.user);
  useEffect(() => {}, [user]);

  return (
    <>
      {user.access_token ? (
        <Menu>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="bar" component={TabBar} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Menu" component={Menu} />
            <Stack.Screen name="Lista" component={ListaItems} />
            <Stack.Screen name="Publicaciones" component={Publicaciones} />
            <Stack.Screen name="cards" component={CardItems} />
            <Stack.Screen name="Detalles" component={Detalles} />
            <Stack.Screen name="Perfil" component={MiPerfil} />
            <Stack.Screen name="Acercade" component={Acercade} />
            <Stack.Screen name="Contacto" component={Contacto} />

            <Stack.Screen name="Publicar" component={Publicar} />
            <Stack.Screen name="Camara" component={Camara} />
            <Stack.Screen name="Chat" component={Chat} />
          </Stack.Navigator>
        </Menu>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Registro" component={Registro} />
        </Stack.Navigator>
      )}
    </>
  );
};

export default Navegacion;
