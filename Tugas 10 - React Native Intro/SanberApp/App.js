import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './Tugas/Tugas13/LoginScreen'

export default function App() {
  return (
    <LoginScreen/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
