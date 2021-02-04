import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const ImagemUser = (props) => {

    const foto = props.picture;

    return(
        <View style={estilo.headerContainer}>
            <TouchableOpacity
                onPress={() => props.navigation.goBack()}
            >
                <Icon name='arrow-left' size={30} style={estilo.voltar} />
            </TouchableOpacity>
            <Image
                source={{uri: foto}}
                style={estilo.foto} 
            />
        </View>
    )
}

const estilo = StyleSheet.create({

    headerContainer: {
        flexDirection: 'row'
    },
    foto: {
        width: 35,
        height: 35,
        borderRadius: 25,
        marginLeft: 5,
        marginTop: 5
    },
    voltar: {
        color: 'white',
        marginLeft:5,
        marginTop: 5
    }
})



export default ImagemUser;