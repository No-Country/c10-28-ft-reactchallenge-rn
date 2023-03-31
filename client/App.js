import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useEffect } from "react";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import "react-native-gesture-handler";
import Navegacion from "./src/components/Navegacion";

import { NavigationContainer } from "@react-navigation/native";
import CardItems from "./src/components/CardItems";
import * as Font from 'expo-font';

async function loadFonts() {
  await Font.loadAsync({
    'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
    // aquí puedes agregar otras variantes de la fuente si lo deseas
  });
}



export default function App() {

  useEffect(() => {
    loadFonts();
  }, []);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navegacion />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
