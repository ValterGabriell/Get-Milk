import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import LoginScreen from "../screens/Login/index";
import HodometroScreen from "../screens/Hodometro/index";
import FeedScreen from "../screens/Feed/index";
import FinalizarScreen from "../screens/Finalizar/index";
import ClientScreen from "../screens/ClientScreen/Index";
const Stack = createNativeStackNavigator();

const AppRoutes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login_Screen"
          options={{ headerShown: false }}
          component={LoginScreen}
        />
        <Stack.Screen
          name="Hodometro_Screen"
          options={{ headerShown: false }}
          component={HodometroScreen}
        />
        <Stack.Screen
          name="Feed_Screen"
          options={{ headerShown: false }}
          component={FeedScreen}
        />
        <Stack.Screen
          name="Finalizar_Screen"
          options={{ headerShown: false }}
          component={FinalizarScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRoutes;
