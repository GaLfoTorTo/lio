import React from 'react';
import { DrawerActions } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import estilo from './estilo';

const ButtonDrawerMenu = ({ navigation }) => {

    return (
        <TouchableOpacity
            style={estilo.botao}
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        >
            <Icon name='menu' size={30} style={estilo.icone} />
        </TouchableOpacity>
    )
}

export default ButtonDrawerMenu;