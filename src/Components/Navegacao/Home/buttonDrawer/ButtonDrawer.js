import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import estilo from './estilo';

const ButtonDrawer = ({navigation}) => {
    return (
        <TouchableOpacity
            style={estilo.botao}
            onPress={() => navigation.openDrawer()}
        >
            <Icon name='menu' size={30} style={estilo.icone}/>
        </TouchableOpacity>
    )
}

export default ButtonDrawer;