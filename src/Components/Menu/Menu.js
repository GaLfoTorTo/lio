import React, { useContext, useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import {View, Image, Text, TouchableOpacity, ScrollView, FlatList} from 'react-native';
import baseUrl from "../../api/baseUrl";
import { getUsuario, removerUsuario } from "../../Storage/Storage";
import estilo from './estilo';
import Icon from "react-native-vector-icons/FontAwesome5";
import { AuthContext } from "../AuthContext";

const Menu = ({navigation}) => {

    const [usuario, setUsuario] = useState('');
    const {signOut} = useContext(AuthContext);

    useEffect(() => {
        const data = async () =>{
            const data = await getUsuario()
            setUsuario(data.usuario)
        }
        data()
    }, []);

    const itens = [
        {
            name: 'Perfil',
            icon: 'user',
            link: 'Perfil'
        },
        {
            name: 'Itens Salvos',
            icon: 'bookmark',
            link: 'ItensSalvos'
        },
        {
            name: 'Editar',
            icon: 'edit',
            link: 'Editar'
        }
    ]
    return (
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
            <View style={estilo.div}></View>
            <ScrollView>
                <FlatList 
                    data={itens}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item, index}) => {
                        return (
                            <TouchableOpacity 
                                style={estilo.itemSideBar}
                                onPress={() => navigation.navigate(item.link, {dadosUsuario: usuario})}
                            >
                                <Icon name={item.icon} size={25} style={estilo.itemIcon} solid/>
                                <Text style={[estilo.textItem, item.name == 'Itens Salvos' && {marginLeft: 14}]}>{item.name}</Text>
                            </TouchableOpacity>
                        )
                    }}
                />
            </ScrollView>
            <View style={estilo.footerSideBar}>
                <TouchableOpacity
                    onPress={() => {}}
                >
                    <Icon name='cog' size={25} style={estilo.itemIcon}/>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {signOut()}}
                >
                    <Icon name='sign-out-alt' size={25} style={estilo.itemIcon}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Menu;