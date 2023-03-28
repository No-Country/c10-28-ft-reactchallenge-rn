import { View, Text } from "react-native";
import React from "react";
import Cabecera from "../components/Cabecera";
import Carrousel from "../components/Carrousel";
import { ScrollView } from "react-native-gesture-handler";

const Home = () => {
  return (
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
      </ScrollView>
    </View>
  );
};

export default Home;
