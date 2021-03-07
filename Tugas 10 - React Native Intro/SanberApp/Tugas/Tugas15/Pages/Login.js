import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

export default function Login({navigation}) {
    return (
        <View style={styles.container}>
            <Text>Login</Text>
            <Button title="Menuju Halaman HomeScreen" onPress={() => navigation.navigate('MyDrawer',{
                screen : 'Router', params:{
                    screen: 'AboutScreen'
                }
            })}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})