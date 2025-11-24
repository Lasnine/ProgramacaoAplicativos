import { Platform, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import { useState } from 'react'
import { router } from 'expo-router';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from '@/firebaseConfig';
import Swal from 'sweetalert2'

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
      router.navigate('/home')
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
          <View style={styles.square}></View>
          <View style={styles.margem}>

            <Text style={[styles.Color,  { marginTop: 150 }]}>LOGIN</Text>

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
          </View>
          <Image
          source={require('../assets/images/depay.png')}
          style={[styles.img, {marginTop:20}]}
          />
          <View style={styles.square2}></View>
        </View>
    </>
  );
}

const styles = StyleSheet.create({
  img:{
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    height: 430,
    width: 320,
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
  create: {
    color: 'black',
    fontSize: 12,
    fontWeight: 'bold',
  },
  square:{
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '2%',
    backgroundColor: 'black',
  },
  square2:{
    position: 'absolute',
    bottom: 0,
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