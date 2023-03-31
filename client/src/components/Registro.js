import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const Registro = () => {
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Lógica para iniciar sesión
  };

  const handleRegister = () => {
    // Lógica para registrarse
  };

  return (
    <View style={styles.container}>
      <View
        style={styles.hero}
        className="flex justify-start items-center rounded-b-full w-full">
        <Text style={styles.title}>Registro</Text>
      </View>
      <View className="w-11/12">
        <TextInput
          style={styles.input}
          onChangeText={setFullName}
          value={fullName}
          placeholder="Nombre Completo"
        />
        <TextInput
          style={styles.input}
          onChangeText={setAddress}
          value={address}
          placeholder="Direccion"
        />
        <TextInput
          style={styles.input}
          onChangeText={setPhone}
          value={phone}
          placeholder="Telefono"
        />
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="Correo electrónico"
        />
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Contraseña"
          secureTextEntry
        />
        <TouchableOpacity
          style={styles.principalColor}
          className="w-full p-4 rounded-full mt-8 flex justify-center items-center shadow-2xl shadow-black">
          <Text className="text-slate-50  font-bold  text-xl">
            {" "}
            Registrarse
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EAE0F4",
    width: "100%",
    height: "100%",
  },
  hero: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "15%",
    backgroundColor: "#3D2851",
    zIndex: -1,
  },
  title: {
    fontSize: 40,
    color: "#FFFFFF",
  },

  input: {
    height: 60,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 7,
    paddingHorizontal: 15,
    marginTop: 20,
  },
  principalColor: {
    backgroundColor: "#3d2851",
  },
});

export default Registro;
