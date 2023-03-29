import { View, Text, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Cabecera from "./Cabecera";
import CardItems from "./CardItems";

/* const data = [
  { id: "1", title: "Elemento 1" },
  { id: "2", title: "Elemento 2" },
  { id: "3", title: "Elemento 3" },
  { id: "4", title: "Elemento 4" },
  { id: "5", title: "Elemento 5" },
  { id: "6", title: "Elemento 6" },
  { id: "7", title: "Elemento 7" },
  { id: "8", title: "Elemento 8" },
  { id: "9", title: "Elemento 9" },
  { id: "10", title: "Elemento 10" },
];
 */

const renderItem = ({ item }) => (
  <View style={{ flex: 1, alignItems: "center", margin: 10 }}>
    <CardItems data={item} />
  </View>
);

const ListaItems = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await axios.get(
      "https://cambialoapi-production.up.railway.app/posts"
    );

    return setData(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "#EAE0F4" }}>
      <Cabecera />
      <View className="flex-1 my-3">
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