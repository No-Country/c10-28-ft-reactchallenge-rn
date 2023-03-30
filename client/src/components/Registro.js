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
      <View style={styles.hero}></View>
      <Text style={styles.title}>Registro</Text>
      <View style={styles.form}>
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
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Registrarse</Text>
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
    height: 150,
    backgroundColor: "#3D2851",
    borderBottomLeftRadius: 130,
    borderBottomRightRadius: 130,
    zIndex: -1,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#FFFFFF",
  },
  form: {
    marginTop: 30,
    width: "80%",
  },
  input: {
    height: 40,
    margin: 12,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    marginTop: 10,
    backgroundColor: "#3D2851",
    borderRadius: 100,
    padding: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default Registro;
