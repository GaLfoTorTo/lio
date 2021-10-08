import {StyleSheet, Dimensions} from 'react-native';
import Colors from '../../Style/Colors';

const medidas = Dimensions.get('screen').width;

const estilo = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    load:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)'
    },
    logo: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imgLogo:{
        width: 230,
        height: 230
    },
    cardMensagem: {
        borderRadius: 10,
        backgroundColor: Colors.danger,
        padding: 15,
        marginBottom: 5,
        maxWidth: '80%'
    },
    textoMensagem: {
        color: Colors.light,
        fontSize: 16,
        textAlign: 'center'
    },
    inputs: {
        width: '80%',
        flex: 1
    },
    input: {
        borderRadius: 15,
        backgroundColor: 'white',
        padding: 10,
        marginBottom: 7,
    },
    entrar: {
        borderRadius: 20,
        padding: 20,
        marginBottom: 10,
        alignItems: 'center'
    },
    textoEntrar: {
        textAlign: 'center',
        color: Colors.light,
        fontSize: 19
    },
    outrosBotoes: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 20        
    },
    addConvidado: {
        padding: 10,
        borderRadius: 10,
    },
    textHelp: {
        color: Colors.light,
        fontSize: 16,
        textDecorationLine: 'underline',
        textDecorationStyle: 'solid',
        textDecorationColor: Colors.light
    },
    iconGoogle: {
        width: 32,
        height: 32
    }
})

export default estilo;