import React from 'react'
import { View } from 'react-native';
import  { LinearGradient }  from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';
import estilo from './estilo';

const IconPlus = () => {
    return(
        <View>
            <LinearGradient
                colors={['rgb(0, 0, 0)', 'rgb(200, 200, 200)']}
                end={{ x: 1, y: 0 }}
                start={{ x: 0, y: 0.8 }}
                style={estilo.iconPlus}
            >
                <Icon name='plus' size={35} style={estilo.plus} />
            </LinearGradient>
        </View>
    )
}

export default IconPlus;