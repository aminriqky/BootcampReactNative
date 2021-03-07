import React, { useState, useEffect } from 'react';
import { Button, FlatList, View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native'
import axios from 'axios';

export default function RestApi() {
    const [ title, setTitle ] = useState("");
    const [ value, setValue ] = useState("");
    const [ items, setItems ] = useState([]);
    const [ button, setButon ] = useState("Simpan");
    const [ selectedUser, setSelectedUser ] = useState({});

    const submit =()=>{
        const data ={
            value, title
        }
        if (button=="Simpan") {
            axios.post('https://achmadhilmy-sanbercode.my.id/api/v1/news', data)
            .then(res=>{
                console.log('res: ', res);
                setTitle("");
                setValue("");
                GetData();
            }).catch(err=>{
                console.log('error: ', err);
            })
        } else {
            axios.put(`https://achmadhilmy-sanbercode.my.id/api/v1/news/${selectedUser.id}`, data)
            .then(res=>{
                console.log('res: ', res);
                setTitle("");
                setValue("");
                GetData();
                setButon("Simpan");
            }).catch(err=>{
                console.log('error: ', err);
            })
        }
    }

    const onSelectItem = (item) =>{
        console.log(item);
        setSelectedUser(item)
        setTitle(item.title)
        setValue(item.value)
        setButon("Update")
    }

    const GetData=()=>{
        axios.get('https://achmadhilmy-sanbercode.my.id/api/v1/news')
        .then(res=>{
            const data1 = (res.data.data)
            console.log('res: ', data1);
            setItems(data1)
        })
    }

    const onDelete=(item)=>{
        axios.delete(`https://achmadhilmy-sanbercode.my.id/api/v1/news/${item.id}`)
        .then(res=>{
            console.log('res: ', res);
            GetData()
        }).catch(err=>{
            console.log('error: ', err);
        })
    }

    useEffect(() => {
        GetData()
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Tampilkan Api (CRUD) </Text>
            </View>
            <View style={styles.content1}>
                <Text>Post Data</Text>
                <TextInput
                    placeholder="Masukkan judul berita"
                    style={styles.input}
                    value={title}
                    onChangeText={(value)=>setTitle(value)}
                />
                <TextInput
                    placeholder="Masukkan isi berita"
                    style={styles.input}
                    value={value}
                    onChangeText={(value)=>setValue(value)}
                />
            <Button
                title={button}
                onPress={submit}
            />
            </View>
            <View style={styles.content1}>
                <Text>Get Data Berita</Text>
                <FlatList
                    data={items}
                    keyExtractor={(item, index) => `${item.id}-${index}`}
                    renderItem={({item})=>{
                        return(
                            <View>
                                <TouchableOpacity onPress={()=>onDelete(item)}>
                                    <Text style={{color: 'red', alignSelf: 'flex-end'}}>X</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={()=>onSelectItem(item)}style={{borderRadius: 6,backgroundColor:'grey', padding: 5, marginBottom:10}}>
                                    <Text style={{color: 'white'}}>{item.title}</Text>
                                    <Text style={{color: 'white'}}>{item.value}</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    header: {
        paddingTop: 50,
        paddingHorizontal: 16,
        backgroundColor : 'grey',
        alignItems: 'center'
    },
    title: {
        color: 'white',
        fontSize: 20
    },
    content1: {
        paddingHorizontal: 16
    },
    input: {
        borderWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 5,
        borderRadius: 6,
        marginBottom: 10
    },
    contentNews: {
        backgroundColor: 'grey',
        paddingVertical: 10
    }
})