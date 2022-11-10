import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";

import Calendar from "../Feed/datepicker";

const LoginScreen = () => {
  return (
    <>
      <SafeAreaView style={{ backgroundColor: "#F1F1F1", height: "100%" }}>
        <View style={styles.header}>
          <View style={styles.innerHeader}>
            <Text style={styles.txtCollect}>Coletas</Text>
            <Text style={styles.txtDay}>Sábado</Text>
          </View>
          <View style={styles.calendar}>
            <Text style={styles.txtCalendar}>09/11</Text>
          </View>
        </View>

        <View style={styles.middle}>
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
    marginTop: -15,
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
  },
  insideMiddle: {
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

export default LoginScreen;
