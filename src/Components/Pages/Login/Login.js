import React, { useState } from 'react';
import {View, Text, TouchableOpacity, Image, TextInput} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import estilo from './estilo';
import efetuarLogin from '../../api/DadosLogin';

const Login = ({navigation}) => {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [mensagem, setMensagem] = useState("");

    const tentarLogar = async () => {
        if(email == '' || senha == '') {
            setMensagem('E-mail e senha são obrigatórios');
        } else {
                const resposta  = await efetuarLogin(email, senha)
                if(resposta.token) {
                    
                    navigation.replace('Feed', {email: email})
                    
                }else {
                    setMensagem('Não foi possível logar');
                }
        } //eve.holt@reqres.in
    }

    return(
        <LinearGradient
            colors={['rgb(0, 220, 130)', 'rgb(0, 180, 180)']}
            start={{x: 0.7, y: 0}}
            style={{flex: 1}}
        >
            <View style={estilo.container}>
                <View style={estilo.logo}>
                    <Image 
                        source={require('../../../../assets/images/logo.png')}
                        style={{ width: 300, height: 300}}
                    />
                </View>
                <View style={estilo.cardMensagem}>
                    <Text style={estilo.textoMensagem}>{mensagem}</Text>
                </View>
                <View style={estilo.inputs}>
                    <TextInput 
                        placeholder='E-mail ou Usuário'
                        style={estilo.input}
                        onChangeText={texto => setEmail(texto)}
                    />
                    <TextInput
                        placeholder='Senha'
                        style={estilo.input}
                        secureTextEntry={true}
                        onChangeText={texto => setSenha(texto)}
                    />
                    <TouchableOpacity
                        onPress={tentarLogar}
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
                        <TouchableOpacity 
                            onPress={() => navigation.replace('Home')}
                        >
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
                        <TouchableOpacity
                            onPress={() => navigation.replace('Loading')}
                        >
                            <LinearGradient
                                colors={['rgb(255,255,255)', 'rgb(240,240,240)']}
                                start={{ x: 0.5, y: 0 }}
                                style={estilo.addConvidado}
                            >
                                <Image
                                    source={require('../../../../assets/images/google.png')}
                                    style={{ width: 30, height: 30 }}
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