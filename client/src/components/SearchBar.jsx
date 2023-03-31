import React, { useRef, useState } from "react";
import { TextInput, Pressable, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import {useDispatch } from "react-redux";
import {searchBar} from "../redux/action";

const SearchBar = ({ onChangeText }) => {
  
  const [searchText, setSearchText] = useState("");
  const searchInputRef = useRef(null);
  const dispatch = useDispatch()
  const handleOnChangeText = (text) => {
    setSearchText(text);
  };

  const handleContainerPress = () => {
    searchInputRef.current.focus();
  };

  const search = () => {
    dispatch(searchBar(searchText))
    setSearchText("")
  }

  return (
    <Pressable
      className="bg-[#EAE0F4] flex flex-row rounded-full items-center justify-between py-3 px-4 shadow-md shadow-black w-11/12 mx-auto"
      onPress={handleContainerPress}
    >
      <Icon name="search" size={18} color="#3D2851" className="mx-2" />
      <TextInput
        className="  -left-28 text-base max-w-[290px]"
        placeholder="Search"
        value={searchText}
        onChangeText={handleOnChangeText}
        autoCapitalize="none"
        autoCorrect={false}
        clearButtonMode="while-editing"
        maxLength={50}
        ref={searchInputRef}
      />
      <TouchableOpacity onPress={() => search()} className="justify-end items-end " >
      <Icon name="arrow-forward" size={18} color="#3D2851" className="mx-2" />
    </TouchableOpacity>
    </Pressable>
  );
};

export default SearchBar;
