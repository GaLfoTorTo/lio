import React, { useEffect, useState } from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView, ImageBackground, FlatList} from 'react-native';
import Usuario from '../api/Usuario'
import feedUsuario from '../api/feedUsuario'
import estilo from './estilo';
import CardUsuario from './CardUsuario/CardUsuario';

const Perfil = ({navigation, route}) => {
    
    const dadosUsuario = route.params.dadosUsuario;

    const [post, setPosts] = useState('');
    const [usuarios, setUsuarios] = useState('');

    useEffect(() =>{
        Usuario(setUsuarios, dadosUsuario.idUsuario);
        navigation.setOptions({title: dadosUsuario.nomeUsuario})
        feedUsuario(setPosts, dadosUsuario.idUsuario);
    }, [])
    return(
        <ScrollView style={estilo.Scrool}>
            <CardUsuario 
                
            />
                <FlatList 
                    data={usuarios}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item}) =>(
                        <View>
                            <ImageBackground
                                //source={{uri: dadosUsuario.image}}
                                style={{widht: 30, height: 130, backgroundColor: 'white'}}
                            />
                            <Image
                                style={estilo.imgPerfil}
                            />
                        </View>
                    )}
                />
                
            </View>
        </ScrollView>
    )
}

export default Perfil;