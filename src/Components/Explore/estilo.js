import {StyleSheet} from 'react-native';
import Colors from '../../Style/Colors';

const estilo = StyleSheet.create({
    
    container: {
        flex: 1,
        margin: 5
    },
    cardPesquisa: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10
    },
    inputPesquisa: {
        flex: 1,
        color: Colors.light,
        borderWidth: 1,
        borderColor: Colors.secondary,
        borderRadius: 5,
        padding: 5,
        paddingLeft: 10,
        fontSize: 15
    },
    botaoPesquisa: {
        flex: 0.2,
        padding: 3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconPesquisa: {
        color: Colors.secondary
    },
    div: {
        height: 0.5,
        backgroundColor: Colors.secondary
    },
    cardMensagem: {
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    mensagem: {
        color: Colors.secondaryLight,
        textAlign: 'center'
    },
    textMensagem: {
        color: Colors.secondaryLight,
        textAlign: 'center',
        marginTop: 10
    },
    cardUser: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 7,
        marginBottom: 17
    },
    borderFoto: {
        borderRadius: 50,
        padding: 3,
    },
    fotoUser: {
        width: 80,
        height: 80,
        borderRadius: 40,
    },
    userName: {
        color: Colors.light,
        fontWeight: 'bold',
        fontSize: 17,
        marginTop: 5
    },
    nomeUsuario: {
        color: Colors.secondary,
        fontSize: 15,
        marginTop: 5
    },
})

export default estilo;