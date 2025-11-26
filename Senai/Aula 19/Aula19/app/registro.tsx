import React, { useEffect, useState } from 'react';
import { router } from 'expo-router';
import { Linking, Alert, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/firebaseConfig';
import { getAuth } from 'firebase/auth';

export default function Registro(){
    const [musica, setMusica] = useState('')
    const [cantor, setCantor] = useState('')
    const [album, setAlbum] = useState('')
    const [link, setLink] = useState('')
    const limparCampos = () => {
        setMusica('');
        setCantor('');
        setAlbum('');
        setLink('');
    };
    const salvar = async () =>{
        try {

            if(!musica || !cantor || !link){
                console.log('preencha todos os campos')
                return;
            }
            const playlist = {
                musica,
                cantor,
                album: album || null, 
                link,
                createdat: serverTimestamp(),
                update: serverTimestamp(),
            };
            await addDoc(collection(db, 'playlists'), playlist);
            console.log('Registro realizado com sucesso')
            limparCampos();
        } 
        catch (e) {
            console.log('Erro, não foi possíverl realizar o registro ', e)
            limparCampos();
        }
    }

    return(
        <View style={[styles.alinhamento]}>
            <View style={[styles.square]}></View>
            <View style={[styles.margem]}>
                <Image
                source={require('../assets/images/playlist.jpg')}
                style={[styles.imagem, {marginTop:50}]}
                />

                <TextInput style={[styles.input, {marginTop: 20}]} onChangeText={setMusica} placeholder='Música'/>
                <TextInput style={[styles.input, {marginTop: 15}]} onChangeText={setCantor} placeholder='Cantor'/>
                <TextInput style={[styles.input, {marginTop: 15}]} onChangeText={setAlbum} placeholder='Albúm'/>
                <TextInput style={[styles.input, {marginTop: 15}]} onChangeText={setLink} placeholder='Link da Música'/>
                
                <View style={{flexDirection: 'row', alignSelf: 'center'}}>
                    <TouchableOpacity style = {[styles.button, {marginTop: 20, marginRight: 10}]} onPress={salvar}>
                        <Text style={[styles.text, {marginTop: 5}]}>Salvar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {[styles.button, {marginTop: 20, marginLeft: 10}]} onPress={() => router.navigate('/list')}>
                        <Text style={[styles.text, {marginTop: 5}]}>Playlist</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity onPress={() => Linking.openURL('https://www.spotify.com/br-pt/free/')}>
                <Image
                    source={require('../assets/images/spotify.png')}
                    style={[styles.img, {marginTop:10}]}
                />
            </TouchableOpacity>
            <View style={[styles.square2]}></View>
        </View>
    );
};
const styles = StyleSheet.create({
    imagem:{
        alignSelf: 'center',
        height: 210,
        width: 350,
    },
    img:{
        alignSelf: 'center',
        height: 200,
        width: 200,
    },
    text:{
        alignSelf: 'center',
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
    },
    button:{
        height: 40,
        width: 100,
        backgroundColor: '#DEDEDE',
        borderRadius: 10,
        alignSelf: 'center',
    },
    alinhamento:{
        alignSelf: 'center',
        height: '100%',
        width: '100%',
    },
    margem:{
        padding: 30,
    },
    title:{
        fontFamily: 'Heather',
        alignSelf: 'center',
        fontSize: 40,
        color: 'black',
        fontWeight: 'bold'
    },
    square:{
        position: 'absolute',
        top: 0,
        height: '2%',
        width: '100%',
        backgroundColor: 'black',
    },
    square2:{
        position: 'absolute',
        bottom: 0,
        height: '2%',
        width: '100%',
        backgroundColor: 'black',
    },
    input:{
        backgroundColor: 'white',
        borderColor: 'black',  
        borderWidth: 1,
        padding: 10, 
        borderRadius: 10,
    },
})