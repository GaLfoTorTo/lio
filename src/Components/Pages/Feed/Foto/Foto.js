import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useState } from 'react';
import { View, Image, Text, TouchableOpacity, FlatList, ScrollView} from 'react-native';
import estilo from './estilo'

const Foto = ({navigation, route}) => {

    const dados = route.params.item;
    const dadosUsuario = {
        nomeUsuario: dados.owner.firstName,
        emailUsuario: dados.owner.email,
        fotoUsuario: dados.owner.picture, 
        idUsuario: dados.owner.id,
    }

    return (
        <ScrollView style={estilo.scroll}>
            <View style={estilo.container}>
                <Image
                    source={{ uri: dados.image }}
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
                                source={{ uri: dados.owner.picture }}
                                style={estilo.imgPerfil}
                            />
                        </LinearGradient>
                    </TouchableOpacity>
                    <Text style={estilo.userName}>@{dados.owner.firstName + dados.owner.lastName}</Text>
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
                <Text style={estilo.texto}>"{dados.text}"</Text>
                <View>
                    <FlatList
                        data={dados.tags}
                        numColumns={3}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) => {
                            return (
                                <LinearGradient
                                    colors={['rgb(0, 220, 130)', 'rgb(0, 180, 180)']}
                                    start={{ x: 0.7, y: 0 }}
                                    style={estilo.borderTag}
                                >
                                    <View style={estilo.tags}>
                                        <Text style={estilo.textTag}>#{item}</Text>
                                    </View>
                                </LinearGradient>
                            )
                        }}
                    />
                </View>
            </View>
        </ScrollView>

    )
}

export default Foto;