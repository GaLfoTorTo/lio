import React, { useEffect, useState } from 'react';
import {View, ScrollView, FlatList, TouchableOpacity, Image} from 'react-native';
import baseUrl from '../../api/baseUrl';
import DadosFeed from '../../api/DadosFeed'
import Cabecalho from '../../Components/Cabecalho/Cabecalho';
import { getUsuario } from '../../Storage/Storage';
import estilo from './estilo'

const Feed = ({navigation}) => {

    const [usuario, setUsuario] = useState('');
    const [token, setToken] = useState('');
    const [posts, setPosts ] = useState('');

    const aleatoria = () => {
        let index = Math.floor(Math.random()* 2);
        return index
    }

    const resultado = () => { return aleatoria() == 0 ? estilo.imagem1 : estilo.imagem2}
    
    useEffect(() =>{
        DadosFeed(setPosts)
    }, [])

    useEffect(() => {
        const data = async () =>{
            const data = await getUsuario()
            setUsuario(data.usuario)
            setToken(data.token)
        }
        data()
    }, []);

    return(
        <ScrollView 
            style={estilo.container}
        >
                <FlatList
                    data={posts}
                    numColumns={2}
                    keyExtractor={(item,index) => index.toString()}
                    renderItem={({item, index}) => {
                        
                        let est = index % 2 ? estilo.imagem1 : estilo.imagem2
                        return (
                            <View style={estilo.subContainer}>
                                <View>
                                    <TouchableOpacity 
                                        onPress={() => navigation.navigate('Foto', {item})}
                                    >
                                        <Image
                                            source={{ uri: baseUrl + item.post }}
                                            style={resultado()}
                                        />
                                    </TouchableOpacity>
                                    <Cabecalho
                                        navigation={navigation}
                                        user_name={item.usuario.user_name}
                                        foto={item.usuario.foto}
                                        legenda={item.legenda}
                                        dadosUsuario={item.usuario}
                                    />
                                </View>
                            </View>
                        )
                    }}   
                />
        </ScrollView>
    )
}

export default Feed;