import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import estilo from './estilo';
import Comentarios from '../../api/Comentarios'; 
import PerfilUsuario from '../../api/PerfilUsuario';
import { removerUsuario } from '../../Storage/Storage';


const Notificacoes = ({navigation}) => {

    /* const [user, setUser] = useState('');
    const [comentarios, setComentarios] = useState('');

    const idUsuario = '1pRsh5nXDIH3pjEOZ17A'

    const id = () => {
        for (var i = 0; i < user.length; i++) {
            if (user[8].id) {
                var idFoto = user[8].id;
                return idFoto   
            }
        }
    }

    const idFoto = id()
    //id()

    useEffect(() => {
        PerfilUsuario(setUser, idUsuario);
        Comentarios(setComentarios, idFoto);
    }, []) 
    
    setTimeout(() => {
        console.log(user)
        console.log(idFoto)
        console.log(comentarios)
    }, 2000); */

    const remove = async () => {
        await removerUsuario()
        console.warn('removido')
    }

    return(
        <ScrollView style={estilo.scroll}>
            <View style={estilo.container}>
                <TouchableOpacity
                    onPress={() => remove()}
                >
                    <LinearGradient
                        colors={['rgb(0, 220, 130)', 'rgb(0, 180, 180)']}
                        start={{ x: 0.7, y: 0 }}
                        style={estilo.bordaCard}
                    >
                        <View style={estilo.card}>
                            <LinearGradient
                                colors={['rgb(0, 220, 130)', 'rgb(0, 180, 180)']}
                                start={{ x: 0.7, y: 0 }}
                                style={{ padding: 3 }}
                            >
                                <Image />
                            </LinearGradient>
                            <Text style={estilo.textCard}>Notificacoes</Text>
                        </View>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default Notificacoes;