import { Alert, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import {useState} from 'react'
import React from 'react';

export default function Cadastro() {
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const senhasIguais = senha !== '' && senha === confirmarSenha;
  const handleSalvar = () => {
    if (senhasIguais) {
      Alert.alert('Cadastro concluído.');
    } else {
      Alert.alert('Erro', 'As senhas não são iguais!');
    }
  };

  return (
    <View style={styles.alinhamento}>
      <View style={styles.square}></View>
      <View style={styles.margem}>
        <Text style={[styles.Color, { marginTop: 60 }]}>CADASTRO</Text>

        <TextInput style={[styles.input, { marginTop: 15 }]} placeholder="Nome" />
        <TextInput style={[styles.input, { marginTop: 15 }]} placeholder="Usuário" />
        <TextInput style={[styles.input, { marginTop: 15 }]} placeholder="Email" />

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
          onChangeText={setSenha}
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
          onChangeText={setConfirmarSenha}
        />

        <TouchableOpacity
          style={[
            styles.button,
            { marginTop: 15 },
            !senhasIguais && styles.buttonDisabled,
          ]}
          onPress={handleSalvar}
          disabled={!senhasIguais}>

          <Text style={[styles.text, { marginTop: 10 }]}>SALVAR</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.square2}></View>
    </View>
  );
}

const styles = StyleSheet.create({
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