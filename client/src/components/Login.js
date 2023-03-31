import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Lógica para iniciar sesión
  };

  const handleRegister = () => {
    // Lógica para registrarse
  };

  const navigation = useNavigation();

  const navega = () => {
    navigation.navigate("Registro");
  };
  
  return (

    
    <View style={styles.container}>
      <View style={styles.hero}></View>
      <Text style={styles.title}>Iniciar Sesion</Text>
      <Image
        style={styles.logo}
        source={require("../images/logo.png")}
      />
      <View style={styles.form}>
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
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Ingresar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.register}>
        <Text style={styles.registerText}>¿No tienes cuenta?</Text>
        <TouchableOpacity onPress={() => navega()}>
          <Text   style={[styles.registerText, styles.registerButton]}>
            Regístrate
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
    height: 150,
    backgroundColor: "#3D2851",
    borderBottomLeftRadius: 130,
    borderBottomRightRadius: 130,
    zIndex: -1,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#FFFFFF",
    marginTop: -50,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  form: {
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
    padding: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  register: {
    flexDirection: "row",
    marginTop: 20,
  },
  registerText: {
    marginRight: 5,
  },
  registerButton: {
    color: "purple",
    textDecorationLine: "underline",
  },
});

export default Login;
