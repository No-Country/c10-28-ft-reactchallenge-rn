import { View, Text, FlatList, ActivityIndicator } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Cabecera from "../components/Cabecera";
import CardItems from "../components/CardItems";
import { useDispatch, useSelector } from "react-redux";
import ListaItems from "../components/ListaItems";
import { getPost } from "../redux/action";

const Publicaciones = ({ route }) => {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.postsFiltrados);
  const [loading, setLoading] = useState(true);

  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    let timer;
    if (post.length > 0) {
      setLoading(false);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [post.length, loading]);

  return (
    <View className="px-6 py-2 bg-[#EAE0F4] h-full">
      <View>
        <Text
          style={{
            fontFamily: "roboto-bold",
            fontSize: 24,
            color: "#3D2851",
            textAlign: "center",
            marginVertical: 6,
          }}
        >
          {route.params}
        </Text>
      </View>

      {loading ? (
        <View className="items-center justify-center flex-1 my-3">
          <ActivityIndicator size="large" color="#6a51ae" />
        </View>
      ) : (
        <View style={{ height: "93%" }}>
          <ListaItems data={post} />
        </View>
      )}
    </View>
  );
};

export default Publicaciones;
