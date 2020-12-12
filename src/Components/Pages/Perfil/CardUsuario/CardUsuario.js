import React from 'react';
import {View, Text, Image, ImageBackground} from 'react-native';
import estilo from './estilo';

const CardUsuario = ({navigation, dadosUsuario}) => {
    return(
        <View>
            <ImageBackground
                style={estilo.CardUsuario}
                source={{uri: dadosUsuario.image}}
            >
                <Image />
            </ImageBackground>
            <View>

            </View>
        </View>
    )
}

export default CardUsuario;