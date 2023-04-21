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
import { PermissionsAndroid } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import {useDispatch, useSelector } from 'react-redux'

import Modal2 from "./Modal2";
import {newPost} from "../redux/action";

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
  const dispatch = useDispatch()
  const user = useSelector(state => state.user.user)
  const [inputs, setInputs] = useState({
    vendedor_id: user.user_id,
    precio:  '',
    titulo: '',
    descripcion: '',
    condiciones_intercambio: ' ',
    categoria: ' ',
    fotos: [],
    tipo: ' ',
    venta: false,
    trueque: false,
    disponible: true,

  })

  
  const handleTipoChange = (tipo) => {
    setInputs((prevInputs) => ({
      ...prevInputs,
      tipo,
    }));
  };
  const handlePost = () => {
    // Comprobar que todos los campos estén completos
    if (!inputs.precio || !inputs.titulo || !inputs.descripcion || inputs.fotos.length === 0) {
      alert('Por favor, completa todos los campos.');
      return;
    }
  
    // Dispatch de la acción newPost
    dispatch(newPost(inputs));
    changeModalVisible(true)
  };
  


  const marked = () => {
    handleTipoChange('producto')
  };
  const marked2 = () => {
    handleTipoChange('servicio');
  };
  const marked3 = () => {
    setInputs({...inputs, venta:!inputs.venta});
  };
  const marked4 = () => {
    setInputs({...inputs, trueque:!inputs.trueque});
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
        hideModal()
        console.log(result.assets.map(asset => asset.uri));
      }
    } catch (err) {
      console.log('Error: ', err);
    }
  };  
 
  
  
  
  


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
    hideModal()
  }
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
            <Image style={{ height: 100, width: 100 }} source={inputs.fotos[0] ? {uri: inputs?.fotos[0]} : logo} />
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
              className="rounded-lg p-2 flex "
            >
              <View className="flex  flex-row justify-between gap-x-10 my-1 ">
                <Text className="text-gray-300 text-base font-bold">
                  Producto
                </Text>
                <View className="border-2 bg-slate-300">
                  <TouchableOpacity style={{ width: 25 }} onPress={marked}>
                    <Text> {inputs.tipo === 'producto' ? "✔️" : ""} </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View className="flex  flex-row justify-between my-1">
                <Text className="text-gray-300 text-base font-bold">
                  Servicio
                </Text>
                <View className="border-2 bg-slate-300">
                  <TouchableOpacity style={{ width: 25 }} onPress={marked2}>
                    <Text> {inputs.tipo === 'servicio' ? "✔️" : ""} </Text>
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
              onChangeText={(text) => setInputs({...inputs, titulo: text})}
              value={inputs.titulo}
              placeholder="Zapatos Nike"
            />
          </View>
          <View className="flex  my-5 gap-x-3">
            <Text className="text-xl text-black font-bold">Descripcion</Text>
            <TextInput
              className="bg-slate-100 border-2 mt-3 rounded-lg border-slate-100 p-7 "
              onChangeText={(text) => setInputs({...inputs, descripcion: text})}
              value={inputs.descripcion}
              placeholder="Nuevo un solo dueño, lo vendo por falta de dinero"
            />
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => handlePost()}
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
      <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <View style={styles.modalView}>
          <TouchableOpacity style={{ margin:3, borderRadius: 8, backgroundColor: "#9874BA" }} onPress={handleImagesFromLibrary}>
            <Text className="text-lg text-white p-2 font-semibold">Elegir de galeria</Text>
            </TouchableOpacity>
          <TouchableOpacity style={{ margin:3, borderRadius: 8, backgroundColor: "#9874BA" }} onPress={handleMultiplePhotos}>
            <Text  className="text-lg text-white p-1 font-semibold">Toamar fotos</Text>
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
