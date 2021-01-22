import {StyleSheet} from 'react-native';

const estilo = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    conf: {
        flexDirection: 'row-reverse',
        marginTop: 45,
        marginRight: 20,       
    },
    logo: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardMensagem: {
        borderRadius: 10,
        backgroundColor: 'rgb(200, 100, 100)',
        padding: 5,
        marginBottom: 5,
    },
    textoMensagem: {
        color: 'rgb(100, 5, 0)'
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
        borderRadius: 30,
        padding: 20,
        marginBottom: 10,
        alignItems: 'center'
    },
    textoEntrar: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold'
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
        color: 'rgb(0, 80, 220)',
        textDecorationLine: 'underline',
        textDecorationStyle: 'solid',
        textDecorationColor: 'rgb(0, 80, 220)'
    }
})

export default estilo;