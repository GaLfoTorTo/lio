import React, { useEffect, useState } from 'react';
import {View, Text, ScrollView, FlatList, TouchableOpacity, Image} from 'react-native';
import DadosFeed from '../api/DadosFeed'
import Cabecalho from './Cabecalho/Cabecalho';
import estilo from './estilo'

const Feed = ({navigation}) => {
    const aleatoria = (min, max) => {
        min = estilo.imagem1
        max = estilo.imagem2
        let index = Math.floor(Math.random()* 2);
        return index
    }

    const resultado = () => { return aleatoria() == 0 ? estilo.imagem1 : estilo.imagem2}

    const [posts, setPosts ] = useState('');
    
    useEffect(() =>{
        DadosFeed(setPosts)
    }, [])

    return(
        <ScrollView style={estilo.container}>
                <FlatList
                    data={posts}
                    numColumns={2}
                    keyExtractor={(item,index) => index.toString()}
                    renderItem={({item, index}) => {
                        
                        let est = index % 2 ? estilo.imagem1 : estilo.imagem2
                        return (
                            <View style={estilo.subContainer}>
                                <TouchableOpacity >
                                    <Image 
                                        source={{uri: item.image}}
                                        style={resultado()}
                                    />
                                </TouchableOpacity>
                                <Cabecalho
                                    nomeUsuario={item.owner.firstName}
                                    fotoUsuario={item.owner.picture}
                                    idUsuario={item.owner.id}
                                    navigation={navigation}
                                />
                                
                                {/* <TouchableOpacity>
                                    <Image
                                        source={{uri: item.image}}
                                        style={est}
                                    />
                                    <Text style={{ color: 'white' }}>adshgafdshgsdfhfsdhsfdh</Text>
                                </TouchableOpacity> */}
                            </View>
                        )
                    }}   
                />
        </ScrollView>
    )
}

export default Feed;