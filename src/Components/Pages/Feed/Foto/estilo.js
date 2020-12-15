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
        marginTop:2
    },
    imagem: {
        width: 200,
        height: 400 
    },
    texto: {
        color: 'white'
    }
})

export default estilo;