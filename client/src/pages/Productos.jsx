import { View, Text, FlatList, ActivityIndicator } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Cabecera from "../components/Cabecera";
import CardItems from "../components/CardItems";
import { useDispatch, useSelector } from "react-redux";
import ListaItems from "../components/ListaItems";
import {getPost} from "../redux/action";



const Productos = ({route}) => {
  const dispatch = useDispatch()
  const post = useSelector((state) => state.postsFiltrados);
  const loading = useSelector((state) => state.loading);
  
console.log(post.length)
console.log(loading)
const [showMessage, setShowMessage] = useState(false);

useEffect(() => {
  let timer;
  if (post.length === 0 && loading) {
    timer = setTimeout(() => {
      setShowMessage(true);
      dispatch({ type: 'SET_LOADING', payload: false });
    }, 2000);
  } else {
    setShowMessage(false);
  }

  return () => {
    clearTimeout(timer);
  };
}, [post.length, loading]);
 
  return (
    <View style={{ flex: 1, backgroundColor: "#EAE0F4" }}>
     
     <View className="items-center mt-5 ">
<Text style={{fontFamily:'roboto-bold', fontSize: 24, color:'#3D2851'}} >{route.params}</Text>
     </View>
 
    {
      loading ? 
        <View className="items-center justify-center flex-1 my-3">
          <ActivityIndicator size="large" color="#6a51ae" />
        </View>
      : 
      <View className="flex-1 my-3">
        <ListaItems data={post} />
      </View>
    }

    {showMessage && (
      <View>
        <Text>Ha pasado más de 2 segundos y no hay nada que mostrar.</Text>
      </View>
    )}
  </View>
);
}


export default Productos