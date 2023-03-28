import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState, useRef } from "react";
import Carousel, { Pagination } from "react-native-snap-carousel-v4";

const renderItem = ({ item }) => {
  return (
    <View className="justify-center, align-middle bg-white p-3 rounded-lg ">
      <Image className="w-14, h-28 rounded-lg " source={{ uri: item.uri }} />
      <TouchableOpacity
        style={{
          backgroundColor: "#9874BA",
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 5,
          width: "100%",
        }}>
        <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
          {item.category}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const Carrousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const data = [
    { uri: "https://picsum.photos/id/10/200/300", category: "Ropa" },
    { uri: "https://picsum.photos/id/20/200/300", category: "Telefonia" },
    { uri: "https://picsum.photos/id/30/200/300", category: "Computacion" },
    { uri: "https://picsum.photos/id/40/200/300", category: "Automotor" },
    { uri: "https://picsum.photos/id/50/200/300", category: "Salud" },
  ];

  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        left: -80,
        borderColor: "gray",
        padding: 5,
      }}>
      <Carousel
        ref={carouselRef}
        data={data}
        renderItem={renderItem}
        sliderWidth={600}
        itemWidth={180}
        itemHeight={150}
        onSnapToItem={(index) => setActiveIndex(index)}
        autoplay={false}
        loop={false}
        autoplayInterval={3000}
        autoplayDelay={500}
      />
      {/*  <Pagination
        dotsLength={data.length}
        activeDotIndex={activeIndex}
        containerStyle={{ marginTop: 8, alignItems: "center" }}
        dotStyle={{
          width: 12,
          height: 12,
          borderRadius: 6,
          backgroundColor: "gray",
        }}
        inactiveDotOpacity={0.4}
        inactiveDotStyle={{
          width: 12,
          height: 12,
          borderRadius: 6,
          backgroundColor: "gray",
        }}
        dotOpacity={0.4}
      /> */}
    </View>
  );
};

export default Carrousel;
