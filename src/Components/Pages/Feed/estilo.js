import { StyleSheet, Dimensions} from 'react-native';

const Tamanho = Dimensions.get('screen').width;

const estilo = StyleSheet.create({
    
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    subContainer: {
        //flex: 1,
        flexDirection: 'row'
    },
    imagem1: {
        borderRadius: 20,
        width: 170,
        height: 320,
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5,
    },
    imagem2: {
        borderRadius: 20,
        width: 170,
        height:170,
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5,
    }
})

export default estilo;