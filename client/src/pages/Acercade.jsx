import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";

const Acercade = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>
          Acerca de Cambialo! La aplicación ideal para intercambiar objetos y
          encontrar nuevas oportunidades.
        </Text>
        <Text style={styles.description}>
          Con Trueque, podrás publicar tus objetos y buscar lo que necesitas de
          manera fácil y sencilla. Además, nuestra plataforma cuenta con un
          sistema de calificaciones y reseñas para que puedas confiar en los
          usuarios con los que realices intercambios. También podrás consultar
          tu historial de intercambios para llevar un control de tus
          transacciones. ¡No más objetos en desuso o acumulando polvo en casa!
          Con Trueque, podrás darles una segunda oportunidad y obtener nuevos
          objetos que necesites. Regístrate ahora y únete a nuestra comunidad de
          intercambio de objetos. ¡Trueque, la plataforma que conecta a personas
          con objetos!
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EAE0F4",
    padding: 20,
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: "#372D40",
  },
});

export default Acercade;
