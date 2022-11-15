import React from "react";
import { ReactNavigation } from "@react-navigation/native";

export function startWork({ navigation }) {
  navigation.navigate("Login_Screen");
}

export function finishWork({ navigation }) {
  navigation.navigate("Feed_Screen");
}
