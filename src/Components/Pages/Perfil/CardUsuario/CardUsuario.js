import React from 'react';
import {View, Text, Image, ImageBackground, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import estilo from './estilo';

const CardUsuario = ({navigation, dadosUsuario, locationUsuario}) => {
    return(
        <View >
            <View >
                <ImageBackground 
                    source={{uri: dadosUsuario.picture}}
                    style={estilo.capa}>
                    <Image
                        source={{ uri: dadosUsuario.picture }}
                        style={estilo.imgPerfil}
                    />
                </ImageBackground>
            </View>
            <View style={estilo.info}>
                <View style={estilo.headerInfo}>
                    <View style={{flex: 0.5}}>
                        <Text style={estilo.nome}>{dadosUsuario.firstName + ' ' + dadosUsuario.lastName}</Text>
                        <Text style={estilo.userName}>@{dadosUsuario.firstName + dadosUsuario.lastName}</Text>
                    </View>
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
                
                <View style={estilo.icon}>
                        <Image
                            style={{ width: 20, height: 20 }}
                            source={require('../../../../../assets/images/place.png')}
                        />
                    <Text style={estilo.texto}>
                         
                       {locationUsuario.city}, {locationUsuario.country}</Text>
                </View>
                <View style={estilo.icon}>
                        <Image
                            style={{ width: 20, height: 20 }}
                            source={require('../../../../../assets/images/contact.png')}
                        />
                    <Text style={estilo.texto}>Contato: {dadosUsuario.email}</Text>
                </View>
                <View style={estilo.icon}>
                    <Image 
                        style={{ width: 20, height: 20 }}
                        source={require('../../../../../assets/images/calendar.png')}
                    />
                    <Text style={estilo.texto}>Entrou em: {dadosUsuario.registerDate}</Text>
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