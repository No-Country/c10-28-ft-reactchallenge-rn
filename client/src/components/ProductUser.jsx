import { View, Text, ActivityIndicator } from "react-native";
import React, { useEffect } from "react";
import ListaItems from "./ListaItems";
import { useSelector, useDispatch } from "react-redux";
import { productUser } from "../redux/action";

const ProductUser = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.postUser);
  const loading = useSelector((state) => state.loading);
  const id = 2;
  useEffect(() => {
    dispatch(productUser(id));
  }, [dispatch]);
  return (
    <View style={{ flex: 1 }}>
      {loading ? (
        <View className="items-center justify-center flex-1  my-3 ">
          <ActivityIndicator size="large" color="#6a51ae" />
        </View>
      ) : (
        <View className="flex-1  my-3 ">
          <ListaItems data={data} />
        </View>
      )}
    </View>
  );
};

export default ProductUser;
