import { router } from 'expo-router';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Swal from 'sweetalert2';
import { app } from '../firebaseConfig';

export default function Cadastro() {
  const auth = getAuth(app);
  const sisign = async() => {
    if(senha.length < 6)
    {
      return Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'A senha deve conter no minimo 6 caracteres'
      })
    }
    if(senha != confirmarSenha){
      return Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'As senhas não estão iguais'
      })
    }
    try{
      await createUserWithEmailAndPassword(auth, email, senha);
      limparCampos()
      Swal.fire({
        icon: 'success',
        title: 'Sucesso!',
        text: 'Cadastro realizado com sucesso!'
      })
      router.navigate('/login')
    }
    catch(e){
      return Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Email já esta registrado'
      })
    }
  }

  function limparCampos() {
    setNome('');
    setEmail('');
    setSenha('');
    setConfirmarSenha('');
  }
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const senhasIguais = senha !== '' && senha === confirmarSenha;

  useEffect(() =>{
    console.log(nome, email, senha, confirmarSenha)
  }), [nome, email, senha, confirmarSenha]

  return (
    <View style={styles.alinhamento}>
      <View style={styles.margem}>
        <Text style={[styles.Color, { marginTop: 150 }]}>CADASTRO</Text>
        <TextInput style={[styles.input, { marginTop: 15 }]} onChangeText={(value) => setNome(value)} placeholder="Nome" />
        <TextInput style={[styles.input, { marginTop: 15 }]} onChangeText={(value) => setEmail(value)} placeholder="Email" />

        <TextInput
          style={[
            styles.input,
            { marginTop: 15 },
            senha.length > 0 &&
              (senhasIguais ? styles.inputOk : styles.inputErro),
          ]}
          placeholder="Senha"
          secureTextEntry
          value={senha}
          onChangeText={(value) => setSenha(value)}
        />

        <TextInput
          style={[
            styles.input,
            { marginTop: 15 },
            confirmarSenha.length > 0 &&
              (senhasIguais ? styles.inputOk : styles.inputErro),
          ]}
          placeholder="Confirmar senha"
          secureTextEntry
          value={confirmarSenha}
          onChangeText={(value) => setConfirmarSenha(value)}
        />

        <TouchableOpacity
          style={[
            styles.button,
            { marginTop: 15 },
            !senhasIguais && styles.buttonOk,
          ]}
          onPress={() => sisign()}
          disabled={!senhasIguais}>

          <Text style={[styles.text, { marginTop: 10 }]}>SALVAR</Text>
        </TouchableOpacity>

        <View style={[styles.centro, {marginTop: 10}]}>
          <Text style={styles.conta}>Already have an acount?{" "}</Text>
          <TouchableOpacity onPress={() => router.navigate('/login')}>
            <Text style = {styles.login}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.center, {marginTop: 150}]}>
          <Image
          source={require('../assets/images/snoopy.jpg')}
          style={[styles.img, {margin: 0}]}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  img:{
    position: 'absolute',
    bottom:0,
    width: 150,
    height: 150,
    alignSelf: 'center',
  },
  center:{
    alignSelf: 'center',
    textAlign: 'center',
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
