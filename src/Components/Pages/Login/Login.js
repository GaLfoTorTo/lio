import React from 'react';
import {View, Text, TouchableOpacity, Image, TextInput} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import estilo from './estilo';

const Login = ({navigation}) => {
    return(
        <LinearGradient
            colors={['rgb(0, 220, 130)', 'rgb(0, 180, 180)']}
            start={{x: 0.7, y: 0}}
            style={{flex: 1}}
        >
            <TouchableOpacity style={estilo.conf}>
                <Image
                    source={require('../../../../assets/images/conf.png')}
                    style={{ width: 20, height: 20 }}
                />
            </TouchableOpacity>
            <View style={estilo.container}>
                <View style={estilo.logo}>
                    <Image 
                        source={require('../../../../assets/images/logo.png')}
                        style={{ width: 150, height: 150 }}
                    />
                </View>
                <View style={estilo.inputs}>
                    <TextInput 
                        placeholder='E-mail ou Usuário'
                        style={estilo.input}
                    />
                    <TextInput
                        placeholder='Senha'
                        style={estilo.input}
                    />
                    <TouchableOpacity
                        onPress={() => navigation.replace('Feed')}
                    >
                        <LinearGradient
                            colors={['rgb(20, 0, 150)', 'rgb(10, 0, 60)']}
                            end={{x: 0, y: 1}}
                            style={estilo.entrar}
                        >
                            <Text style={estilo.textoEntrar}>Entrar</Text>
                        
                        </LinearGradient>
                    </TouchableOpacity>
                    <View style={estilo.outrosBotoes}>
                        <TouchableOpacity >
                            <LinearGradient
                                colors={['rgb(160,160,160)', 'rgb(90,90,90)']}
                                start={{ x: 0.5, y: 0 }}
                                style={estilo.addConvidado}
                            >
                                <Image 
                                    source={require('../../../../assets/images/user.png')}
                                    style={{width: 30, height: 30}}
                                /> 
                            </LinearGradient>
                        </TouchableOpacity>
                        <TouchableOpacity >
                            <LinearGradient
                                colors={['rgb(0,200,50)','rgb(0, 100,10)']}
                                start={{x:0.5, y: 0}}
                                style={estilo.addConvidado}
                            >
                                <Image 
                                    source={require('../../../../assets/images/add-user.png')}
                                    style={{width: 30, height: 30}}
                                />                              
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        style={{alignItems: 'center', marginTop: 25}}
                    >
                        <Text style={estilo.textHelp}>You forgot your password?</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </LinearGradient>
    )
}

export default Login;