import React, { useState } from "react";
import { View, TextInput } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const SearchBar = ({ onChangeText }) => {
  const [searchText, setSearchText] = useState("");

  const handleOnChangeText = (text) => {
    setSearchText(text);
  };

  return (
    <View className="bg-[#EAE0F4] flex flex-row rounded-full items-center justify-start py-3 px-4 shadow-md shadow-black w-11/12 mx-auto">
      <Icon name="search" size={18} color="#3D2851" className="mx-2" />
      <TextInput
        className="text-base"
        placeholder="Search"
        value={searchText}
        onChangeText={handleOnChangeText}
        autoCapitalize="none"
        autoCorrect={false}
        clearButtonMode="while-editing"
      />
    </View>
  );
};

export default SearchBar;
