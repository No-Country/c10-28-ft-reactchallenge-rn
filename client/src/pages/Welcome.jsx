
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
} from "react-native";
import Logo from "../images/logoWelcome.png";
import Google from "../images/google.png";
import Facebook from "../images/facebook.png";
import { useNavigation } from "@react-navigation/native";

const Welcome = () => {
    const navigation = useNavigation();
    const registro = () => {
      navigation.navigate("Registro");
    };
    const login = () => {
      navigation.navigate("Login");
    };
    return (
      <View className="h-full" style={styles.fondo}>
        <View
          style={[styles.principalColor, styles.height]}
          className="w-full relative">
          <Image className="absolute" style={styles.imagen} source={Logo} />
        </View>
        <Text
          style={styles.colorText}
          className="font-bold text-3xl pt-16 text-center">
          Bienvenido a Cambialo
        </Text>
        <Text style={styles.colorText} className="text-center">
          Podras permutar o comprar Productos o Servicios
        </Text>
        <View className="flex gap-y-3 pt-8">
          <TouchableOpacity
            onPress={() => login()}
            style={styles.principalColor}
            className="mx-5 p-4 rounded-full flex justify-center items-center">
            <Text className="text-slate-50 font-bold  text-xl ">
              Iniciar Sesion
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => registro()}
            style={styles.principalColor}
            className="mx-5 p-4 rounded-full flex justify-center items-center">
            <Text className="text-slate-50  font-bold  text-xl"> Registro</Text>
          </TouchableOpacity>
        </View>
        <Text className="font-bold  text-xl text-center pt-5">
          Iniciar sesion con:
        </Text>
        <View className="w-full flex flex-row justify-evenly items-center pt-8" >
          <Image style={{ width: 60, height: 60 }} source={Google} />
          <Image style={{ width: 60, height: 60 }} source={Facebook} />
        </View>
      </View>
    );
};

export default Welcome;

const styles = StyleSheet.create({
  imagen: {
    width: 300,
    height: 300,
    left:"15%",
    bottom:"-18%"
  },
  fondo: {
    backgroundColor: "#eae0f4",
  },
  principalColor: {
    backgroundColor: "#3d2851",
  },
  colorText: {
    color: "#3d2851",
  },
  height: {
    height: "42%",
  },
  
});
