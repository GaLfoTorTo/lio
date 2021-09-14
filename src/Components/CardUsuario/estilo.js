import {Dimensions, StyleSheet} from 'react-native';
import Colors from '../../Style/Colors';

const largura = Dimensions.get('screen').width;

const estilo = StyleSheet.create({
    container: {
        flex:1,
    },
    capa: {
        height: 100,
        justifyContent: 'flex-end',
        backgroundColor: Colors.light,
        resizeMode: 'cover'
    },
    imgPerfil: {
        marginLeft: 10,
        width: 90,
        height: 90,
        position: 'relative',
        top: 50,
        borderRadius: largura * 0.5,
        borderColor: 'black',
        borderWidth: 3,
        marginBottom: 5
    },
    info: {
        marginTop: 45,
        paddingHorizontal: 10
    },
    headerInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    names:{
        
    },
    nome:{
        color: Colors.light,
        fontSize: 17,
        fontWeight: 'bold',
    },
    userName: {
        color: Colors.secondaryLight,
        marginLeft: 7
    },
    cardSeguir: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '40%'
    },
    botaoSeguir: {        
        bottom: 2
    },
    seguir: {
        alignItems: 'center',
        borderRadius: 7,
        padding: 10,
        width: 80,
    },
    textoSeguir:{
        color: Colors.light,
        fontWeight: 'bold'
    },
    iconChat:{
        alignItems: 'flex-end',
        width: 40
    },
    iconTalk : {
        color: 'rgb(0, 230, 180)'
    },  
    icon: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 2
    },
    desc: {
        flexDirection: 'row',
        color: Colors.secondaryLight,
        marginBottom: 5
    },
    texto: {
        color: Colors.secondaryLight,
        marginLeft: 10,
        marginBottom: 5
    },
    textoBios: {
        color: Colors.light,
        marginBottom: 10
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
        color: Colors.light,
        textAlign: 'center',

    }
    
})

export default estilo;