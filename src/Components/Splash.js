import React, { useEffect, useRef } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import AppLoading from 'expo-app-loading';
import Animated, {EasingNode} from 'react-native-reanimated';
import { useFonts, Parisienne_400Regular } from '@expo-google-fonts/parisienne';
import Colors from '../Style/Colors';

const Splash = () => {

    let [fontsLoaded] = useFonts({
        Parisienne_400Regular,
    });
    
    const fadeAnim = useRef(new Animated.Value(0)).current;

    const fadeIn = () => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 500,
            easing: EasingNode.ease,
            useNativeDriver: true
        }).start();
    };

    useEffect(() => {
            fadeIn();
    }, [fontsLoaded])

    if(!fontsLoaded){
        return <AppLoading />;
    }

    return (
        <View style={estilo.container}>
            <Image
                source={require('../../assets/Lio.png')} 
                style={estilo.load}
                resizeMode='contain'
            />
            <View style={estilo.cardTitulo}>
                <Animated.Text style={[estilo.titulo, {opacity: fadeAnim}]}> Lio </Animated.Text>
            </View>
        </View>
    );
}

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#111',
    },
    load: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        bottom: 50,
        width: '60%',
        height: '60%'
    },
    cardTitulo: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        bottom: 160
    },
    titulo: {
        fontSize: 55,
        color: Colors.light,
        fontFamily: 'Parisienne_400Regular',
        textShadowColor: Colors.light,
        textShadowOffset: {width: 0, height: 1},
        textShadowRadius: 15,
    }
})

export default Splash;