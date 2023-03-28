import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState, useRef } from "react";
import Carousel, { Pagination } from "react-native-snap-carousel-v4";

const renderItem = ({ item }) => {
  return (
    <View className="justify-center, align-middle bg-white p-3 rounded-lg ">
      <Image className="w-14, h-20 rounded-lg " source={item} />
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
          Categoria
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const MyCarrousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const images = [
    { uri: "https://picsum.photos/id/10/200/300" },
    { uri: "https://picsum.photos/id/20/200/300" },
    { uri: "https://picsum.photos/id/30/200/300" },
    { uri: "https://picsum.photos/id/40/200/300" },
    { uri: "https://picsum.photos/id/50/200/300" },
  ];
  console.log(images);
  const renderArrow = (direction) => {
    return (
      <TouchableOpacity
        style={{
          position: "absolute",
          [direction === "left" ? "left" : "right"]: 0,
          justifyContent: "center",
          alignItems: "center",
          width: 48,
          height: 48,
          top: "40%",
          borderRadius: 100,
          backgroundColor: "gray",
        }}
        onPress={() => {
          if (direction === "left") {
            carouselRef.current.snapToPrev();
          } else {
            carouselRef.current.snapToNext();
          }
        }}>
        {direction == "left" ? (
          <Text style={{ color: "white", fontSize: 24, fontWeight: "bold" }}>
            {"<"}
          </Text>
        ) : (
          <Text style={{ color: "white", fontSize: 24, fontWeight: "bold" }}>
            {">"}
          </Text>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        borderColor: "gray",
        padding: 5,
      }}>
      <Carousel
        ref={carouselRef}
        data={images}
        renderItem={renderItem}
        sliderWidth={500}
        itemWidth={150}
        itemHeight={150}
        onSnapToItem={(index) => setActiveIndex(index)}
        autoplay={false}
        loop={false}
        autoplayInterval={3000}
        autoplayDelay={500}
      />
      {/*  <Pagination
        dotsLength={images.length}
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
      {renderArrow("left")}
      {renderArrow("right")}
    </View>
  );
};

export default MyCarrousel;
