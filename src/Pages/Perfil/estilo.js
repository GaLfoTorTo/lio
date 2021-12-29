import {StyleSheet} from 'react-native';
import Colors from '../../Style/Colors';

const estilo = StyleSheet.create({
    Scrool: {
        backgroundColor: 'black'
    },
    posts: {
        flex: 1,
    },
    imagens: {
        width: 116,
        height: 116,
        margin: 2,    
    },
    div: {
        width: '100%',
        height: 0.5,
        backgroundColor: Colors.secondaryLight,
    },
    cardMensagem: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    textMensagem: {
        marginVertical: 10,
        fontSize: 16,
        textAlign: 'center',
        color: Colors.secondaryLight
    },
    cameraIcon: {
        marginVertical: 10,
        color: Colors.secondaryLight
    }
    
})

export default estilo;