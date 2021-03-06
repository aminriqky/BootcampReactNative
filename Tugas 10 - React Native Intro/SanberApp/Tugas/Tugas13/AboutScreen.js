import React from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Linking from 'expo-linking';

export default function AboutScreen() {

    return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
    <Text style={{top: 80, alignSelf: 'center', fontSize: 28, fontWeight: 'bold', color: '#003366'}}>Tentang Saya</Text>
    <Image source={require('./images/profil.jpg')} 
    style={{borderRadius: 100, width: 180, height: 180, top: 100, marginLeft: 20, marginRight: 10, backgroundColor: 'lightgrey', alignSelf: 'center'}}/>
    <View style={{top: 125, alignSelf: 'center'}}>
        <Text style={{alignSelf: 'center', fontSize: 20, fontWeight: 'bold', color: '#003366'}}>Muhammad Amin Riqky</Text>
        <Text style={{color: '#3EC6FF', fontSize: 14, marginTop: 10, marginBottom: 20, alignSelf: 'center', fontWeight: 'bold'}}>
            React Native Developer
        </Text>
    </View>
    <TouchableOpacity style={styles.square} onPress={() => Linking.openURL('https://github.com/aminriqky')}>
        <Text style={{margin: 10}}>Portofolio</Text>
        <View style={{ borderBottomColor: 'black', borderBottomWidth: 1 }}/>
        <Ionicons style={{ alignSelf: 'center', paddingTop: 20 }} name="logo-github" size={72} color="#3EC6FF"/>
        <Text style={{alignSelf: 'center', fontWeight: 'bold'}}>aminriqky</Text>
    </TouchableOpacity>
    <View style={{margin: 10}}/>
    <TouchableOpacity style={styles.square} onPress={() => Linking.openURL('https://www.instagram.com/aminriqky')}>
        <Text style={{margin: 10}}>Portofolio</Text>
        <View style={{ borderBottomColor: 'black', borderBottomWidth: 1 }}/>
        <Ionicons style={{ alignSelf: 'center', paddingTop: 20 }} name="logo-instagram" size={72} color="#3EC6FF"/>
        <Text style={{alignSelf: 'center', fontWeight: 'bold'}}>aminriqky</Text>
    </TouchableOpacity>
    </View>
    )
}

const styles = StyleSheet.create({
    logo: {
        alignSelf: 'center',
        top: 40,
    },
    square: {
        top: 130,
        height: 180,
        width: Dimensions.get('screen').width - 40,
        alignSelf: 'center',
        borderRadius: 20,
        backgroundColor: 'lightgrey'
    },
    text: {
        marginTop: 20,
        marginLeft: 50
    },
    input: {
        top: 5, 
        padding: 10, 
        borderColor: '#003366', 
        borderWidth: 2, 
        borderRadius: 2, 
        marginRight: 50, 
        marginLeft: 50, 
        color: 'black'
    },
    button: {
        width: 150, 
        height: 50, 
        borderRadius: 20, 
        backgroundColor: '#003366'
    },
    button1: {
        width: 150, 
        height: 50, 
        borderRadius: 20, 
        backgroundColor: '#3EC6FF'
    }
})