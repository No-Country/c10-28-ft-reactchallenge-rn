import React, {useRef, useState, useEffect} from 'react';
import Acercade from "../pages/Acercade";
import Contacto from "../pages/Contacto";
import MiPerfil from "../pages/MiPerfil";
import { useNavigation } from '@react-navigation/native';


import {
    Button,
    DrawerLayoutAndroid,
    Text,
    StyleSheet,
    View,
    Image,
    Pressable,
  } from 'react-native';

  
const Menu = () => {
    const drawer = useRef(null);
    const [drawerPosition, setDrawerPosition] = useState('right');
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
  
    useEffect(() => {
      navigation.setOptions({
        title: '',
        headerRight: () => (
          <Pressable
            style={{marginRight: 10}}
            onPress={() => (isDrawerOpen ? closeDrawer() : openDrawer())}>
            <Text>Hola</Text>
          </Pressable>
        ),
      });
    }, [navigation,isDrawerOpen]);
  
    const NavigationView = () => (
      <View className="bg-slate-900">
        <Image source={require('../image/logo.png')} style = {styles.image}/>
        <Button title="Mi Perfil" onPress={() => navigation.navigate("Perfil")} />
        <Acercade />
        <Contacto />
        <Button
          title="Close drawer"
          onPress={() => closeDrawer()}
        />
      </View>
    );
  
    return (
      <DrawerLayoutAndroid
        ref={drawer}
        drawerWidth={300}
        drawerPosition={'right'}
        onDrawerClose={() => setIsDrawerOpen(false)}
        onDrawerOpen={() => setIsDrawerOpen(true)}
        renderNavigationView={()=><NavigationView closeDrawer={closeDrawer}/>}>
        <View style={styles.container}>
        </View>
      </DrawerLayoutAndroid>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 16,
    },
    navigationContainer: {
      backgroundColor: '#ecf0f1',
    },
    paragraph: {
      padding: 16,
      fontSize: 15,
      textAlign: 'center',
      
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginBottom: 10,
    },
  });
  
  export default Menu;