import { View, Text, Pressable, ActivityIndicator, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import Cabecera from "../components/Cabecera";
import Carrousel from "../components/Carrousel";
import {useDispatch, useSelector } from "react-redux";
import ListaItems from "../components/ListaItems";
import {getPost} from "../redux/action";
import {ScrollView} from "react-native-gesture-handler";
import {useNavigation} from "@react-navigation/native";

const Home = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const [venta, setVenta] = useState([])
  const [trueque, setTrueque] = useState([])
  const [servicios, setServicos] = useState([])
  const data = useSelector((state) => state.posts)
  const loading = useSelector((state) => state.loading)


  const postVentas = (data) => {
    const ventas = data.filter((item) => item.venta && item.trueque && item.tipo === 'producto');
    return ventas.slice(0, 5); // Devuelve solo los primeros 5 elementos
  }

 
  const postServicios = (data) => {
    const servicio = data.filter((item) => item.tipo === 'servicio');
    return servicio.slice(0, 5); // Devuelve solo los primeros 5 elementos
  }



  useEffect(() => {
    dispatch(getPost())
    const ventas = postVentas(data);
    const servicio = postServicios(data);
    setServicos(servicio);
  setVenta(ventas);
  },[dispatch, data])


  return (
    <>
    <Cabecera />
      <ScrollView className="flex-1 h-full " style={{ backgroundColor: "#EAE0F4", paddingTop: 5 }}>
     
          <View className="flex-1  ">
            <View>
              <TouchableOpacity onPress={() => navigation.navigate('productos')} >
              <Text className=" font-black "> Productos {">"} </Text> 
              </TouchableOpacity>
              <Carrousel data={venta} />
            </View>
            <View>
            <TouchableOpacity onPress={() => navigation.navigate('productos')} >
              <Text className=" font-black "> Productos  {">"}</Text>
              </TouchableOpacity>
              <Carrousel data={servicios} />
            </View>
          </View>
        
    
       
      </ScrollView>
    </>
  );
};

export default Home;
