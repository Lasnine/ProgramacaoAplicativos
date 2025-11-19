import { Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useState } from 'react'
import { router } from 'expo-router';

export default function Login() {

  return (
    <>  
        <View style={styles.alinhamento}> 
          <View style={styles.square}></View>
          <View style={styles.margem}>
            <Text style={[styles.Color,  { marginTop: 60 }]}>LOGIN</Text>
            <TextInput style={[styles.input,  { marginTop: 15 }]} placeholder='Email'/>
            <TextInput style={[styles.input,  { marginTop: 15 }]} secureTextEntry={true} placeholder='Senha'/>
            <TouchableOpacity onPress={() => router.navigate('/home')} style={[styles.button, { marginTop: 15 }]}>
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
          </View>
          <View style={styles.square2}></View>
        </View>
    </>
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
  create: {
    color: 'black',
    fontSize: 12,
    fontWeight: 'bold',
  },
  square:{
    width: '100%',
    height: '2%',
    backgroundColor: 'black',
  },
  square2:{
    
    width: '100%',
    height: '2%',
    backgroundColor: 'black',
  },
  margem:{
    padding: 30,
  },
  Color:{
    color: 'black',
    fontFamily: 'Heather',
    fontWeight: 'bold',
    fontSize: 50,
    textAlign: 'center',
  },
  alinhamento:{
    justifyContent: 'space-between',
    height: '100%',
    textAlign: 'center',
    alignSelf: 'center',
    width: '100%',
 
  },
  input: {
    backgroundColor: 'white',
    borderColor: 'black',  
    borderWidth: 1,
    padding: 10, 
    borderRadius: 10,
  },
  text:{
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
    alignSelf: 'center',
  },
  button:{
    height: 40,
    width: 100,
    backgroundColor: '#DEDEDE',
    borderRadius: 10,
    alignSelf: 'center',
  },
});