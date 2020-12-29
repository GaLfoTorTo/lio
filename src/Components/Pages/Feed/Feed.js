import React, { useEffect, useState } from 'react';
import {View, ScrollView, FlatList, TouchableOpacity, Image} from 'react-native';
import DadosFeed from '../../api/DadosFeed'
import Cabecalho from './Cabecalho/Cabecalho';
import estilo from './estilo'

const Feed = ({navigation}) => {

    const aleatoria = () => {
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
                                <View>
                                    <TouchableOpacity 
                                        onPress={() => navigation.navigate('Foto', {item})}
                                    >
                                        <Image
                                            source={{ uri: item.image }}
                                            style={resultado()}
                                        />
                                    </TouchableOpacity>
                                    <Cabecalho
                                        nomeUsuario={item.owner.firstName + item.owner.lastName}
                                        fotoUsuario={item.owner.picture}
                                        idUsuario={item.owner.id}
                                        legenda={item.text}
                                        navigation={navigation}
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