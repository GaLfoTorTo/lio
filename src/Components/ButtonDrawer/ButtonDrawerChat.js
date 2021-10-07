import React from 'react';
import {useDispatch} from 'react-redux';
import { actions } from '../Redux/DrawerConfig';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import estilo from './estilo';

const ButtonDrawerChat = ({ navigation }) => {

    const dispatch = useDispatch();

    return (
        <TouchableOpacity
            style={estilo.botao}
            onPress={() => dispatch(actions.toggleLeftDrawer())}
        >
            <Icon name='send' size={30} style={estilo.icone}/>
        </TouchableOpacity>
    )
}

export default ButtonDrawerChat;