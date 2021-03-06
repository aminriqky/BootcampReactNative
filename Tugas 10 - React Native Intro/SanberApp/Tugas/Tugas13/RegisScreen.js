import React from 'react'
import { View, StyleSheet, Image, Text, TextInput, TouchableOpacity } from 'react-native'

export default function RegisScreen({ navigation }) {

    return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
    <Image source={require('./images/logo.png')} style={styles.logo}/>
    <Text style={{top: 80, alignSelf: 'center', fontSize: 20}}>Register</Text>
    <View style={styles.regis}>
        <Text style={styles.text}>Username</Text>
        <TextInput autoCompleteType='username' style={styles.input}/>
        <Text style={styles.text}>Email</Text>
        <TextInput autoCompleteType='email' style={styles.input}/>
        <Text style={styles.text}>Password</Text>
        <TextInput autoCompleteType='password' secureTextEntry={true} style={styles.input}/>
        <Text style={styles.text}>Ulangi Password</Text>
        <TextInput autoCompleteType='password' secureTextEntry={true} style={styles.input}/>
    </View>
    <View style={{top: 125, alignSelf: 'center'}}>
        <TouchableOpacity style={styles.button}>
            <Text style={{color: 'white', alignSelf: 'center', paddingVertical: 8, fontSize: 20}}>Daftar</Text>
        </TouchableOpacity>
        <Text style={{color: '#3EC6FF', fontSize: 18, marginTop: 20, marginBottom: 20, alignSelf: 'center'}}>atau</Text>
        <TouchableOpacity style={styles.button1}
        onPress={() => navigation.navigate('LoginScreen')}>
            <Text style={{color: 'white', alignSelf: 'center', paddingVertical: 8, fontSize: 20}}>Masuk?</Text>
        </TouchableOpacity>
    </View>
    </View>
    )
}

const styles = StyleSheet.create({
    logo: {
        alignSelf: 'center',
        top: 40,
    },
    regis: {
        top: 80
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