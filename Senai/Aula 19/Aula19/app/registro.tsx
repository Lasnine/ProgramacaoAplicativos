import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
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
            const auth = getAuth()
            const user = auth.currentUser
            if(!user){
                console.log('não logado')
                return;
            }
            if(!musica || !cantor || !album || !link){
                console.log('preencha')
                return;
            }
            const playlist = {
                musica,
                cantor,
                album, 
                link,
                userid: user.uid,
                createdat: serverTimestamp(),
                update: serverTimestamp(),
            };
            await addDoc(collection(db, 'playlist'), playlist);
            console.log('registro realizado com sucesso')
            
            limparCampos();
        } 

        catch (e) {
            console.log('Erro, não foi possíverl realizar o registro ', e)
        }
    }

    return(
        <View style={[styles.alinhamento]}>
            <View style={[styles.square]}></View>
            <View style={[styles.margem]}>
                <Text style={[styles.title, {marginTop: 150}]}>Crie o seu albúm</Text>

                <TextInput style={[styles.input, {marginTop: 20}]} onChangeText={setMusica} placeholder='Música'/>
                <TextInput style={[styles.input, {marginTop: 15}]} onChangeText={setCantor} placeholder='Cantor'/>
                <TextInput style={[styles.input, {marginTop: 15}]} onChangeText={setAlbum} placeholder='Albúm'/>
                <TextInput style={[styles.input, {marginTop: 15}]} onChangeText={setLink} placeholder='Link da Música'/>

                <TouchableOpacity style = {styles.button} onPress={salvar}>
                <Text >Salvar</Text>
                </TouchableOpacity>
            </View>
            <View style={[styles.square2]}></View>
        </View>
    );
};
const styles = StyleSheet.create({
    text:{
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