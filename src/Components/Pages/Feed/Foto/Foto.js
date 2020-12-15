import React, { useEffect, useState } from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import feedUsuario from '../../api/feedUsuario';
import Usuario from '../../api/Usuario';
import estilo from './estilo'

const Foto = ({navigation, route}) => {

    const posts = route.params.posts;
    console.log(posts)

    const [post, setPost] = useState('');
    const [usuario, setUsuario] = useState('');
    useEffect(()=>{
        feedUsuario(setPost, posts.idUsuario)
        Usuario(setUsuario, posts.idUsuario)
    },[])

    return (
        <View style={estilo.container}>
            <View style={estilo.cardFoto}>
                <Image
                    source={{ uri: post.image }}
                    style={estilo.imagem}
                />
            </View>
            
            <Text style={estilo.texto}>{post.text}</Text>
        </View>
    )
}

export default Foto;