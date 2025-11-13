import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { app } from '../firebaseConfig';

export default function Cadastro() {
  const auth = getAuth(app);
  const sisign = () => {
    if (senha === confirmarSenha){
      createUserWithEmailAndPassword(auth, email, senha)
      limparCampos();
    }
    else{
      return Alert.alert('Erro');
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
    console.log(email, senha, confirmarSenha)
  }), [email, senha, confirmarSenha]

  return (
    <View style={styles.alinhamento}>
      <View style={styles.square}></View>
      <View style={styles.margem}>
        <Text style={[styles.Color, { marginTop: 60 }]}>CADASTRO</Text>

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
            !senhasIguais && styles.buttonDisabled,
          ]}
          onPress={() => sisign()}
          disabled={!senhasIguais}>

          <Text style={[styles.text, { marginTop: 10 }]}>SALVAR</Text>
        </TouchableOpacity>

        <View style={[styles.centro, {marginTop: 10}]}>
          <Text style={styles.conta}>Already have an acount?{" "}</Text>
          <TouchableOpacity onPress={() => {}}>
            <Text style = {styles.login}>Login</Text>
          </TouchableOpacity>
        </View>

      </View>

      <View style={styles.square2}></View>
    </View>
  );
}

const styles = StyleSheet.create({
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
  square: {
    width: '100%',
    height: '2%',
    backgroundColor: 'black',
  },
  square2: {
    width: '100%',
    height: '2%',
    backgroundColor: 'black',
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
    justifyContent: 'space-between',
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
  buttonDisabled: {
    backgroundColor: '#B0B0B0',
    opacity: 0.6,
  },
});