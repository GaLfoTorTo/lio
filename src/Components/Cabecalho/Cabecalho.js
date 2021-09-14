import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import baseUrl from '../../api/baseUrl';
import estilo from './estilo';

const Cabecalho = ({navigation, user_name, foto, legenda, dadosUsuario }) => {
    return(
        <View>
            <TouchableOpacity
                onPress={() => navigation.navigate('Perfil', { dadosUsuario })}
                style={estilo.container}
            >
                <Image
                    source={{ uri: baseUrl + foto }}
                    style={estilo.userImagem}
                />
                <View style={estilo.nameLegenda}>
                    <Text style={estilo.userName}>{user_name}</Text>
                </View>
            </TouchableOpacity>
            <View style={{alignItems: 'center', marginLeft: 7}}>
                <Text numberOfLines={2} style={estilo.legenda}>{legenda}</Text>
            </View>
        </View>     
        
    )
}

export default Cabecalho;