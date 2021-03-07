import React, { useState } from "react";
import { Image, StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function Login({ navigation }) {
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
   const [isError, setIsError] = useState(false);

  const submit = () => {
    //tuliskan coding disini 
    //? #Soal No. 1 (15poin) -- LoginScreen.js -- Function LoginScreen
    //? Buatlah sebuah fungsi untuk berpindah halaman hanya jika password yang di input bernilai '12345678' 
    //? dan selain itu, maka akan mengubah state isError menjadi true dan tidak dapat berpindah halaman.

    //? #SoalTambahan (+ 5 poin): kirimkan params dengan key => userName dan value => this.state.userName ke halaman Home, 
    //? dan tampilkan userName tersebut di halaman Home setelah teks "Hai," -->
    //end coding

    if (username != "" && password == "12345678") {
      navigation.navigate('Home', { username: username });
    } else {
      setIsError(true);
      setUsername("");
      setPassword("");
    }
  };
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>== Quiz 3 ==</Text>
      <Image
        style={{ height: 150, width: 150 }}
        source={require("../assets/logo.jpg")}
      />
      <View>
        <TextInput
          style={{
            borderWidth: 1,
            paddingVertical: 10,
            borderRadius: 5,
            width: 300,
            marginBottom: 10,
            paddingHorizontal: 10,
          }}
          placeholder="Masukan Username"
          value={username}
          onChangeText={(value)=>setUsername(value)}
        />
        <TextInput
          style={{
            borderWidth: 1,
            paddingVertical: 10,
            borderRadius: 5,
            width: 300,
            marginBottom: 10,
            paddingHorizontal: 10,
          }}
          placeholder="Masukan Password"
          value={password}
          onChangeText={(value)=>setPassword(value)}
          secureTextEntry={true}
        />
        <Button onPress={submit} title="Login" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});
