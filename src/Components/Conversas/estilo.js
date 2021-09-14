import {StyleSheet} from 'react-native';
import Colors from '../../Style/Colors';

const estilo = StyleSheet.create({
    
    container: {
        flex: 1,
        margin: 5
    },
    cardUser: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 7,
        marginBottom: 17
    },
    borderFoto: {
        borderRadius: 37,
        padding: 3,
        marginBottom: 7
    },
    userFoto: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: Colors.secondaryLight
    },
    userNameProfile: {
        color: Colors.light,
        fontWeight: 'bold',
        fontSize: 17,
    },
    nameUser: {
        color: Colors.secondaryLight,
        fontSize: 14
    },
    scroll: {
        backgroundColor: 'rgba(180, 180, 180, 0.3)',
        marginBottom: 3,
        borderRadius: 5,
        padding: 1
    },
    cardMensagem: {
        flexDirection: 'row',
        height:95,
        backgroundColor: 'rgb(0, 0, 0)',
        borderRadius: 5,
    },
    fotoConversa: {
        marginLeft: 10,
        marginTop: 10,
        width: 40,
        height: 40,
        borderRadius: 35,
    },
    userName: {
        color: Colors.light,
        fontWeight: 'bold',
        fontSize: 14,
        marginLeft: 7,
        marginTop: 20,
    },
    mensagem: {
        color: 'rgb(150, 150, 150)',
        fontSize: 14,
        marginLeft: 7,
        marginTop: 20,
    },
    online: {
        width: 20,
        height: 20,
        marginTop: 20,
        borderRadius: 20,
        backgroundColor: 'rgb(0, 200, 0)'
    },
    offline: {
        width: 20,
        height: 20,
        marginTop: 20,
        borderRadius: 20,
        backgroundColor: Colors.secondaryLight
    }
})

export default estilo;