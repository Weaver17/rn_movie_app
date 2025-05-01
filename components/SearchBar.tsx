import { View, Image, TextInput } from "react-native";
import React from "react";
import { icons } from "@/constants/icons";

type SearchBarProps = {
  placeholder: string;
  onPress: () => void;
};

const SearchBar = ({ placeholder, onPress }: SearchBarProps) => {
  return (
    <View className="flex-row items-center bg-dark-200 rounded-full px-5 py-4">
      <Image
        source={icons.search}
        className="size-5"
        resizeMode="contain"
        tintColor="#ab72e8"
      />
      <TextInput
        onPress={onPress}
        placeholder={placeholder}
        value=""
        onChangeText={() => {}}
        placeholderTextColor="#ab72e8"
        className="flex-1 ml-2 text-white"
      />
    </View>
  );
};

export default SearchBar;
