import { View, Text, FlatList } from "react-native";
import React, { useState, useEffect } from "react";

import CardItems from "./CardItems";



const renderItem = ({ item }) => (
  <View style={{ flex: 1, alignItems: "center", margin: 5 }}>
    <CardItems data={item} />
  </View>
);

const ListaItems = ({data}) => {
  /* const dispatch = useDispatch();
  const post = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPost());
  }, [dispatch]);
 */
 
  return (
    <View style={{ flex: 1, backgroundColor: "#EAE0F4" }}>
     
      <View className="flex-1 ">
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.publicacion_id}
          numColumns={2}
          
        />
      </View>
    </View>
  );
};

export default ListaItems;
