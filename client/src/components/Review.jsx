import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import Botons from "./Botons";

const Review = () => {
  const [star, setStar] = useState(true);
  const [star2, setStar2] = useState(true);
  const [star3, setStar3] = useState(true);
  const [star4, setStar4] = useState(true);
  const [star5, setStar5] = useState(true);

  const star1f = () => {
    setStar(!star);
  };

  const star2f = () => {
    setStar2(!star2);
    setStar(!star);
  };
  const star3f = () => {
    setStar3(!star3);
    setStar2(!star2);
    setStar(!star);
  };
  const star4f = () => {
    setStar4(!star4);
    setStar3(!star3);
    setStar2(!star2);
    setStar(!star);
  };
  const star5f = () => {
    setStar5(!star5);
    setStar4(!star4);
    setStar3(!star3);
    setStar2(!star2);
    setStar(!star);
  };
  return (
    <View style={{ backgroundColor: "#EAE0F4", height: "100%" }}>
      <Text style={{ fontSize: 16, fontWeight: "bold", padding: 20 }}>
        Reseña:
      </Text>
      <View className="flex flex-row ml-2 ">
        <Botons
          icon={"star"}
          color={star ? "#f1f1f1" : "yellow"}
          size={28}
          onPress={star1f}
        />
        <Botons
          icon={"star"}
          color={star2 ? "#f1f1f1" : "yellow"}
          size={28}
          onPress={star2f}
        />
        <Botons
          icon={"star"}
          color={star3 ? "#f1f1f1" : "yellow"}
          size={28}
          onPress={star3f}
        />
        <Botons
          icon={"star"}
          color={star4 ? "#f1f1f1" : "yellow"}
          size={28}
          onPress={star4f}
        />
        <Botons
          icon={"star"}
          color={star5 ? "#f1f1f1" : "yellow"}
          size={28}
          onPress={star5f}
        />
      </View>
      <TextInput
        multiline={true}
        numberOfLines={4}
        placeholder={"Ingrese su reseña aqui..."}
        style={{
          height: 150,
          textAlignVertical: "top",
          margin: 10,
          paddingLeft: 15,
          paddingTop: 10,
          borderColor: "#000000",
          shadowOpacity: 0.17,
          shadowRadius: 2.54,
          elevation: 3,
        }}
      />
    </View>
  );
};

export default Review;
