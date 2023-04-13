import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const CardItems = ({ data }) => {
  const { titulo, fotos, publicacion_id } = data;
  const navigation = useNavigation();
  function pressHandler(id) {
    navigation.navigate("Detalles", id);
  }
  return (
    <View className="bg-white p-2 rounded w-40 flex items-center">
      <TouchableOpacity onPress={() => pressHandler(publicacion_id)}>
        <Image source={{ uri: fotos[0] }} className="w-36 h-36" />
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          className="bg-[#9874BA] mt-2 py-1 px-3 rounded-md text-white font-semibold text-center"
        >
          {titulo.split(" ")[0]}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CardItems;
