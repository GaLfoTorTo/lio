import React from 'react';
import {View, Text, Image, ImageBackground, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';
import moment from 'moment';
import estilo from './estilo';
import baseUrl from '../../api/baseUrl';

const CardUsuario = ({navigation, dadosUsuario}) => {
    return(
        <View >
            <View >
                <ImageBackground 
                    source={{uri: baseUrl + dadosUsuario.foto}}
                    style={estilo.capa}>
                    <Image
                        source={{ uri: baseUrl + dadosUsuario.foto }}
                        style={estilo.imgPerfil}
                    />
                </ImageBackground>
            </View>
            <View style={estilo.info}>
                <View style={estilo.headerInfo}>
                    <View >
                        <Text style={estilo.nome}>{dadosUsuario.nome}</Text>
                        <Text style={estilo.userName}>{dadosUsuario.user_name}</Text>
                    </View>
                    <View style={estilo.cardSeguir}>
                        <TouchableOpacity 
                            style={estilo.iconChat}
                            onPress={() => navigation.navigate('Chat', {dadosUsuario})}
                        >
                            <Icon name='comments' size={30} style={estilo.iconTalk} />
                        </TouchableOpacity>
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
                </View>
                <View style={estilo.icon}>
                    <Text style={estilo.textoBios}>Mensagem da bios vai aqui</Text>
                </View>
                <View style={estilo.icon}>
                    <Icon name='map-marker-alt' size={20} color='grey' />
                    <Text style={estilo.texto}>{dadosUsuario.cidade}-{dadosUsuario.uf}</Text>
                </View>
                <View style={estilo.icon}>
                    <Icon name='phone' size={16} color='grey' />
                    <Text style={estilo.texto}>Contato: {dadosUsuario.email}</Text>
                </View>
                <View style={estilo.icon}>
                    <Icon name='calendar' size={20} color='grey' />
                    <Text style={estilo.texto}>Entrou em: {moment(dadosUsuario.created_at).format('DD MMM, YYYY')}</Text>
                </View>
                <View style={estilo.botoes}>
                    <LinearGradient
                        colors={['rgb(0, 220, 130)', 'rgb(0, 180, 180)']}
                        start={{ x: 0.7, y: 0 }}
                        style={{
                            borderRadius: 25,
                            padding: 3
                        }}
                    >
                        <TouchableOpacity style={estilo.botao}>
                            <Text style={estilo.textoBotoes}>Seguidores</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                    
                    <LinearGradient
                        colors={['rgb(0, 220, 130)', 'rgb(0, 180, 180)']}
                        start={{ x: 0.7, y: 0 }}
                        style={{
                            borderRadius: 25,
                            padding: 3
                        }} 
                    >
                        <TouchableOpacity style={estilo.botao}>
                            <Text style={estilo.textoBotoes}>Seguindo</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                    
                </View>
            </View>
        </View>
    )
}

export default CardUsuario;