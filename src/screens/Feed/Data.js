import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";

const meses = [
  "Jan",
  "Fev",
  "Mar",
  "Abr",
  "Mai",
  "Jun",
  "Jul",
  "Ago",
  "Set",
  "Out",
  "Nov",
  "Dez",
];

const data = new Date();
const dayMonth = String(data.getDate()).padStart(2, "0");
const dataFormatada = meses[data.getMonth()];

export default () => {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.txtMonth}>{String(dayMonth)}</Text>
        <Text style={styles.txtDay}>{String(dataFormatada)}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  txtMonth: {
    color: "white",
    textAlign: "center",
    fontSize: 24,
  },
  txtDay: {
    color: "white",
    textAlign: "center",
    fontSize: 15,
  },
});
