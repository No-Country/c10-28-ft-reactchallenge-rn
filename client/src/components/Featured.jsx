import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, Image } from "react-native";
import CardItems from "./CardItems";
import { useDispatch } from "react-redux";
import { getType } from "../redux/action";

export default function Featured({ data, title, query }) {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  function pressHandler(query, title) {
    dispatch(getType(query));
    navigation.navigate("Publicaciones", title);
  }

  return (
    <View className="mb-3">
      <TouchableOpacity onPress={() => pressHandler(query, title)}>
        <Text className="text-base font-bold text-[#111012] mb-2">{title}</Text>
      </TouchableOpacity>
      <View className="flex flex-row flex-wrap gap-2 justify-center">
        {data.map((product) => (
          <View key={product.publicacion_id}>
            <CardItems data={product} />
          </View>
        ))}
      </View>
    </View>
  );
}
