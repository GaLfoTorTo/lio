import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useState } from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import estilo from './estilo'

const Foto = ({navigation, route}) => {

    const dadosUsuario = route.params.item;

    return (
        <View style={estilo.container}>
            <Image
                source={{ uri: dadosUsuario.image }}
                style={estilo.imagem}
            />
            <View style={estilo.cabecalho}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Perfil', {dadosUsuario})}
                >
                    <LinearGradient
                        colors={['rgb(0, 220, 130)', 'rgb(0, 180, 180)']}
                        start={{ x: 0.7, y: 0 }}
                        style={estilo.borderImg}
                    >
                        <Image
                            source={{ uri: dadosUsuario.owner.picture }}
                            style={estilo.imgPerfil}
                        />
                    </LinearGradient>
                </TouchableOpacity>
                <Text style={estilo.userName}>@{dadosUsuario.owner.firstName + dadosUsuario.owner.lastName}</Text>
                <TouchableOpacity style={estilo.botaoSeguir}>
                    <LinearGradient
                        colors={['rgb(0, 220, 130)', 'rgb(0, 180, 180)']}
                        start={{ x: 0.7, y: 0 }}
                        style={estilo.seguir}
                    >

                        <Text style={estilo.textoSeguir}>Seguir</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
                <Text style={estilo.texto}>"{dadosUsuario.text}"</Text>

        </View>
    )
}

export default Foto;