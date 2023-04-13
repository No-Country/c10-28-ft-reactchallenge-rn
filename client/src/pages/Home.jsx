import {
  View,
  Text,
  Pressable,
  ActivityIndicator,
  TouchableOpacity,
  SectionList,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import Cabecera from "../components/Cabecera";
import Carrousel from "../components/Carrousel";
import { useDispatch, useSelector } from "react-redux";
import ListaItems from "../components/ListaItems";
import { getPost } from "../redux/action";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import Featured from "../components/Featured";

const Home = () => {
  // const dispatch = useDispatch();
  const navigation = useNavigation();
  // const [venta, setVenta] = useState([]);
  // const [trueque, setTrueque] = useState([]);
  // const [servicios, setServicos] = useState([]);
  const data = useSelector((state) => state.posts);
  const loading = useSelector((state) => state.loading);

  const [homeData, setHomeData] = useState({
    productsList: [],
    servicesList: [],
  });

  // const postVentas = (data) => {
  //   const ventas = data.filter(
  //     (item) => item.venta && item.trueque && item.tipo === "producto"
  //   );
  //   return ventas.slice(0, 5); // Devuelve solo los primeros 5 elementos
  // };

  // const postServicios = (data) => {
  //   const servicio = data.filter((item) => item.tipo === "servicio");
  //   return servicio.slice(0, 5); // Devuelve solo los primeros 5 elementos
  // };

  useEffect(() => {
    fetch("https://cambialoapi-production.up.railway.app/posts?tipo=servicio")
      .then((response) => response.json())
      .then((data) =>
        setHomeData((currentData) => {
          return { ...currentData, servicesList: data.slice(0, 4) };
        })
      );
    fetch("https://cambialoapi-production.up.railway.app/posts?tipo=producto")
      .then((response) => response.json())
      .then((data) =>
        setHomeData((currentData) => {
          return { ...currentData, productsList: data.slice(0, 4) };
        })
      );

    // dispatch(getPost());
    // const ventas = postVentas(data);
    // const servicio = postServicios(data);
    // setServicos(servicio);
    // setVenta(ventas);
    // }, [dispatch, data]);
  }, []);

  const homeSections = [
    { title: "Productos", data: homeData.productsList },
    { title: "Servicios", data: homeData.servicesList },
  ];

  return (
    <View className="bg-[#EAE0F4] h-full">
      <Cabecera />
      <ScrollView className="my-3 px-6">
        <Featured
          data={homeData.productsList}
          title={"Productos"}
          query={"producto"}
        />
        <Featured
          data={homeData.servicesList}
          title={"Servicios"}
          query={"servicio"}
        />
      </ScrollView>

      {/* 
        <ScrollView
          className="flex-1 h-full "
          style={{ backgroundColor: "#EAE0F4", paddingTop: 5 }}
        >
          <View className="flex-1  ">
            <View className="p-4">
              <TouchableOpacity
                onPress={() => navigation.navigate("Publicaciones")}
              >
                <Text className=" font-black "> Productos {">"} </Text>
              </TouchableOpacity>
              <ListaItems data={data} />
            </View>
            <View className="p-4 mt-2">
              <TouchableOpacity
                onPress={() => navigation.navigate("Publicaciones")}
              >
                <Text className=" font-black "> Servicios {">"}</Text>
              </TouchableOpacity>
              <ListaItems data={data} />
            </View>
          </View>
        </ScrollView> */}
    </View>
  );
};

export default Home;
