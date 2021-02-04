import React, { useEffect, useState } from 'react';
import {View, Text, TextInput, TouchableOpacity, ScrollView, FlatList} from 'react-native';
import estilo from './estilo';
import ImagemUser from './ImagemUser/ImagemUser';
import Icon from 'react-native-vector-icons/Feather';
import { LinearGradient } from 'expo-linear-gradient';

const Chat = ({navigation, route}) => {

    const dadosUsuario = route.params.item

    useEffect(() =>{
        navigation.setOptions({
            headerLeft: (props) => (<ImagemUser {...props} picture={dadosUsuario.picture} navigation={navigation}/>),
            title: '@'+dadosUsuario.firstName + dadosUsuario.lastName,
         })
    },[])

    const [stateMenssage, setMenssage] = useState('')

    let textMenssage = ''

    return(
        <View style={estilo.container}>
            <ScrollView style={estilo.scroll}>
                <FlatList 
                    data={stateMenssage}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item}) => {
                        return(
                            <View style={estilo.cardMensagem}>
                                <View style={estilo.mensagem}>
                                    <Text style={estilo.textoMensagem}>{}</Text>
                                </View>
                            </View>
                        )
                    }}
                />
            </ScrollView>
            <View style={estilo.cardInput}>
                <LinearGradient
                    colors={['rgb(0, 220, 130)', 'rgb(0, 180, 180)']}
                    start={{ x: 0.7, y: 0 }}
                    style={estilo.bordaInput}
                >
                    <View style={estilo.input}>
                        <TextInput
                            
                            onChangeText={text => textMenssage = text}
                            placeholder='Escreva sua mensagem...'
                            placeholderTextColor='rgba(255, 255, 255, 0.7)'
                            style={estilo.textInput}
                        />
                        <TouchableOpacity
                            //onPress={() => navigation.push('Post')}
                        >
                            <LinearGradient
                                colors={['rgb(0, 220, 130)', 'rgb(0, 180, 180)']}
                                start={{ x: 0.7, y: 0 }}
                                style={estilo.iconeCamera}
                            >
                                <Icon name='image' size={20} style={estilo.camera} />
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
                <TouchableOpacity
                    //onPress={}
                >
                    <Icon name='send' size={29} style={estilo.send}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Chat;