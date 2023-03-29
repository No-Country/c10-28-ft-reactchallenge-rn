import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const CardItems = ({ data }) => {
  const { titulo, fotos, precio } = data;
  const navigation = useNavigation();
  const navega = () => {
    navigation.navigate("Detalles", data);
  };
  return (
    <TouchableOpacity onPress={() => navega()}>
      <View
        style={{ backgroundColor: "#EAE0F4" }}
        className=" items-center w-48 h-56  rounded-lg  ">
        <View className=" w-48 h-40 max-w-full max-h-48 ">
          <Image
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 8,
            }}
            source={{ uri: fotos[0] }}
          />
        </View>
        <View>
          <Text className="font-black ">{precio}</Text>
          <Text className="fo ">{titulo}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardItems;