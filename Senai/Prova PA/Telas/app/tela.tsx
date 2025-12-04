import { Image } from 'expo-image';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Link, router } from 'expo-router';
import React, { useEffect, useState } from 'react';

export default function Tela() {
  return (
    <View style={[styles.alinhamento]}>
      <View>
        <TouchableOpacity onPress={() => router.navigate('/')}>
          <Image
          source={require('../assets/images/diurno.png')}
          style={[styles.img, {margin: 10}]}
          />
        </TouchableOpacity>
        <Image
          source={require('../assets/images/playlist.png')}
          style={[styles.playlist, {marginTop: 50}]}
          />
          <Image
          source={require('../assets/images/rodeo.jpg')}
          style={[styles.ye, {marginTop: 50}]}
          />
          <Text style={[styles.title, {marginTop: 15}]}>01:00:00</Text>
          <Image
          source={require('../assets/images/music.png')}
          style={[styles.imagem, {marginTop: 60}]}
          />
          <Image
          source={require('../assets/images/gato.png')}
          style={[styles.gato, {margin: 30}]}
          />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  alinhamento:{
    height: '100%',
    width: '100%', 
    backgroundColor: '#8c644a',
    justifyContent: 'space-between',
  },
  img:{
    width: 40,
    height: 40,
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },
  ye:{
    width: 250,
    height: 250,
    alignSelf: 'center',
    borderRadius: 10,
  },
  title:{
    textAlign: 'center',
    color: 'black',
    fontFamily: 'Preto 900',
    fontWeight: 'bold',
    fontSize: 40,    
  },
  imagem:{
    width: 300,
    height: 100,
    alignSelf: 'center',
  },
  gato:{
    alignSelf: 'flex-start',
    width: 100,
    height: 150,
  },
  playlist:{
    width: 350,
    height: 60,
    alignSelf: 'center',
  }
  
});
