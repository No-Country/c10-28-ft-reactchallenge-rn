import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { AntDesign } from '@expo/vector-icons';

const Contacto = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contactBox}>
        <AntDesign name="mail" size={32} color="#888" />
        <Text style={styles.contactText}>contacto@trueque.com</Text>
      </View>
      <View style={styles.contactBox}>
        <AntDesign name="phone" size={32} color="#888" />
        <Text style={styles.contactText}>+1 555-555-5555</Text>
      </View>
      <View style={styles.contactBox}>
        <AntDesign name="home" size={32} color="#888" />
        <Text style={styles.contactText}>123 Main St, Anytown USA</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EAE0F4",
    padding: 20,
    marginTop:30,
    marginVertical: 20,
    marginHorizontal: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  contactBox: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  contactText: {
    marginLeft: 10,
    fontSize: 18,
    color: "#555",
  },
});

export default Contacto;
