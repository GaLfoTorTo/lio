import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import estilo from './estilo';

const Cabecalho = ({navigation, nomeUsuario, emailUsuario, fotoUsuario, idUsuario, legenda }) => {
    const dadosUsuario = {
        nomeUsuario,
        emailUsuario,
        fotoUsuario, 
        idUsuario,
        legenda 
    }
    return(
        <TouchableOpacity
            onPress={() => navigation.navigate('Perfil', {dadosUsuario})}
            style={estilo.container}
        >
                <Image  
                    source={{uri: fotoUsuario}}
                    style={estilo.userImagem}
                />
                <View style={estilo.nameLegenda}>
                    <Text style={estilo.userName}>@{nomeUsuario}</Text>
                    <Text
                        numberOfLines={2} 
                        style={estilo.legenda}>{legenda}</Text>
                </View>
        </TouchableOpacity>
    )
}

export default Cabecalho;