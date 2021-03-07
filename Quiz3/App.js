import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import 'react-native-gesture-handler';
import Login from './src/Login';
import Home from './src/Home';

const Stack = createStackNavigator();

export default function App() {
    return (
       <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" >
          <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
          <Stack.Screen name='Home' component={Home} options={{ headerTitle: 'Daftar Barang' }} />
        </Stack.Navigator>
      </NavigationContainer>
    )
}
