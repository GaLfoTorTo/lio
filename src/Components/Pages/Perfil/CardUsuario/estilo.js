import {Dimensions, StyleSheet} from 'react-native';

const largura = Dimensions.get('screen').width;

const estilo = Stylesheet.create({
    container: {
        flex:1,
    },
    capa: {
        width: largura,
        height: 130,
    },
    
})