import { socket } from "../socket";
import React, { useEffect, useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import MessageInput from "../components/MessageInput";
import Messages from "../components/Messages";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const Chat = () => {
  const navigation = useNavigation();
  const loggedUser = useSelector((state) => state.user);

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const messageListener = (message) => {
      setMessages((current) => [...current, message]);
    };

    socket.on("message", messageListener);

    return () => {
      socket.off("message", messageListener);
    };
  }, []);

  return (
    <View style={styles.fondo} className="h-full relative ">
      <View
        style={styles.principalColor}
        className="w-screen h-2/3 rounded-br-full "
      ></View>
      <View style={styles.chatView} className="bg-slate-300 rounded-xl p-5  ">
        <View style={{ height: "75%" }}>
          <ScrollView className="p-5 bg-slate-100 rounded-lg flex">
            <Messages messages={messages} user={loggedUser} />
            {/* <View className="flex gap-4 ">
            <View className="flex items-start ">
              <Text className="border-2 rounded-xl p-2 ">
                Hola, te interesaria cambiar mi play 5 por tarjeta grafica?
              </Text>
            </View>
            <View className="flex items-end">
              <Text className="border-2 rounded-xl p-2 bg-violet-200  ">
                Si te parece si nos encontramos manana?
              </Text>
            </View>
            <View className="flex items-start">
              <Text className="border-2 rounded-xl p-2 ">
                Donde nos encontramos?
              </Text>
            </View>
            <View className="flex items-end">
              <Text className="border-2 rounded-xl p-2 bg-violet-200 ">
                Puede ser en palermo?
              </Text>
            </View>
          </View> */}
          </ScrollView>
        </View>
        <View className="w-full  absolute bottom-4 left-5 ">
          <View className="mb-4">
            <MessageInput user={loggedUser} />
          </View>

          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.principalColor}
            className="border-2 w-full  rounded-xl flex justify-center items-center p-2"
          >
            <Text className="text-gray-50 font-bold text-lg">
              Finalizar chat
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  fondo: {
    backgroundColor: "#eae0f4",
  },
  principalColor: {
    backgroundColor: "#3d2851",
  },
  chatView: {
    position: "absolute",
    top: "6%",
    left: "6%",
    width: "87%",
    height: "90%",
  },
});
