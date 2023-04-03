import { View, Text, FlatList, ActivityIndicator } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Cabecera from "../components/Cabecera";
import CardItems from "../components/CardItems";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../redux/action";
import ListaItems from "../components/ListaItems";



const Productos = () => {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.posts);
  const loading = useSelector((state) => state.loading);

  useEffect(() => {
    dispatch(getPost());
  }, [dispatch]);
 
 
  return (
    <View style={{ flex: 1, backgroundColor: "#EAE0F4" }}>
     <Cabecera />
     {
       loading ?
       <View className="items-center justify-center flex-1  my-3 " >
       <ActivityIndicator  size="large" color="#6a51ae"  />
      </View>

      :
     <View className="flex-1  my-3 " >

        <ListaItems data={post} />
      </View>
      }
    </View>
  );
};


export default Productos