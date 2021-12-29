import React, { useEffect, useState} from 'react';
import { View, Text, Image, ScrollView, FlatList, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import estilo from './estilo';
import Usuarios from '../../api/Usuarios';
import baseUrl from '../../api/baseUrl';

const Conversas = () => {

    const [usuarios, setUsuarios] = useState('');
    const navigation = useNavigation();

    useEffect(() => {
        Usuarios(setUsuarios)
    }, []);
    
    const aleatoria = () => {
        let index = Math.floor(Math.random() * 2);
        return index
    }

    const resultado = () => { return aleatoria() == 0 ? estilo.online : estilo.offline }
    
    return(
        <View style={estilo.container}>
            <ScrollView>
                <FlatList 
                    data={usuarios}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item, index}) => {
                        return(
                            <TouchableOpacity 
                                onPress={()=> navigation.push('Chat', {dadosUsuario: item})}
                                style={estilo.cardMensagem}>
                                <Image
                                    source={{uri: baseUrl + item.foto}}
                                    style={estilo.fotoConversa}
                                />
                                <View style={{flex: 0.9}}>
                                    <Text style={estilo.userName}>{item.user_name}</Text>
                                    <Text style={estilo.mensagem}>Mensagem...</Text>
                                </View>
                                <View style={resultado()}></View>
                            </TouchableOpacity>
                        )
                    }}
                />
            </ScrollView>
        </View>
    )
}

export default Conversas;