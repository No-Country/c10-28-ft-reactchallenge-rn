import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState, useRef } from "react";
import Carousel, { Pagination } from "react-native-snap-carousel-v4";
import { useNavigation } from "@react-navigation/native";
import {useDispatch} from "react-redux";
import {getCategory} from "../redux/action";

const RenderItem = ({ item, navegar }) => {
  return (
    <View className="justify-center, w-40 h-40 items-center p-1 rounded-lg ">
      <Image className="w-28 h-28  rounded-lg " source={{ uri: item.fotos[0] }} />
      <TouchableOpacity
        onPress={() => navegar(item)}
        style={{
          backgroundColor: "#9874BA",
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 5,
          width: "100%",
        }}>
        <Text style={{ color: "white", fontSize: 10, padding:2, fontWeight: "bold" }}>
          {item.titulo}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const Carrousel = ({data}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);
  const dispatch = useDispatch()
  const navigation = useNavigation();



  const navegar = (item) => {
    
    navigation.navigate("Detalles", item);
   
  
  };

  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        left: -130,
        borderColor: "gray",
        padding: 5,
      }}>
      <Carousel
        ref={carouselRef}
        data={data}
        renderItem={({ item }) => <RenderItem item={item} navegar={navegar} />}
        sliderWidth={640}
        itemWidth={150}
        itemHeight={150}
        onSnapToItem={(index) => setActiveIndex(index)}
        autoplay={false}
        loop={false}
        autoplayInterval={3000}
        autoplayDelay={500}
      />
    </View>
  );
};

export default Carrousel;
