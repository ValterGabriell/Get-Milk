import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import LoginScreen from "../screens/Login/index";
import FeedScreen from "../screens/Feed/index";

const Stack = createNativeStackNavigator();

const AppRoutes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login_Screen" component={FeedScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRoutes;
