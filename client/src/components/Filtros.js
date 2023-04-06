import { useState } from "react";
import { View, TouchableOpacity, Text, Switch } from "react-native";

const Filtros = () => {
  const [mostrarFiltros, setMostrarFiltros] = useState(false);
  const [filtro, setFiltro] = useState({
    venta: false,
    trueque: false,
    categoria: "",
    prodictos: "",
    servicos: "",
  });

  const handleMostrarFiltros = () => {
    setMostrarFiltros(!mostrarFiltros);
  };

  return (
    <View className="items-center  ">
      <TouchableOpacity onPress={handleMostrarFiltros}>
        <Text className="text-white">Mostrar filtros</Text>
      </TouchableOpacity>

      {mostrarFiltros && (
        // Aquí va el contenido de los filtros
        <View>
          <View className="flex-row items-center w-2/4 mt-2 justify-around ">
            <Text className="text-white">Venta</Text>
            <Switch
              value={filtro.venta}
              onValueChange={(value) => setFiltro({ ...filtro, venta: value })}
            />
          </View>
          <View className="flex-row items-center w-2/4 justify-around ">
            <Text className="text-white">trueque</Text>
            <Switch
              value={filtro.trueque}
              onValueChange={(value) =>
                setFiltro({ ...filtro, trueque: value })
              }
            />
          </View>

          {/* <Text className="text-white">Filtro 3</Text> */}

          <TouchableOpacity className=" justify-center items-center   ">
            <Text className=" text-white font-black mt-3 border-2 border-purple-300 p-2 rounded-full  text-center ">
              Aplicar
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Filtros;
