import {Dimensions, StyleSheet} from 'react-native';

const largura = Dimensions.get('screen').width;

const estilo = StyleSheet.create({
    container: {
        flex:1,
    },
    capa: {
        height: 100,
        justifyContent: 'flex-end',
        backgroundColor: 'white',
        resizeMode: 'cover'
    },
    imgPerfil: {
        marginLeft: 10,
        width: 90,
        height: 90,
        position: 'relative',
        top: 50,
        //width: largura * 0.2,
        //height: largura * 0.2,
        borderRadius: largura * 0.5,
        borderColor: 'black',
        borderWidth: 3,
        marginBottom: 5
    },
    info: {
        marginTop: 45,
    },
    nome:{
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold',
        marginLeft: 10
    },
    userName: {
        color: 'rgb(150, 150, 150)',
        marginLeft: 15,
    },
    headerInfo: {
        flexDirection: 'row',
        marginBottom: 20
    },
    botaoSeguir: {
        flex: 0.7,
        position: 'relative',
        left: 110,
        bottom: 2
    },
    seguir: {
        alignItems: 'center',
        borderRadius: 7,
        padding: 10,
        width: 80,
    },
    textoSeguir:{
        color: 'white',
        fontWeight: 'bold'
    },
    icon: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginLeft: 10,
        marginBottom: 2
    },
    desc: {
        flexDirection: 'row',
        color: 'rgb(150, 150, 150)',
        marginBottom: 5
    },
    texto: {
        color: 'rgb(150, 150, 150)',
        marginLeft: 10,
        marginBottom: 5
    },
    botoes: {
        marginTop: 15,
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        marginBottom: 30
    },
    botao: {
        backgroundColor: 'black',
        borderRadius: 35,
        padding: 7,
        width: 150
    },
    textoBotoes: {
        color: 'white',
        textAlign: 'center',

    }
    
})

export default estilo;