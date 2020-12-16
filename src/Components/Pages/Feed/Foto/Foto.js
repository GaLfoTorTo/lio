import React, { useEffect, useState } from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import feedUsuario from '../../api/feedUsuario';
import Usuario from '../../api/Usuario';
import estilo from './estilo'

const Foto = ({navigation, route}) => {

    const posts = route.params.item;
    console.log(posts)

    

    return (
        <View style={estilo.container}>
            <View style={estilo.cardFoto}>
                <Image
                    source={{ uri: posts.image }}
                    style={estilo.imagem}
                />
            </View>
            
            <Text style={estilo.texto}>{posts.text}</Text>
        </View>
    )
}

export default Foto;