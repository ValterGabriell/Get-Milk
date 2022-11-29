import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView } from "react-native";
import { MultipleSelectList } from "react-native-dropdown-select-list";

const [selected, setSelected] = useState("");
const [list, setList] = useState([results]);

useEffect(() => {
  if (selected === "") {
    setList(results);
  } else {
    setList(
      results.filter((item) => {
        if (selected === "") {
          return false;
        } else {
          return true;
        }
      })
    );
  }
}, [selected]);

const Selecter = () => {
  return (
    <View>
      <MultipleSelectList
        setSelected={(item) => setSelected(item)}
        data={list}
        save={data.id}
        onSelect={() => selected}
        label="Categories"
        placeholder="Filtrar meses"
      />
    </View>
  );
};

export default Selecter;
