import { DrawerActions } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import estilo from './estilo';

const Menu = ({ navigation }) => {
    return (
        <TouchableOpacity
            style={estilo.botao}
            //onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        >
            <Icon name='menu' size={30} style={estilo.icone} />
        </TouchableOpacity>
    )
}

export default Menu;