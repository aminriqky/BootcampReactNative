import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './Tugas/Tugas13/LoginScreen';
import RegisScreen from './Tugas/Tugas13/RegisScreen';
import AboutScreen from './Tugas/Tugas13/AboutScreen';
import RestApi from './Tugas/Tugas14/RestApi';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="RestApi" component={RestApi}/>
        <Stack.Screen name="LoginScreen" component={LoginScreen}/>
        <Stack.Screen name="RegisScreen" component={RegisScreen}/>
        <Stack.Screen name="AboutScreen" component={AboutScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
