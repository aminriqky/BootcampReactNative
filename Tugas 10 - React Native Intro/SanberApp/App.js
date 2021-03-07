import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Login from './Tugas/Tugas15/Pages/Login';
import Router from './Tugas/Tugas15/Router/index';

const Stack = createStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoginScreen" component={Login}/>
        <Stack.Screen name="MyDrawer" component={Router}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
