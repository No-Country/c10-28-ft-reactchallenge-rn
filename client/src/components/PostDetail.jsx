import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import React from "react";

const PostDetail = () => {
  return (
    <ScrollView
      style={{
        backgroundColor: "#ffffff",
        margin: 15,
        paddingTop: 20,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 8,
        height: "97%",
      }}
    >
      <View
        style={{
          justifyContent: "flex-end",
          flexDirection: "row",
          width: "100%",
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#9874BA",
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 5,
            marginLeft: 5,
            marginRight: 5,
            marginBottom: 5,
            width: "30%",
            shadowOpacity: 0.17,
            shadowRadius: 2.54,
            elevation: 3,
          }}
        >
          <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
            Compra
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#9874BA",
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
            margin: 5,
            width: "30%",
            shadowOpacity: 0.17,
            shadowRadius: 2.54,
            elevation: 3,
          }}
        >
          <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
            Trueque
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={{
            backgroundColor: "#27B90F",
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 5,
            marginLeft: 5,
            marginRight: 0,
            marginBottom: 5,
            width: "25%",
            shadowOpacity: 0.17,
            shadowRadius: 2.54,
            elevation: 3,
          }}
        >
          <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
            Editar
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#E40303",
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 5,
            marginLeft: 5,
            marginRight: 5,
            marginBottom: 5,
            width: "25%",
            shadowOpacity: 0.17,
            shadowRadius: 2.54,
            elevation: 3,
          }}
        >
          <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
            Eliminar
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: "center" }}>
        <Image
          style={{
            borderRadius: 10,
            marginTop: 30,
            width: 300,
            height: 300,
          }}
          source={require("../images/Image.jpg")}
        />
        |
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "#9874BA",
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center",
          margin: 8,
          width: "95%",
          marginTop: 50,
          marginBottom: 50,
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          Nombre
        </Text>
      </TouchableOpacity>
      <TextInput
        multiline={true}
        numberOfLines={4}
        placeholder={"Ingrese su texto..."}
        style={{
          height: 200,
          textAlignVertical: "top",
          paddingLeft: 8,
          paddingTop: 8,
          borderColor: "#000000",
          shadowOpacity: 0.17,
          shadowRadius: 2.54,
          elevation: 3,
          marginBottom: 30,
        }}
      />
    </ScrollView>
  );
};

export default PostDetail;
