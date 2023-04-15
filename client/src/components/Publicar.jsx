import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  Modal,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Botons from "./Botons";
import logo from "../images/zapato.png";
import Modal2 from "./Modal2";

const Publicar = () => {
  const [precio, setPrecio] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [check, setCheck] = useState(true);
  const [servicio, setServicio] = useState(true);
  const [venta, setVenta] = useState(true);
  const [trueque, setTrueque] = useState(true);
  const alerta = () => {
    alert("Agrega una foto");
  };

  const marked = () => {
    setCheck(!check);
  };
  const marked2 = () => {
    setServicio(!servicio);
  };
  const marked3 = () => {
    setVenta(!venta);
  };
  const marked4 = () => {
    setTrueque(!trueque);
  };

  const [isModalVisible, SetIsModalVisible] = useState(false);
  const [chooseData, SetChooseData] = useState();

  const changeModalVisible = (bool) => {
    SetIsModalVisible(bool);
  };

  const setData = (data) => {
    SetChooseData(data);
  };

  return (
    <View style={styles.fondo} className="h-full relative ">
      <View
        style={styles.principalColor}
        className="w-screen h-2/3 rounded-br-full  "
      ></View>
      <ScrollView style={styles.main} className="absolute">
        <View className="flex flex-row justify-between items-center">
          <View className="border-2 rounded-lg border-zinc-400 bg-slate-400 p-3">
            <Image style={{ height: 100, width: 100 }} source={logo} />
          </View>
          <Botons
            bgBotton={"#9874BA"}
            redondo={10}
            icon={"camera"}
            flex={"row"}
            altura={40}
            size={28}
            title={"Agregar imagen"}
            navegar={"Camara"}
          />
        </View>
        <View className="bg-slate-200 mt-5 p-3 rounded-lg">
          <Text className="text-xl text-black font-bold">
            Tipo de publicacion:
          </Text>
          <View className="flex justify-center items-center mt-5">
            <View
              style={{ backgroundColor: "#9874BA" }}
              className="rounded-lg p-2 flex "
            >
              <View className="flex  flex-row justify-between gap-x-10 my-1 ">
                <Text className="text-gray-300 text-base font-bold">
                  Producto
                </Text>
                <View className="border-2 bg-slate-300">
                  <TouchableOpacity style={{ width: 25 }} onPress={marked}>
                    <Text> {check ? "✔️" : ""} </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View className="flex  flex-row justify-between my-1">
                <Text className="text-gray-300 text-base font-bold">
                  Servicio
                </Text>
                <View className="border-2 bg-slate-300">
                  <TouchableOpacity style={{ width: 25 }} onPress={marked2}>
                    <Text> {servicio ? "✔️" : ""} </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View className="flex  flex-row  justify-between my-1 ">
                <Text className="text-gray-300 text-base font-bold">Venta</Text>
                <View className="border-2 bg-slate-300  ">
                  <TouchableOpacity style={{ width: 25 }} onPress={marked3}>
                    <Text> {venta ? "✔️" : ""} </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View className="flex  flex-row justify-between my-1 ">
                <Text className="text-gray-300 text-base font-bold">
                  Trueque
                </Text>
                <View className="border-2 bg-slate-300">
                  <TouchableOpacity style={{ width: 25 }} onPress={marked4}>
                    <Text> {trueque ? "✔️" : ""} </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <View className="flex flex-row my-5 gap-x-3  items-center">
            <Text className="text-xl text-black font-bold">Precio: $</Text>
            <TextInput
              className="bg-slate-100 border-2 rounded-lg border-slate-100 p-2 "
              onChangeText={setPrecio}
              value={precio}
              placeholder="$10.00"
            />
          </View>
          <View className="flex  gap-x-3">
            <Text className="text-xl text-black font-bold">
              Titulo de la publicacion
            </Text>
            <TextInput
              className="bg-slate-100 border-2 rounded-lg mt-3 border-slate-100 p-2 "
              onChangeText={setTitle}
              value={title}
              placeholder="Zapatos Nike"
            />
          </View>
          <View className="flex  my-5 gap-x-3">
            <Text className="text-xl text-black font-bold">Descripcion</Text>
            <TextInput
              className="bg-slate-100 border-2 mt-3 rounded-lg border-slate-100 p-7 "
              onChangeText={setDescription}
              value={description}
              placeholder="Nuevo un solo dueno, lo vento por falta de dinero"
            />
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => changeModalVisible(true)}
              style={{
                backgroundColor: "#3d2851",
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
                width: "50%",
                height: 40,
                shadowOpacity: 0.17,
                shadowRadius: 2.54,
                elevation: 3,
                marginTop: 10,
              }}
            >
              <Text
                style={{ color: "white", fontSize: 16, fontWeight: "bold" }}
              >
                Publicar
              </Text>
            </TouchableOpacity>
          </View>
          <Modal
            transparent={true}
            animationType="fade"
            visible={isModalVisible}
            nRequestClose={() => changeModalVisible(false)}
          >
            <Modal2 changeModalVisible={changeModalVisible} setData={setData} />
          </Modal>
        </View>
      </ScrollView>
    </View>
  );
};

export default Publicar;

const styles = StyleSheet.create({
  fondo: {
    backgroundColor: "#eae0f4",
  },
  principalColor: {
    backgroundColor: "#3d2851",
  },
  main: {
    top: "2%",
    left: "6%",
    width: "87%",
    height: "90%",
  },
});
