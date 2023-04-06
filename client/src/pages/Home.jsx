import { View, Text, Pressable, ActivityIndicator } from "react-native";
import React, { useState, useEffect } from "react";
import Cabecera from "../components/Cabecera";
import Carrousel from "../components/Carrousel";
import {useDispatch, useSelector } from "react-redux";
import ListaItems from "../components/ListaItems";
import {getPost} from "../redux/action";
import {ScrollView} from "react-native-gesture-handler";

const Home = () => {
  const dispatch = useDispatch()
  const [venta, setVenta] = useState([])
  const [trueque, setTrueque] = useState([])
  const [servicios, setServicos] = useState([])
  const data = useSelector((state) => state.posts)
  const loading = useSelector((state) => state.loading)


  const postVentas = (data) => {
    const ventas = data.filter((item) => item.venta && !item.trueque && item.tipo === 'producto');
    return ventas.slice(0, 5); // Devuelve solo los primeros 5 elementos
  }

  const postTrueque = (data) => {
    const trueque = data.filter((item) => item.trueque && !item.venta && item.tipo === 'producto');
    return trueque.slice(0, 5); // Devuelve solo los primeros 5 elementos
  }
  const postServicios = (data) => {
    const servicio = data.filter((item) => item.tipo === 'servicio');
    return servicio.slice(0, 5); // Devuelve solo los primeros 5 elementos
  }



  useEffect(() => {
    dispatch(getPost())
    const ventas = postVentas(data);
    const trueques = postTrueque(data);
    const servicio = postServicios(data);
    setServicos(servicio);
    setTrueque(trueques);
  setVenta(ventas);
  },[dispatch, data])


  return (
    <>
      <ScrollView className="flex-1 h-full " style={{ backgroundColor: "#EAE0F4", paddingTop: 5 }}>
     
          <View className="flex-1  ">
            <View>
              <Text className=" font-black "> Ventas </Text>
              <Carrousel data={venta} />
            </View>
            <View>
              <Text className=" font-black "> Treuques </Text>
              <Carrousel data={trueque} />
            </View>
            <View>
              <Text className=" font-black "> Servicios </Text>
              <Carrousel data={servicios} />
            </View>
          </View>
        
    
       
      </ScrollView>
    </>
  );
};

export default Home;
