import {StyleSheet}from 'react-native';

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        //alignItems: 'center',
        justifyContent: 'center'
    },
    camera: {
        flex: 1,
    },
    negado: {
        color: 'red',
        fontSize: 30,
        fontWeight: 'bold'
    },
    barra: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-around',
        marginBottom: 8
    },
    inverter: {
        backgroundColor: 'rgba(255, 255, 255, 0)',
        borderRadius: 30,
        width: 40,
        height: 40
    },
    iconeInverter: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        color: 'white'
    },
    tirarFoto: {
        borderRadius: 40,
        padding: 5,
        width: 80,
        height: 80,
    },
    botao: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
        borderRadius: 40,
        width: 70,
        height: 70,
    },
    voltar: {
        color: 'white',
        marginLeft: 10,
        marginTop: 10
    },
    bar: {
        backgroundColor: 'transparent'
    },
    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    botaoFechar: {
        borderRadius: 30,
        width: 50,
        height: 50,
        backgroundColor: 'rgba(255, 0, 0, 0.5)',
        marginTop: 10,
    },
    iconeFechar: {
        left: 5,
        top: 5,
    },
    foto: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },

    //css componente loading
    loading: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black'
    },
    gif: {
        width: 100,
        height: 100,

    }
})

export default estilo;