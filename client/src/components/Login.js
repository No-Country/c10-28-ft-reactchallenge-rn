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
import { useDispatch } from "react-redux";
import {getLogin} from "../redux/action";

const Login = () => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const data = {
  username: email,
  password: password
}
  const handleLogin = () => {
    // Lógica para iniciar sesión
    dispatch(getLogin(data))
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
      <View
        style={styles.hero}
        className="flex justify-start items-center rounded-b-full w-full">
        <Text style={styles.title}>Iniciar Sesion</Text>
      </View>
      <View>
        <Image style={styles.logo} source={require("../images/logo.png")} />
      </View>
      <View className="w-11/12">
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          autoCapitalize="none"
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
        onPress={() => handleLogin()}
          style={styles.principalColor}
          className="w-full p-4 rounded-full mt-8 flex justify-center items-center shadow-2xl shadow-black">
          <Text className="text-slate-50  font-bold  text-xl"> Ingresar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.register}>
        <Text style={styles.registerText}>¿No tienes cuenta?</Text>
        <TouchableOpacity onPress={() => navega()}>
          <Text style={[styles.registerText, styles.registerButton]}>
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
    height: "18%",
    backgroundColor: "#3D2851",
    zIndex: -1,
  },
  title: {
    fontSize: 40,
    // fontWeight: "bold",

    color: "#FFFFFF",
  },
  logo: {
    width: 300,
    height: 300,
  },

  input: {
    height: 60,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 7,
    paddingHorizontal: 15,
    marginTop: 20,
  },
  button: {
    marginTop: 20,
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
  principalColor: {
    backgroundColor: "#3d2851",
  },
});

export default Login;
