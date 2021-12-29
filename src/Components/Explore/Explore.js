import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    FlatList,
    TouchableOpacity,
    TextInput,
    KeyboardAvoidingView,
    ActivityIndicator
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient} from 'expo-linear-gradient';
import Usuarios from '../../api/Usuarios';
import baseUrl from '../../api/baseUrl';
import Icon from 'react-native-vector-icons/FontAwesome5';
import estilo from './estilo';

const Explore = () => {

    const navigation = useNavigation();
    const [usuarios, setUsuarios] = useState('');
    const [pesquisa, setPesquisa] = useState('');

    useEffect(() => {
        Usuarios(setUsuarios)
    }, []);
    
    return(
        <View style={estilo.container}>
            <KeyboardAvoidingView
                style={estilo.cardPesquisa}
            >
                <TextInput 
                    style={estilo.inputPesquisa}
                    placeholder='Pesquisa...'
                    placeholderTextColor='rgb(180,180,180)'
                    value={pesquisa}
                    onChangeText={text => setPesquisa(text)}
                    
                />
                {/* <TouchableOpacity
                    style={estilo.botaoPesquisa}
                    onPress={() => setPesquisa('')}
                >
                    <Icon name='search' size={20} style={estilo.iconPesquisa}/>
                </TouchableOpacity> */}
            </KeyboardAvoidingView>
            <View style={estilo.div}></View>
            <ScrollView >
                {pesquisa == '' ?
                <View style={estilo.cardMensagem}>
                    <Text style={estilo.mensagem}>"Explore"</Text>
                    <Text style={estilo.mensagem}>Encontre outras Perfis e publicações de outras pessoas por aqui.</Text>
                    <Text style={estilo.textMensagem}>Nenhum Registro encontrado.</Text>
                    <Icon name='redo-alt' size={30} style={estilo.textMensagem}/>
                </View>
                :
                <FlatList 
                    data={usuarios}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item, index}) => {
                        return(
                            <TouchableOpacity 
                                onPress={()=> navigation.push('Perfil', {dadosUsuario: item})}
                                style={estilo.cardUser}>
                                <LinearGradient
                                    colors={['rgb(0, 220, 130)', 'rgb(0, 180, 180)']}
                                    start={{ x: 0.7, y: 0 }}
                                    style={estilo.borderFoto}
                                >
                                    <Image
                                        source={{uri: baseUrl + item.foto}}
                                        style={estilo.fotoUser}
                                    />
                                </LinearGradient>
                                <View style={{flex: 0.9}}>
                                    <Text style={estilo.userName}>{item.user_name}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                />
                }
            </ScrollView>
        </View>
    )
}

export default Explore;