import React from 'react'
import { View, StyleSheet } from 'react-native';
import  { LinearGradient }  from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';

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

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconPlus: {
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        backgroundColor: 'white'
    },
    plus: {
        color: 'rgb(0, 255, 100)'
    }
})

export default IconPlus;