import { View, Text, TouchableOpacity, Image, StyleSheet,FlatList, Dimensions } from "react-native";
import React, { useState, useRef } from "react";
import Carousel, { Pagination } from "react-native-snap-carousel-v4";
import { useNavigation } from "@react-navigation/native";
import ImageZoom from 'react-native-image-pan-zoom';




const DetailsImage = ({data}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);
  const navigation = useNavigation();

  
const RenderItem = ({ item, navegar }) => {
    return (
      <View
        
        style={{
         borderRadius: 12,
          height: '100%',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',}}
      >
    <ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       useNativeDriver={true}
                       
                       imageWidth={420}
                       imageHeight={400}>
                <Image style={{width:400, height:400,  borderRadius:12, resizeMode: "contain"}}
                       source={{uri:item}}/>
            </ImageZoom>

      </View>
    );
  };
  const RenderMiniatura = ({ item, index }) => {
    return (
      <TouchableOpacity onPress={() => carouselRef.current.snapToItem(index) }>
        <Image
          style={activeIndex === index ? styles.miniaturaActiva : styles.miniaturaInactiva}
          source={{ uri: item }}
        />
      </TouchableOpacity>
    );
  };
  
  
  return (
    <>
    
       
   


      <Carousel
        ref={carouselRef}
        data={data}
        renderItem={({ item }) => <RenderItem item={item}  />}
        sliderWidth={350}
        containerCustomStyle={{ height: 300,  width: '100%'}}
        itemWidth={350}
        itemHeight={150}
        onSnapToItem={(index) => setActiveIndex(index)}
        autoplay={true}
        loop={true}
        autoplayInterval={3000}
        autoplayDelay={500}
        scrollEnabled={true}
      />
     
     <View style={styles.miniaturasContenedor}>
        <FlatList
          data={data}
          horizontal
          renderItem={({ item, index }) => <RenderMiniatura item={item} index={index} />}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>

      </>
  );
};

export default DetailsImage;


const styles = StyleSheet.create({
    contenedor: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    item: {
      width: 180,
      height: 150,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffffff',
    },
    imagen: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
    },
    miniaturasContenedor: {
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%",
        height: 70,
        
      },
    paginacion: {
      backgroundColor: 'red',
      paddingVertical: 8,
      paddingHorizontal: 16,
      position: 'relative',
      bottom: 0,
      left: 0,
      right: 0,
    },
    dotContainer: {
      marginHorizontal: 2,
    },
    dot: {
      width: 10,
      height: 10,
      borderRadius: 5,
      backgroundColor: '#ffffff',
    },
    miniaturaActiva: {
      width: 40,
      height: 30,
      resizeMode: 'cover',
      borderColor: '#ffffff',
      borderWidth: 2,
    },
    miniaturaInactiva: {
      width: 40,
      height: 30,
      resizeMode: 'cover',
      borderColor: '#ffffff',
      borderWidth: 1,
    },
  
      zoomableView: {
        height: '100%',
        width: '100%',
        backgroundColor: 'black'
    },
    image: {
        height: '100%',
        width: '100%',
        resizeMode: 'contain'
    }
  });