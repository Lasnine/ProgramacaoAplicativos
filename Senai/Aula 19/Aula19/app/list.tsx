import { db } from '@/firebaseConfig';
import { router } from 'expo-router';
import { collection, deleteDoc, doc, getDocs, query, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function List(){
    const[playlist, setPlaylist] = useState<any[]>([])
    const[loading, setLoading] = useState(true)

    async function fetchPlaylis() {
        try{
            const q = query(collection(db, 'playlists'));
            const snapshot = await getDocs(q);

            const list = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }));
            setPlaylist(list)
        }
        catch(err){
            console.log('Erro ao buscar playlist: ', err);
        } finally{
            setLoading(false)
        }
    }

    async function updatePlaylist(id: string, data: any) {
        try {
        const ref = doc(db, "playlists", id);
        await updateDoc(ref, data);

        alert("Playlist atualizado!");
        fetchPlaylis();

        } catch (err) {
        console.log("Erro ao atualizar:", err);
        }
    }

    async function deletePlaylists(id: string) {
        try {
        const ref = doc(db, "playlists", id);
        await deleteDoc(ref);

        alert("Playlist deletado!");
        fetchPlaylis();

        } catch (err) {
        console.log("Erro ao deletar:", err);
        }
    }

    useEffect(() => {
        fetchPlaylis();
    }, []);

    if (loading) {
        return (
        <View style={{ padding: 20 }}>
            <Text>Carregando...</Text>
        </View>
        );
    }

    if (playlist.length === 0) {
        return (
        <View style={{ padding: 30 }}>
            <Text>Nenhuma playlist encontrada.</Text>
        </View>
        );
    }

    return(
    <View style={[styles.alinhamento]}>
        <View style={[styles.square]}>
            <View style={[styles.margem]}>
            <Image
            source={require('../assets/images/music.jpg')}
            style={[styles.img, {marginTop:50}]}
            />

            <FlatList
                data={playlist}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={[styles.itens, {marginTop: 20}]}>
                        <Text style={[styles.text]}> {item.musica}</Text>
                        <Text style={{ marginTop: 10,  fontSize: 15 }}><Text style={{fontWeight: 'bold', color: 'black'}}>Cantor: </Text>{item.cantor}</Text>
                        <Text style={{ fontSize: 15 }}><Text style={{fontWeight: 'bold', color: 'black'}}>Album: </Text> {item.album}</Text>
                        <Text style={{ fontSize: 15 }}><Text style={{fontWeight: 'bold', color: 'black'}}>Link: </Text> {item.link}</Text>

                        <View style={[styles.botao, {marginTop: 20}]}>
                            <TouchableOpacity
                                style={[styles.editar, {marginTop: 0}]} onPress={() => updatePlaylist(item.id, { musica: "Atualizado" })}>
                                <Text style={{ color: "#fff", fontWeight: "600" }}>Editar</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={[styles.excluir, {marginTop:0}]} onPress={() => deletePlaylists(item.id)}>
                                <Text style={{ color: "#fff", fontWeight: "600" }}>Excluir</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={[styles.voltar, {marginTop:0}]} onPress={() => router.navigate('/registro')}>
                                <Text style={{ color: "#fff", fontWeight: "600" }}>Voltar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}/>
            </View>
        </View>
        <Image
            source={require('../assets/images/carneiro.jpg')}
            style={[styles.imagem, {marginTop:20}]}
        />
        <View style={[styles.square2]}></View>
    </View>
    );
}
const styles = StyleSheet.create({
    botao:{
        alignSelf: 'center',
        flexDirection: "row", 
        marginTop: 12, 
        gap: 12 
    },
    editar:{
        backgroundColor: "#3498db",
        paddingVertical: 8,
        paddingHorizontal: 14,
        borderRadius: 8,
    },
    voltar:{
        backgroundColor: "#71c261",
        paddingVertical: 8,
        paddingHorizontal: 14,
        borderRadius: 8,
    },
    excluir:{
        backgroundColor: "#e74c3c",
        paddingVertical: 8,
        paddingHorizontal: 14,
        borderRadius: 8,
    },
    itens:{
        backgroundColor: "#fff",
        padding: 16,
        borderRadius: 12,
        marginBottom: 15,
        elevation: 3
    },
    imagem:{
        alignSelf: 'flex-end',
        height: 250,
        width: 160,
        position: 'absolute',
        bottom: 0,
    },
    img:{
        alignSelf: 'center',
        height: 70,
        width: 350,
    },
    text:{
        fontFamily: 'Heather',
        color: 'black',
        fontWeight: 'bold',
        fontSize: 30,
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
})