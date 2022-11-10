import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import LoginScreen from '../screens/Login/index';
import HodometroScreen from '../screens/Hodometro/index';
import FeedScreen from '../screens/Feed/index'
import FinalizarScreen from '../screens/Finalizar/index'



const Stack = createNativeStackNavigator();

const AppRoutes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login_Screen" component={LoginScreen} />
        <Stack.Screen name='Hodometro_Screen' component={HodometroScreen} />
        <Stack.Screen name='Feed_Screen' component={FinalizarScreen} />
        <Stack.Screen name='Finalizar_Screen' component={FinalizarScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRoutes;
