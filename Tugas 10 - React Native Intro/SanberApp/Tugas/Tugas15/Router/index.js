import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import About from '../Pages/AboutScreen'
import Add from '../Pages/AddScreen'
import Project from '../Pages/ProjectScreen'

export default function Router() {
    const Tab = createBottomTabNavigator();
    return (
        <>
          <Tab.Navigator>
            <Tab.Screen name="AboutScreen" component={About}/>
            <Tab.Screen name="AddScreen" component={Add}/>
            <Tab.Screen name="ProjectScreen" component={Project}/>
          </Tab.Navigator>
        </>
    )
}

const styles = StyleSheet.create({})
