import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const WIDTH = Dimensions.get("window").width;
const HEIGHT_MODAL = 150;

const Modal2 = (props) => {
  const navigation = useNavigation();

  closeModal = (bool, data) => {
    props.changeModalVisible(bool);
    props.setData(data);
    navigation.goBack();
  };

  return (
    <TouchableOpacity disabled={true} style={styles.container}>
      <View style={styles.modal} className="flex justify-center items-center">
        <Text style={styles.text}>Publicación creada con éxito</Text>
        <View style={styles.btnView}>
          <TouchableOpacity
            style={styles.touchableOpacity}
            onPress={() => closeModal(false, "Ok")}
          >
            <Text
              className="text-white bg-[#3D2851] py-3 px-8 rounded-md"
              style={[styles.text]}
            >
              Ok
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    height: HEIGHT_MODAL,
    width: WIDTH - 80,
    paddingTop: 10,
    backgroundColor: "white",
    borderRadius: 10,
  },
  text: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  btnView: {
    width: "100%",
    flexDirection: "row",
  },
  touchableOpacity: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
  },
});

export default Modal2;
