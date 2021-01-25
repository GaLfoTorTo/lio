import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, FlatList} from 'react-native';
import { LinearGradient} from 'expo-linear-gradient';
import estilo from './estilo';
import Usuarios from '../../../api/Usuarios';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Conversas = (props, navigation) => {

    //const dadosGoogle = dadosGoogle;
    console.warn();

    const aleatoria = () => {
        let index = Math.floor(Math.random() * 2);
        return index
    }

    const resultado = () => { return aleatoria() == 0 ? estilo.online : estilo.offline }

    const [user, setUser] = useState('');

    useEffect(() => {
        Usuarios(setUser)
    }, [])
    
    return(
        <View style={estilo.container}>
            <View style={estilo.cardUser}>
                <LinearGradient
                    colors={['rgb(0, 220, 130)', 'rgb(0, 180, 180)']}
                    start={{ x: 0.7, y: 0 }}
                    style={estilo.borderFoto}
                >
                    <Image
                        source={require('../../../../../assets/images/user.png')}
                        style={estilo.userFoto}
                    />
                </LinearGradient>
                <Text style={estilo.userNameProfile}>@iae carai</Text>
                <Text style={estilo.nameUser}>iae carai</Text>
            </View>
            <View style={{width: '100%', height: 2, backgroundColor: 'rgba(180, 180, 180, 0.3)'}}></View>
            <ScrollView>
            <FlatList 
                data={user}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) => {
                    return(
                        <ScrollView style={estilo.scroll}>
                            <TouchableOpacity 
                                onPress={() => navigation.navigate('Chat', {item})}
                                style={estilo.cardMensagem}>
                                <Image
                                    source={{uri: item.picture}}
                                    style={estilo.fotoConversa}
                                />
                                <View style={{flex: 0.9}}>
                                    <Text style={estilo.userName}>@{item.firstName + item.lastName}</Text>
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