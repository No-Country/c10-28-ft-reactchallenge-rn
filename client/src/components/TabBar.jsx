import React from "react";
import { Image, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import Home from "../pages/Home";

import MiPerfil from "../pages/MiPerfil";
import { useSelector } from "react-redux";
import Publicar from "./Publicar";

const Tab = createBottomTabNavigator();

const Add = ({ focused }) => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        height: 58,
        left: 4,
        width: 80,
        backgroundColor: "#eae0f4",
        borderRadius: 900,
        top: -5,
      }}
    >
      <Ionicons
        name={focused ? "add-circle" : "add-circle-outline"}
        style={{ bottom: 10 }}
        size={60}
        color={"#9874BA"}
      />
    </View>
  );
};

const TabBar = () => {
  const user = useSelector((state) => state.user);

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        activeTintColor: "#e91e63",
        inactiveTintColor: "#ffffff",
        tabBarStyle: { backgroundColor: "#3d2851" },
        labelStyle: { fontSize: 12 },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Publica") {
            iconName = focused ? "add-circle" : "add-circle-outline";
          } else if (route.name === "Perfil") {
            return (
              <Image
                source={{
                  uri: user?.user.foto_perfil,
                }}
                style={{ borderRadius: 100, width: 30, height: 30 }}
              />
            );
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={30} color={"#9874BA"} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen
        name="Publica"
        component={Publicar}
        options={{
          tabBarIcon: ({ focused, color, size }) => <Add focused={focused} />,
        }}
      />
      <Tab.Screen name="Perfil" component={MiPerfil} />
    </Tab.Navigator>
  );
};

export default TabBar;
