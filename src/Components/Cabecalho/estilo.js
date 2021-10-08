import {StyleSheet} from 'react-native';

const estilo = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 10,
    },
    userImagem: {
        width: 40,
        height:40,
        borderRadius: 25,
        marginLeft: 5
    },
    nameLegenda: {
        marginLeft: 4,
        marginTop: 7,
    },
    userName: {
        fontWeight: 'bold',
        color: 'white'
    },
    legenda: {
        width: 120,
        color: 'white',
        marginTop: 5,
    }
})

export default estilo;