import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useState } from 'react';
import { View, Image, Text, TouchableOpacity, FlatList, ScrollView, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Comentarios from '../../../api/Comentarios';
import estilo from './estilo'

const Foto = ({navigation, route}) => {

    const dados = route.params.item;
    
    const dadosUsuario = {
        nomeUsuario: dados.owner.firstName,
        emailUsuario: dados.owner.email,
        fotoUsuario: dados.owner.picture, 
        idUsuario: dados.owner.id,
        idFoto: dados.id,
    }


    const [comentarios, setComentarios] = useState('');

    useEffect(() => {
        Comentarios(setComentarios, dadosUsuario.idFoto)
    }, [])

    return (
        <ScrollView style={estilo.scroll}>
            <View >
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
                <View style={{ alignItems: 'center' }}>
                    <Text style={estilo.texto}>"{dados.text}"</Text>
                </View>
                <View style={{alignItems: 'center'}}>
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
                <View style={estilo.divisoria}>
                    <View style={estilo.cardInput}>
                        <TextInput 
                            placeholder='Escreva um comentario...'
                            placeholderTextColor='rgba(190, 190, 190, 0.6)'
                            style={estilo.InputComentarios}
                        /><TouchableOpacity style={{flex: 0.1}}>
                            <Icon name='send' size={20} style={estilo.icon} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <FlatList 
                        data={comentarios}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({item, index}) => {
                            return(
                                <View>
                                    <View style={estilo.cardComentario}>
                                        <Image 
                                            source={{ uri: item.owner.picture}}
                                            style={estilo.imageComentario}
                                        />
                                        <View>
                                            <Text style={estilo.userNameComentario}>@{item.owner.firstName + item.owner.lastName}</Text>
                                            <Text style={estilo.comentario}>{item.message}</Text>
                                        </View>
                                    </View>
                                    <View style={estilo.divisoriaComentario}></View>

                                </View>
                            )
                        }}
                    />
                </View>
            </View>
        </ScrollView>

    )
}

export default Foto;