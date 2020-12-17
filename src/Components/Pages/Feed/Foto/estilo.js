import {Dimensions, StyleSheet} from 'react-native';

const medidas = Dimensions.get('screen').width;

const estilo = StyleSheet.create({
    scroll: {
        flex: 1,
        backgroundColor: 'black',

    },
    container: {
        flex: 1,
        alignItems: 'center'
    },
    imagem: {
        width: '100%',
        height: 400,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        marginTop: 3
    },
    cabecalho: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 13,
        alignItems: 'center'
    },
    borderImg: {
        borderRadius: 55,
        padding: 3,
        marginLeft: 7,
        backgroundColor: 'black',

    },
    borderTag: {
        marginTop: 20,
        borderRadius: 55,
        padding: 3,
        marginLeft: 7,
    },
    tags:{
        backgroundColor: 'black',
        borderRadius: 55,
        padding: 5,

    },
    textTag: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center'
    },
    imgPerfil: {
      width: 70,
      height: 70,
      borderRadius: 55
    },
    userName: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 17,
        marginLeft: 5
    },
    botaoSeguir: {
        position: 'relative',
        left: 37 
    },
    seguir: {
        alignItems: 'center',
        borderRadius: 7,
        padding: 10,
        width: 80
    },
    textoSeguir:{
        color: 'white',
        fontWeight: 'bold'
    },
    texto: {
        marginTop: 13,
        width: '87%',
        color: 'white',
        fontSize: 16,
        textAlign: 'center'
    }
})

export default estilo;