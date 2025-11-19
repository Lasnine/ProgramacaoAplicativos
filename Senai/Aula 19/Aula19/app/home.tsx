import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';

export default function Home(){

    return(
        <View style={styles.alinhamento}>
            <View style={styles.margem}>
                <Image
                source={require('../assets/images/aaaaa.png')}
                style={[styles.rocky, {marginTop:20}]}
                />
                <View style={[{marginTop: 20}]}></View>
                <Image
                source={require('../assets/images/Logo.png')}
                style={[styles.img, {margin:0}]}
                />
                <Image
                source={require('../assets/images/asap.png')}
                style={[styles.asap, {margin:0}]}
                />
                <View style={[styles.square, {margin: 10}]}>
                    <Image 
                    source={require('../assets/images/violet.jpg')}
                    style={[styles.imagem, {margin: 20}]}
                    />
                </View>
            </View>
            <View>
                <Image
                source={require('../assets/images/ye.png')}
                style={[styles.ye, {marginTop:0}]}
                />
                <View style={styles.margem2}></View>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    rocky:{
        width: 100,
        height: 100,
        alignSelf: 'flex-start',
    },
    asap:{
        width: 150,
        height: 100,
        alignSelf: 'center',
    },
    img:{
        width: 370,
        height: 50,
        alignSelf: 'center',
    },
    ye:{
        width: 460,
        height: 410,
        alignSelf: 'center',
    },
    imagem:{
        width: 300,
        height: 250,
        borderRadius: 15,
        alignSelf: 'center'
    },
    alinhamento:{
        justifyContent: 'space-between',
        height: '100%',
        alignSelf: 'center',
        width: '100%',
    },
    square:{
        alignSelf: 'center',
        width: 350,
        height: 300,
        backgroundColor: 'black',
        borderRadius: 15,
    },
    text:{
        textAlign: 'center',
        color: 'black',
        fontFamily: 'Heather',
        fontWeight: 'bold',
        fontSize: 40,
    },
    margem:{
        width: '100%',
        height: '2%',
        backgroundColor: 'black',
    },
    margem2:{
        width: '100%',
        height: '2%',
        backgroundColor: 'black',
    },
})