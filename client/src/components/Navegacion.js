import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../pages/Home";
import PostDetail from "./PostDetail";

const Stack = createStackNavigator();

const Navegacion = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={PostDetail} />
    </Stack.Navigator>
  );
};

export default Navegacion;
