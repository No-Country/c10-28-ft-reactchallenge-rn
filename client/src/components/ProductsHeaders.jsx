import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import logo from "../images/mujer.png";
import Botons from "./Botons";
import {useSelector} from "react-redux";
import Start from './Start'

const ProductsHeaders = ({ img, name, direccion }) => {
  const user = useSelector((state) => state.user) 
  console.log(user.user.email)
  const [like, setLike] = useState(true);
  const [star, setStar] = useState(true);
  const [star2, setStar2] = useState(true);
  const [star3, setStar3] = useState(true);
  const [star4, setStar4] = useState(true);
  const [star5, setStar5] = useState(true);

  const likeHeart = () => {
    setLike(!like);
  };

  const star1f = () => {
    setStar(!star);
  };

  const star2f = () => {
    setStar2(!star2);
    setStar(!star);
  };
  const star3f = () => {
    setStar3(!star3);
    setStar2(!star2);
    setStar(!star);
  };
  const star4f = () => {
    setStar4(!star4);
    setStar3(!star3);
    setStar2(!star2);
    setStar(!star);
  };
  const star5f = () => {
    setStar5(!star5);
    setStar4(!star4);
    setStar3(!star3);
    setStar2(!star2);
    setStar(!star);
  };

  return (
    <View className="flex flex-row  justify-evenly items-center ">
      <View className="">
        <View className=" rounded-full overflow-hidden bg-purple-800  border-purple-400 border-8">
          <Image style={{ height: 100, width: 100 }} source={{uri: user.user.foto_perfil}} />
        </View>
      </View>
      <View>
        <View className="flex items-end ">
          <Botons
            icon={"heart"}
            color={like ? "#f1f1f1" : "red"}
            size={28}
            onPress={likeHeart}
          />
        </View>
        <View className="flex flex-row ml-2 m-3 ">
        <Start />

        </View>
        <View className="flex items-end ">
          <Text className="font-bold text-lg -mt-4  text-zinc-100 ">
            {user.user.nombre_completo}
            
          </Text>
          <Text className="text-base text-zinc-100">
            {user.user.direccion}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ProductsHeaders;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  fondo: {
    backgroundColor: "#eae0f4",
  },
  principalColor: {
    backgroundColor: "#3d2851",
  },
  chatView: {
    position: "absolute",
    top: "6%",
    left: "6%",
    width: "87%",
    height: "90%",
  },
});
