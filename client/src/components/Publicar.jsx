import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  Modal,
  Button
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Botons from "./Botons";
import logo from "../images/zapato.png";
import { PermissionsAndroid } from 'react-native';
import * as ImagePicker from 'expo-image-picker';


const Publicar = () => {
  /* const [precio, setPrecio] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [check, setCheck] = useState(true);
  const [servicio, setServicio] = useState(true);
  const [venta, setVenta] = useState(true);
  const [trueque, setTrueque] = useState(true); */
  const alerta = () => {
    alert("Agrega una foto");
  };
  const [inputs, setInputs] = useState({
    precio: '',
    title: '',
    description: '',
    fotos: [],
    check: true,
    servicio: true,
    venta: true,
    trueque: true,
  })

  const marked = () => {
    setInputs({...inputs, check: !check})
  };
  const marked2 = () => {
    setInputs({...inputs, servicio:!servicio});
  };
  const marked3 = () => {
    setInputs({...inputs, venta:!venta});
  };
  const marked4 = () => {
    setInputs({...inputs, trueque:!trueque});
  };



  const [modalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };
  
  const hideModal = () => {
    setModalVisible(false);
  };
  
  
    
  

  const handleImagesFromLibrary = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsMultipleSelection: true,
 
  aspect: [4, 3],
  quality: 1,
  allowsEditing: false
      });
  
      if (!result.canceled) {
        setInputs({ ...inputs, fotos: result.assets.map(asset => asset.uri) });
        console.log(result.assets.map(asset => asset.uri));
      }
    } catch (err) {
      console.log('Error: ', err);
    }
  };  
 
  
  
  
  

console.log('media',inputs.fotos)

const handleMultiplePhotos = async () => {
  const { granted } = await ImagePicker.requestCameraPermissionsAsync();
  if (!granted) {
    alert('Permission to access camera is required!');
    return;
  }

  const result = await ImagePicker.launchCameraAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsMultipleSelection: true,
    aspect: [4, 3],
    quality: 1, 
    allowsEditing: true,
    maxCount: 5, // <-- aquí se establece el número máximo de fotos
  });

  if (!result.canceled) {
    setInputs({...inputs, fotos: result.assets.map(asset => asset.uri) });
  }
};



  return (
    <View style={styles.fondo} className="h-full relative ">
      <View
        style={styles.principalColor}
        className="w-screen h-2/3 rounded-br-full  "></View>
      <View style={styles.main} className="absolute">
        <View className="flex flex-row justify-between items-center">
          <View className="border-2 rounded-lg border-zinc-400 bg-slate-400 p-3">
            <Image style={{ height: 100, width: 100 }} source={inputs.fotos ? {uri: inputs?.fotos[0]} : logo} />
          </View>
          <Botons
            bgBotton={"#9874BA"}
            redondo={10}
            icon={"camera"}
            flex={"row"}
            altura={40}
            size={28}
            title={"Agregar imagen"}
            onPress={showModal}
          />
        </View>
        <View className="bg-slate-200 mt-5 p-3 rounded-lg">
          <Text className="text-xl text-black font-bold">
            Tipo de publicacion:
          </Text>
          <View className="flex justify-center items-center mt-5">
            <View
              style={{ backgroundColor: "#9874BA" }}
              className="rounded-lg p-2 flex ">
              <View className="flex  flex-row justify-between gap-x-10 my-1 ">
                <Text className="text-gray-300 text-base font-bold">
                  Producto
                </Text>
                <View className="border-2 bg-slate-300">
                  <TouchableOpacity style={{ width: 25 }} onPress={marked}>
                    <Text> {inputs.check ? "✔️" : ""} </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View className="flex  flex-row justify-between my-1">
                <Text className="text-gray-300 text-base font-bold">
                  Servicio
                </Text>
                <View className="border-2 bg-slate-300">
                  <TouchableOpacity style={{ width: 25 }} onPress={marked2}>
                    <Text> {inputs.servicio ? "✔️" : ""} </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View className="flex  flex-row  justify-between my-1 ">
                <Text className="text-gray-300 text-base font-bold">Venta</Text>
                <View className="border-2 bg-slate-300  ">
                  <TouchableOpacity style={{ width: 25 }} onPress={marked3}>
                    <Text> {inputs.venta ? "✔️" : ""} </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View className="flex  flex-row justify-between my-1 ">
                <Text className="text-gray-300 text-base font-bold">
                  Trueque
                </Text>
                <View className="border-2 bg-slate-300">
                  <TouchableOpacity style={{ width: 25 }} onPress={marked4}>
                    <Text> {inputs.trueque ? "✔️" : ""} </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <View className="flex flex-row my-5 gap-x-3  items-center">
            <Text className="text-xl text-black font-bold">Precio: $</Text>
            <TextInput
              className="bg-slate-100 border-2 rounded-lg border-slate-100 p-2 "
              onChangeText={(text) => setInputs({...inputs, precio: text})}
              value={inputs.precio}
              placeholder="$10.00"
            />
          </View>
          <View className="flex  gap-x-3">
            <Text className="text-xl text-black font-bold">
              Titulo de la publicacion
            </Text>
            <TextInput
              className="bg-slate-100 border-2 rounded-lg mt-3 border-slate-100 p-2 "
              onChangeText={(text) => setInputs({...inputs, title: text})}
              value={inputs.title}
              placeholder="Zapatos Nike"
            />
          </View>
          <View className="flex  my-5 gap-x-3">
            <Text className="text-xl text-black font-bold">Descripcion</Text>
            <TextInput
              className="bg-slate-100 border-2 mt-3 rounded-lg border-slate-100 p-7 "
              onChangeText={(text) => setInputs({...inputs, description: text})}
              value={inputs.description}
              placeholder="Nuevo un solo dueno, lo vento por falta de dinero"
            />
          </View>
        </View>
      </View>
      <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <View style={styles.modalView}>
          <TouchableOpacity style={{ margin:3, borderRadius: 8, backgroundColor: "#9874BA" }} onPress={handleImagesFromLibrary}>
            <Text className="text-lg text-white p-2 font-semibold">Elegir de la galeria</Text>
            </TouchableOpacity>
          <TouchableOpacity style={{ margin:3, borderRadius: 8, backgroundColor: "#9874BA" }} onPress={handleMultiplePhotos}>
            <Text  className="text-lg text-white p-1 font-semibold">Toamr fotos</Text>
            </TouchableOpacity>
          <TouchableOpacity style={{ margin: 3, borderRadius: 8, backgroundColor: "#9874BA" }} onPress={hideModal}>
            <Text  className="text-lg text-white p-1 font-semibold">Cancelar</Text>
            </TouchableOpacity>
         
        </View>
      </Modal>
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
  modalView: {
    margin: 20,
    backgroundColor: "#3d2851",
    borderRadius: 20,
    padding: 35,
    position: 'absolute',
    bottom: 0,
    left: 60,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 200,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
