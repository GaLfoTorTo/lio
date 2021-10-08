import React, { useEffect, useState } from 'react';
import {View, ScrollView, FlatList, Image, TouchableOpacity} from 'react-native';
import baseUrl from '../../api/baseUrl';
import PerfilUsuario from '../../api/PerfilUsuario'
import CardUsuario from '../../Components/CardUsuario/CardUsuario';
import estilo from './estilo';

const Perfil = ({navigation, route}) => {
    
    const dadosUsuario = route.params.dadosUsuario;
    const [post, setPosts] = useState('');

    useEffect(() =>{
        PerfilUsuario(setPosts, dadosUsuario.id);
        navigation.setOptions({title: dadosUsuario.nome}) 
    }, []);
    return(
        
        <ScrollView style={estilo.Scrool}>
            <View>
            <CardUsuario 
                dadosUsuario={dadosUsuario}
                navigation={navigation}
            />
            <FlatList 
                    data={post}
                    numColumns={3}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item}) =>(
                        <View style={estilo.posts}>   
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Foto', {item})}
                            >
                                <Image
                                    source={{ uri: baseUrl + item.post }}
                                    style={estilo.imagens}
                                />
                            </TouchableOpacity>
                        </View>
                    )}
                />
                
            </View>
        </ScrollView>
    )
}

export default Perfil;