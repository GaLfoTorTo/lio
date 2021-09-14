import {Dimensions, StyleSheet} from 'react-native';

const medidas = Dimensions.get('screen').width;

const estilo = StyleSheet.create({
    scroll: {
        //flex: 1,
        backgroundColor: 'black',
    },
    container: {
        alignItems: 'center',
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
        padding: 1,
        marginLeft: 10,
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
        alignItems: 'center',
        marginTop: 13,
        width: '87%',
        color: 'white',
        fontSize: 16,
        textAlign: 'center'
    },
    divisoria: {
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: 'rgba(190, 190, 190, 0.3)',
        paddingTop: 1,
        paddingBottom: 1,
    },
    cardInput: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'black',
        padding: 5,
    },
    InputComentarios: {
        flex: 0.9,
        width: '70%',
        height: 40,
        padding: 5,
        paddingLeft: 15,
        color: 'white'
    },
    icon: {
        color: 'rgba(190, 190, 190, 0.8)'
    },
    cardComentario: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 10,
        paddingBottom: 10,
    },
    imageComentario: {
        width: 28,
        height: 28,
        borderRadius: 20,
        marginLeft: 5,
        marginRight: 15,
    },
    userNameComentario: {
        fontWeight: 'bold',
        fontSize: 15,
        color: 'white',
        marginBottom: 5
    },
    comentario: {
        color: 'rgba(255, 255, 255, 0.9)',
        marginLeft: 15,
        fontSize: 15,
    },
    divisoriaComentario: {
        backgroundColor: 'rgba(190, 190, 190, 0.3)',
        width: '100%',
        height: 1,
        marginTop: 10,
    }
})

export default estilo;