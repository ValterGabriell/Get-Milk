import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,

} from "react-native";
import Calendar from "../Feed/Data";
import ListComponent from "./Componente/ListComponent";
import Coleta from '../../services/Database/Coleta'
import CustomButton from "../../components/CustomBtn";


const FeedScreen = (props) => {





  function reloadCalls() {
    //variavel de auxilio para mudanças na UI de acordo se ainda tem ou nao coletas a serem feitas
    var listAux = []
    Coleta.all().then((list) => {
      list.forEach((el) => {
        if (el.finalizada == true) {
          listAux.push(el)
        }
      })
      if (listAux.length == list.length) {
        setFinishedDay(true)
      }
    })

  }





  return (
    <>
      <SafeAreaView style={{ backgroundColor: "#F1F1F1", height: "100%" }}>
        <View style={styles.header}>
          <View style={styles.innerHeader}>
            <Text style={styles.txtCollect}>Coletas</Text>
            <Text style={styles.txtDay}>{weekFormat}</Text>
          </View>
          <View style={styles.calendar}>
            <Calendar></Calendar>
          </View>
        </View>
        <View style={styles.middle}>
          <ListComponent></ListComponent>
          <View style={styles.insideMiddle}></View>
        </View>
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
    backgroundColor: "#CCC",
    marginLeft: "8%",
    marginRight: "8%",
    marginTop: "16%",
    borderRadius: 8,
  },
  middle: {
    flex: 1,
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

export default FeedScreen;
