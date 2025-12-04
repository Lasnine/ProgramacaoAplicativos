import { router } from 'expo-router';
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Swal from 'sweetalert2';
import { app } from '../firebaseConfig';

export default function Login() {
  const auth = getAuth(app);
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  function limparCampos() {
    setEmail('');
    setSenha('');
  }
  const sisign = async () => {
    try{
      await signInWithEmailAndPassword(auth, email, senha);
      limparCampos()
      router.navigate('/')
    }
    catch(e){
      return Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Email ou senha inválido'
      })
    }
  }

  return (
    <>  
        <View style={styles.alinhamento}> 
          <View style={styles.margem}>
            <Text style={[styles.Color]}>LOGIN</Text>

            <TextInput style={[styles.input,  { marginTop: 15 }]} onChangeText={setEmail} placeholder='Email'/>
            <TextInput style={[styles.input,  { marginTop: 15 }]} onChangeText={setSenha} secureTextEntry={true} placeholder='Senha'/>

            <TouchableOpacity onPress={sisign} style={[styles.button, { marginTop: 15 }]}>
              <View>
                <Text style={[styles.text, { marginTop: 10 }]}>
                  LOGIN
                </Text>
              </View>
            </TouchableOpacity>

            <View style={[styles.centro, {marginTop: 10}]}>
              <Text style={styles.conta}>Already have an acount?{" "}</Text>
              <TouchableOpacity onPress={() => router.navigate('/')}>
                <Text style = {styles.create}>Sing up</Text>
              </TouchableOpacity>
            </View>
            <Image
            source={require('../assets/images/flor.jpg')}
            style={[styles.img, {margin: 0}]}
            />
          </View>
        </View>
    </>
  );
}

const styles = StyleSheet.create({
    img:{
        width: 200,
        height: 150,
        alignSelf: 'center',
    },
    create: {
        color: 'black',
        fontSize: 12,
        fontWeight: 'bold',
    },
    centro:{
        flexDirection: 'row',
        alignSelf: 'center',
        textAlign: 'center',
    },
    conta: {
        color: 'black',
        fontSize: 12,
    },
    login: {
        color: 'black',
        fontSize: 12,
        fontWeight: 'bold',
    },
    margem: {
        padding: 30,
    },
    Color: {
        fontFamily: 'Heather',
        color: 'black',
        fontWeight: 'bold',
        fontSize: 50,
        textAlign: 'center',
    },
    alinhamento: {
        justifyContent: 'center',
        height: '100%',
        width: '100%',
    },
    input: {
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
    },
    inputOk: {
        borderColor: 'green',
        borderWidth: 2,
    },
    inputErro: {
        borderColor: 'red',
        borderWidth: 2,
    },
    text: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'center',
    },
    button: {
        height: 40,
        width: 100,
        backgroundColor: '#DEDEDE',
        borderRadius: 10,
        alignSelf: 'center',
    },
    buttonOk: {
        backgroundColor: '#B0B0B0',
        opacity: 0.6,
  },
});
