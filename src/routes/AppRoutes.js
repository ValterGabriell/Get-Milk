import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import LoginScreen from '../screens/Login/index';
const Stack = createNativeStackNavigator()


const AppRoutes = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
             <Stack.Screen name='Login_Screen' component={LoginScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppRoutes;