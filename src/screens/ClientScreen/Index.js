import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  FlatList,
} from "react-native";
import { MultipleSelectList } from "react-native-dropdown-select-list";
import Calendar from "../Feed/Data";
import ListItem from "./Component/ListComponent";
import results from "../../dto/ApiFake";
import { StatusBar } from "expo-status-bar";


const DATA = ["Janeiro", "fevereiro", "marco", "abril","maio", "junho", "julho", "agosto","setembro", "outubro", "novembro", "dezembro"]


const ClientScreen = () => {
  const [selected, setSelected] = useState("");
  const [list, setList] = useState(results);

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

  return (
    <>
      <SafeAreaView style={{ backgroundColor: "#F1F1F1", height: "100%" }}>
        <View style={styles.header}>
          <View style={styles.innerHeader}>
            <Text style={styles.txtCollect}>Olá Vinci</Text>
            <Text style={styles.txtDay}>{weekFormat}</Text>
          </View>
          <View style={styles.calendar}>
            <Calendar></Calendar>
          </View>
        </View>


        <SafeAreaView style={{flex:1}}>
          <View>
            <MultipleSelectList
              data={DATA}
              setSelected={(item) => setSelected(item)}
              saveV
              search={false}
              onSelect={() => selected}
              label="Clique para confirmar"
              placeholder="Filtrar meses"
            />
          </View>

          <FlatList
            data={list}
            renderItem={({ item }) => <ListItem data={item} />}
            keyExtractor={(item) => item.id}
          />

          <StatusBar style="light" />
        </SafeAreaView>
        <View style={styles.insideMiddle}></View>

      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#F1F1F1",
    flexDirection: "row",
    justifyContent: "space-between",
    height: "15%",
    marginTop: 60,
  },
  innerHeader: {
    marginLeft: 16,
    marginTop: 8,
  },

  calendar: {
    backgroundColor: "#2C7BBF",
    height: "90%",
    width: "27%",
    justifyContent: "center",
    align: "center",
    marginLeft: 15,
    marginRight: 15,
    marginTop: -10,
    borderRadius: 30,
  },
  txtCollect: {
    color: "black",
    fontSize: 18,
  },
  txtCalendar: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
  },
  txtDay: {
    color: "black",
    fontSize: 24,
  },
  insideMiddle: {
    flexDirection: "row",
    backgroundColor: "#CCC",
    marginLeft: "8%",
    marginRight: "8%",
    marginTop: "16%",
    borderRadius: 8,
  },
  middle: {
    backgroundColor: "#FFF",
    borderTopRightRadius: 32,
    borderTopLeftRadius: 32,
    height: "100%",
  },
  txtForm: {
    marginLeft: "4%",
    marginTop: "4%",
    marginBottom: "2%",
  },
});

const data = new Date();
const Dayweek = [
  "Domingo",
  "Seunda-Feira",
  "Terça-Feira",
  "Quarta-Feira",
  "Quinta-Feira",
  "Sexta-Feira",
  "Sábado",
];

const weekDay = String(data.getDay());
const weekFormat = Dayweek[data.getDay()];

export default ClientScreen;
