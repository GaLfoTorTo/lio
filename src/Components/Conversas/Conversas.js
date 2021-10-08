import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, FlatList, TouchableOpacity} from 'react-native';
import { LinearGradient} from 'expo-linear-gradient';
import estilo from './estilo';
import Usuarios from '../../api/Usuarios';
import { getUsuario } from '../../Storage/Storage';
import baseUrl from '../../api/baseUrl';

const Conversas = ({navigation}) => {

    const [usuario, setUsuario] = useState('');
    const [token, setToken] = useState('');
    const [usuarios, setUsuarios] = useState('');

    useEffect(() => {
        const data = async () =>{
            const data = await getUsuario()
            setUsuario(data.usuario)
            setToken(data.token)
        }
        data()
        Usuarios(setUsuarios)
    }, []);
    
    const aleatoria = () => {
        let index = Math.floor(Math.random() * 2);
        return index
    }

    const resultado = () => { return aleatoria() == 0 ? estilo.online : estilo.offline }
    
    return(
        <View style={estilo.container}>
            <View style={estilo.cardUser}>
                <TouchableOpacity>
                    <LinearGradient
                        colors={['rgb(0, 220, 130)', 'rgb(0, 180, 180)']}
                        start={{ x: 0.7, y: 0 }}
                        style={estilo.borderFoto}
                    >
                        <Image
                            source={{ uri: baseUrl + usuario.foto }}
                            style={estilo.userFoto}
                        />
                    </LinearGradient>
                </TouchableOpacity>
                <Text style={estilo.userNameProfile}>{usuario.user_name}</Text>
                <Text style={estilo.nameUser}>{usuario.nome}</Text>
            </View>
            <View style={{width: '100%', height: 2, backgroundColor: 'rgba(180, 180, 180, 0.3)'}}></View>
            <ScrollView>
            <FlatList 
                data={usuarios}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) => {
                    return(
                        <ScrollView style={estilo.scroll}>
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
                        </ScrollView>
                    )
                }}
            />
            </ScrollView>
        </View>
    )
}

export default Conversas;