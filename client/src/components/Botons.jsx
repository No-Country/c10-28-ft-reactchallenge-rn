import * as React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Botons = ({
  title,
  onPress,
  icon,
  color,
  bgBotton,
  redondo,
  size,
  flex,
  altura,
  navegar,
}) => {
  const navigation = useNavigation();

  const navega = () => {
    navigation.navigate(navegar);
  };
  return (
    <TouchableOpacity
      onPress={onPress ? onPress : navega}
      style={[
        styles.button,
        {
          backgroundColor: bgBotton,
          borderRadius: redondo,
          flexDirection: flex,
          height: altura,
        },
      ]}
      className="px-2">
      <Entypo name={icon} size={size} color={color ? color : "#f1f1f1"} />
      <Text style={styles.text}> {title} </Text>
    </TouchableOpacity>
  );
};

export default Botons;

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#f1f1f1",
    marginLeft: 10,
  },
});
