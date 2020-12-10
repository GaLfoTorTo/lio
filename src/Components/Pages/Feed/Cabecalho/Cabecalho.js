import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import estilo from './estilo';

const Cabecalho = ({navigation, nomeUsuario, emailUsuario, fotoUsuario, idUsuario, }) => {
    const dadosUsuario = {
        nomeUsuario,
        emailUsuario,
        fotoUsuario, 
        idUsuario 
    }
    return(
        <TouchableOpacity
            onPress={() => navigation.navigate('Perfil', {dadosUsuario})}
            style={estilo.container}
        >
            <View>
                <Image 
                    source={{uri: fotoUsuario}}
                    style={estilo.userImagem}
                />
                <Text style={estilo.userName}>@{nomeUsuario}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Cabecalho;