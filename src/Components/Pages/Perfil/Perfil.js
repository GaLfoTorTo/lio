import React, { useEffect, useState } from 'react';
import {View, ScrollView, FlatList, Image, TouchableOpacity} from 'react-native';
import Usuario from '../api/Usuario'
import feedUsuario from '../api/feedUsuario'
import estilo from './estilo';
import CardUsuario from './CardUsuario/CardUsuario';

const Perfil = ({navigation, route}) => {
    
    const dadosUsuario = route.params.dadosUsuario;

    const [post, setPosts] = useState('');
    const [usuarios, setUsuarios] = useState('');

    useEffect(() =>{
        Usuario(setUsuarios, dadosUsuario.idUsuario);
        navigation.setOptions({title: dadosUsuario.nomeUsuario})
        feedUsuario(setPosts, dadosUsuario.idUsuario);
    }, [])
    return(
        <ScrollView style={estilo.Scrool}>
            <View>
                <CardUsuario 
                    dadosUsuario={usuarios}
                />
                <FlatList 
                    data={post}
                    numColumns={3}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item}) =>(
                        <View style={estilo.posts}>
                            <TouchableOpacity>
                                <Image
                                    source={{ uri: item.image }}
                                    style={estilo.imagens}
                                />
                            </TouchableOpacity>
                        </View>
                    )}
                />
                
            </View>
        </ScrollView>
    )
}

export default Perfil;