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
        <View>
            <TouchableOpacity
                onPress={() => navigation.navigate('Perfil', { dadosUsuario })}
                style={estilo.container}
            >
                <Image
                    source={{ uri: fotoUsuario }}
                    style={estilo.userImagem}
                />
                <View style={estilo.nameLegenda}>
                    <Text style={estilo.userName}>@{nomeUsuario}</Text>
                </View>
            </TouchableOpacity>
            <View style={{alignItems: 'center', marginLeft: 7}}>
                <Text numberOfLines={2} style={estilo.legenda}>{legenda}</Text>
            </View>
        </View>     
        
    )
}

export default Cabecalho;