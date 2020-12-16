import {Dimensions, StyleSheet} from 'react-native';

const medidas = Dimensions.get('screen').width;

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center'
    },
    cardFoto: {
        width: medidas,
        backgroundColor: 'white',
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        margin:2,
        alignItems: 'center'
    },
    imagem: {
        width: medidas,
        height: 400,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
    },
    texto: {
        color: 'white'
    }
})

export default estilo;