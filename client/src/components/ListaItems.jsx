import { View, Text, FlatList } from "react-native";
import React, { useState, useEffect } from "react";

import CardItems from "./CardItems";

const renderItem = ({ item }) => (
  <View style={{ margin: 4 }}>
    <CardItems data={item} />
  </View>
);

const ListaItems = ({ data }) => {
  /* const dispatch = useDispatch();
  const post = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPost());
  }, [dispatch]);
 */

  return (
    <View className="flex items-center">
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.publicacion_id}
        numColumns={2}
      />
    </View>
  );
};

export default ListaItems;
