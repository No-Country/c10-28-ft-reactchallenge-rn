import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState, useRef } from "react";
import Carousel, { Pagination } from "react-native-snap-carousel-v4";
import { useNavigation } from "@react-navigation/native";
import {useDispatch} from "react-redux";
import {getCategory} from "../redux/action";

const RenderItem = ({ item, navegar }) => {
  return (
    <TouchableOpacity  onPress={() => navegar(item)} className="justify-center mt-3 w-44 h-44 items-center p-1 rounded-lg ">
      <Image className="w-36 h-36  rounded-lg " source={{ uri: item.fotos[0] }} />
      <View
       
        style={{
          backgroundColor: "#9874BA",
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 5,
          width: '100%',
        }}>
        <Text numberOfLines={1} ellipsizeMode='tail' className="truncate w-full" style={{ maxWidth: 100, color: "white", fontSize: 10, padding:2, fontWeight: "bold" }}   >
          {item.titulo}
        </Text>
      </View>
    </TouchableOpacity>
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
        left: -100,
        borderColor: "gray",
        padding: 5,
      }}>
      <Carousel
        ref={carouselRef}
        data={data}
        renderItem={({ item }) => <RenderItem item={item} navegar={navegar} />}
        sliderWidth={700}
        itemWidth={200}
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
