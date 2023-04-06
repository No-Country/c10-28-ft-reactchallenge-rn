import { useState } from 'react';
import { View, TouchableOpacity, Text, Switch } from 'react-native';
import {filterVentas} from '../redux/action';
import {useDispatch} from 'react-redux';
import { Picker } from '@react-native-picker/picker';


const Filtros = () => {
    const dispatch = useDispatch()
  const [mostrarFiltros, setMostrarFiltros] = useState(false);
  const [selectedValue, setSelectedValue] = useState('todos');

  const [filtro,setFiltro] = useState({
    venta: false,
    trueque: false,
    categoria: '',
    prodictos: '',
    servicos: '',


  })

  const category = [
    {title: 'juguetes'},
    {title: 'herramientas'},
    {title: 'informatica'},
    {title: 'electrodomesticos'},
    {title: 'cuidado personal'},
    {title: 'deportes'},
    {title: 'rodados'},
    {title: 'hogar y construccion'},
    {title: 'indumentaria'},
    
  ]

  const applyFilters = () =>{
    filtro.venta ? dispatch(filterVentas(filtro.venta)) : null
  }

  const handleMostrarFiltros = () => {
    setMostrarFiltros(!mostrarFiltros);
  }

  return (
    <View className="items-center  " >  
      <TouchableOpacity onPress={handleMostrarFiltros}>
        <Text className="text-white">Mostrar filtros</Text>
      </TouchableOpacity>

      {mostrarFiltros && (
        // Aquí va el contenido de los filtros
        <View>
            <View className="flex-row items-center w-2/4 justify-around " >

          <Text className="text-white">Venta</Text>
          <Switch value={filtro.venta} onValueChange={(value) => setFiltro({ ...filtro, venta: value })} />

            </View>
            <View className="flex-row items-center w-2/4 justify-around " >
          <Text className="text-white" >trueque</Text>
          <Switch value={filtro.trueque} onValueChange={(value) => setFiltro({ ...filtro, trueque: value })} />
          </View>

          <Text>Selecciona una categoría:</Text>
      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        {
            category.map(c => (
            <Picker.Item key={c.title} label={c.title} value={c.title} />
            ))
        }
      </Picker>
          <TouchableOpacity  onPress={() => applyFilters()} className=" justify-center items-center "  >
            <Text className=" text-white font-black  justify-center items-center " >
                Aplicar
                </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

export default Filtros;
