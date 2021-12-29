import React, { useEffect, useState, useContext } from 'react';
import {View, ScrollView, FlatList, Image, TouchableOpacity, Text} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome5";
import { AuthContext } from "../../Components/AuthContext";
import { getUsuario} from "../../Storage/Storage";
import baseUrl from '../../api/baseUrl';
import PerfilUsuario from '../../api/PerfilUsuario'
import CardUsuario from '../../Components/CardUsuario/CardUsuario';
import estilo from './estilo';

const Perfil = ({navigation, route}) => {
    
    const dadosUsuario = route.params.dadosUsuario;
    const [post, setPosts] = useState('');
    const [usuario, setUsuario] = useState('');
    const {signOut} = useContext(AuthContext);

    useEffect(() =>{
        PerfilUsuario(setPosts, dadosUsuario.id);
        navigation.setOptions({title: dadosUsuario.nome}) 
    }, []);


    useEffect(() => {
        const data = async () =>{
            const data = await getUsuario()
            setUsuario(data.usuario)
        }
        data()
    }, []);


    return(
        
        <ScrollView style={estilo.Scrool}>
            <View>
            <CardUsuario 
                dadosUsuario={dadosUsuario}
                navigation={navigation}
            />
            {post.length == 0 ?
                dadosUsuario.id == usuario.id ?
                <View style={estilo.cardMensagem}>
                    <View style={estilo.div}></View>
                    <Text style={estilo.textMensagem}>"Nenhuma Postagem"</Text>
                    <TouchableOpacity
                        onPress={() => console.warn('testes')}
                    >
                        <Icon name='camera' size={50} style={estilo.cameraIcon}/>
                    </TouchableOpacity>
                    <Text style={estilo.textMensagem}>Clique no botao acima para fazer sua primeira postagem</Text>
                </View>
                :
                <View style={estilo.cardMensagem}>
                    <View style={estilo.div}></View>
                    <Text style={estilo.textMensagem}>"Não há Postagens"</Text>
                    <Icon name='camera' size={50} style={estilo.cameraIcon}/>
                </View>
            :
                <FlatList 
                    data={post}
                    numColumns={3}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item}) =>(
                        <View style={estilo.posts}>   
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Foto', {item, dadosUsuario})}
                            >
                                <Image
                                    source={{ uri: baseUrl + item.post }}
                                    style={estilo.imagens}
                                />
                            </TouchableOpacity>
                        </View>
                    )}
                />
            }
            </View>
        </ScrollView>
    )
}

export default Perfil;