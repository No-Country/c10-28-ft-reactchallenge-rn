import { View, Text, Pressable } from "react-native";
import React, { useState, useEffect } from "react";
import Cabecera from "../components/Cabecera";
import Carrousel from "../components/Carrousel";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Menu from "../components/Menu";
import Botons from "../components/Botons";
import {useDispatch, useSelector } from "react-redux";
import ListaItems from "../components/ListaItems";
import {getPost} from "../redux/action";

const Home = () => {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.posts)
  useEffect(() => {
    dispatch(getPost())
  },[])
  return (
    <>
      <View className="flex-1 " style={{ backgroundColor: "#EAE0F4" }}>
        <Cabecera />
        <ScrollView className="flex-1 my-3 ">
          <View className="flex-1 ">
            <View>
              <Text className=" font-black "> Productos </Text>
              <Carrousel />
            </View>
            <View>
              <Text className=" font-black "> Servicios </Text>
              <Carrousel />
            </View>
          </View>
          <View>
          <ListaItems data={data} />
          </View>

        </ScrollView>
      </View>
    </>
  );
};

export default Home;
