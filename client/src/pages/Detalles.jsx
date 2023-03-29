import { View, Text, Image } from "react-native";
import React from "react";

const Detalles = ({ route }) => {
  const { titulo, fotos } = route.params;
  console.log(fotos);
  return (
    <View className="flex-1">
      <Text> {titulo} </Text>
      <Image
        style={{
          width: 100,
          height: 100,
          borderRadius: 8,
        }}
        source={{ uri: fotos ? fotos[0] : null }}
      />
    </View>
  );
};

export default Detalles;
