import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import estilo from './estilo';
import Comentarios from '../../api/Comentarios'; 
import DadosFeed from '../../api/DadosFeed';


const Notificacoes = ({navigation}) => {

    const [id, setId] = useState('');

    console.log()
    const [comentarios, setComentarios] = useState('');

    useEffect(() => {
         
        DadosFeed(setId)
        Comentarios(setComentarios)
    }, [])

    return(
        <ScrollView style={estilo.scroll}>
            <View style={estilo.container}>
                <TouchableOpacity>
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