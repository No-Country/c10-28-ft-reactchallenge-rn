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
  closeModal = (bool, data) => {
    props.changeModalVisible(bool);
    props.setData(data);
  };

  return (
    <TouchableOpacity disabled={true} style={styles.container}>
      <View style={styles.modal}>
        <Text style={styles.text}>Publicación creada con éxito</Text>
        <View style={styles.btnView}>
          <TouchableOpacity
            style={styles.touchableOpacity}
            onPress={() => closeModal(false, "Ok")}
          >
            <Text style={[styles.text, { color: "blue" }]}>Ok</Text>
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
    marginTop: 20,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  btnView: {
    width: "100%",
    flexDirection: "row",
    marginTop: 30,
  },
  touchableOpacity: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
  },
});

export default Modal2;
