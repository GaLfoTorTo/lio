import {StyleSheet, Dimensions}from 'react-native';
import Colors from '../../Style/Colors';

const medidas = Dimensions.get('screen').width;
const estilo = StyleSheet.create({

    container: {
        flex:1
    },
    scroll: {
        flex: 1,
        backgroundColor: Colors.dark,
        flexDirection:'column-reverse'
    },
    cardMensagem: {
        flexDirection: 'row-reverse',
        flex: 1,
        flexWrap: 'wrap'
    },
    mensagem: {
        alignItems: 'center',
        width: medidas / 2 - 10,
        backgroundColor: 'rgb(35, 35, 35)',
        borderRadius: 25,
        padding: 10,
        margin: 5
    },
    textoMensagem: {
        color: Colors.light,
        fontSize: 15
    },
    cardInput: {
        flex: 0.15,
        flexDirection: 'row',
        backgroundColor: 'black',
        justifyContent: 'center'
    },
    bordaInput: {
        marginTop: 18,
        marginRight: 15,
        borderRadius: 25,
        width: '70%',
        height: '60%',
        padding: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        borderRadius: 25,
        paddingLeft: 15,
        paddingRight: 5,
        backgroundColor: 'black',
    },
    textInput: {
        flex: 1,
        color: Colors.light
    },
    iconeCamera: {
        width: 40,
        height: 38,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
    },
    camera: {
        color: Colors.light
    },
    send:{
        marginTop: 29,
        marginLeft: 15,
        color: 'rgb(0, 230, 128)'
    }
})

export default estilo;