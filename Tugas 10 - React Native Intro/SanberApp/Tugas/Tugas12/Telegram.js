import React, {useEffect} from 'react'
import { View, Text, Image, StyleSheet, SafeAreaView, FlatList, TouchableOpacity } from 'react-native'
import {Data} from './dummy'

export default function Telegram() {
    useEffect(() => {
        console.log(Data);
    }, [])

    return (
        <View>
            <View>
                <View>
                    <View>
                        <Image/>
                        <Text></Text>
                    </View>
                    <View>
                        <Image/>
                    </View>
                </View>
            </View>
            <View>
                <SafeAreaView>
                    <FlatList
                        data={Data}
                        keyExtractor={(item) => item.id}
                        renderItem={({item}) => {
                            return(
                                <>
                                <TouchableOpacity>
                                    <View>
                                        <Image/>
                                        <View>
                                            <Text></Text>
                                            <Text></Text>
                                        </View>
                                    </View>
                                    <View>
                                        
                                    </View>
                                </TouchableOpacity>
                                </>
                            )
                        }}
                    />
                </SafeAreaView>
            </View>
        </View>
    )
}
