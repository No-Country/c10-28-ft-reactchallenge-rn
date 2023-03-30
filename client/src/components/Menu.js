
import React, { useRef, useState, useEffect, Children } from "react";
import Acercade from "../pages/Acercade";
import Contacto from "../pages/Contacto";
import MiPerfil from "../pages/MiPerfil";
import { useNavigation } from "@react-navigation/native";
import Logo from "../image/MenuHamburguesa.png";

import {
  Button,
  DrawerLayoutAndroid,
  Text,
  StyleSheet,
  View,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";



const Menu = ({children}) => {
  const drawer = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState("right");
  // const changeDrawerPosition = () => {
  //   if (drawerPosition === 'left') {
  //     setDrawerPosition('right');
  //   } else {
  //     setDrawerPosition('left');
  //   }
  // };

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const navigation = useNavigation();

  const openDrawer = () => {
    drawer.current.openDrawer();
    setIsDrawerOpen(true);
   
  };
  const closeDrawer = () => {
    drawer.current.closeDrawer();
    setIsDrawerOpen(false);
    

  };



  /* useEffect(() => {
    navigation.setOptions({
      title: "",
      headerRight: () => (
        <Pressable
          style={{ marginRight: 10 }}
          onPress={() => (isDrawerOpen ? closeDrawer() : openDrawer())}>
          <Image source={Logo} style={styles.imageLogo} />
        </Pressable>
      ),
    });
  }, [navigation, isDrawerOpen, props]); */

  const NavigationView = () => (
    <View className="bg-slate-200 flex-1">
      <Image source={require("../image/logo.png")} style={styles.image} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Perfil")}>
        <Text style={styles.text}>Mi Perfil</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Acercade")}>
        <Text style={styles.text}>Acerca de Cambialo</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Contacto")}>
        <Text style={styles.text}>Contacto</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonCerrar}
        onPress={() => closeDrawer()}>
        <Text style={styles.text}>Cerrar</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <>
    <View style={styles.container} >
    <TouchableOpacity
    style={{ marginRight: 10 }}
    onPress={() => (isDrawerOpen ? closeDrawer() : openDrawer())}>
    <Image source={Logo} style={styles.imageLogo} />
  </TouchableOpacity>
      </View>
      <DrawerLayoutAndroid
        ref={drawer}
        drawerWidth={300}
        drawerPosition={"right"}
        onDrawerClose={() => setIsDrawerOpen(false)}
        onDrawerOpen={() => setIsDrawerOpen(true)}
        renderNavigationView={() => <NavigationView closeDrawer={closeDrawer} />}>
          <View style={{flex:1, backgroundColor:'blue', height: '100%'}}>
            {children}
            </View>
      </DrawerLayoutAndroid>

    
    </>
  );
};

const styles = StyleSheet.create({
  container: {
   backgroundColor:'#3D2851',
    alignItems: "flex-end",
    justifyContent: "flex-end",
   
   height: '10%'
  },
 
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: "center",
  },
  image: {
    width: 130,
    height: 130,
    resizeMode: "contain",
    alignSelf: "center",
    marginBottom: 10,
  },
  imageLogo: {
    width: 40,
    height: 40,
    resizeMode: "contain",
    alignSelf: "center",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#3b0764",
    borderRadius: 1,
    padding: 10,
    marginTop: 10,
  },
  text: {
    color: "#ffff",
    textAlign: "center",
  },
  buttonCerrar: {
    backgroundColor: "#9333ea",
    marginTop: 250,
    padding: 20,
    margin: 80,
    borderRadius: 4,
  },
});

export default Menu

