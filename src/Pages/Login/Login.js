import React, { useContext, useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    TextInput,
    Platform,
    Modal,
    ActivityIndicator}
from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';
import estilo from './estilo';
import Logar from '../../api/Logar';
import * as Google from 'expo-google-app-auth';
import { saveUsuario } from '../../Storage/Storage';
import { AuthContext } from '../../Components/AuthContext';

const Login = ({navigation}) => {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [mensagem, setMensagem] = useState("");
    const [loading, setLoading] = useState(false);
    const platform = Platform.OS;

    const {signIn, signOut} = useContext(AuthContext);

    const tentarLogar = async () => {
        setLoading(true)
        if(email == '' || senha == '') {
            setMensagem('E-mail e senha são obrigatórios');
        } else {
            const resposta  = await Logar(email, senha, platform)
            if(resposta != undefined) {
                saveUsuario(resposta.usuario, resposta.token)
                await signIn()
                setLoading(false)
            }else {
                setLoading(false)
                setMensagem('Não foi possível logar');
            }
        }
        setLoading(false)
    }

    const LoginGoogle = async () => {
        setLoading(true);
        try {
            const result = await Google.logInAsync({
                androidClientId: '478462940609-nti08e0und47b2ri1a7oamk5fcttrnae.apps.googleusercontent.com',
                //iosClientId: YOUR_CLIENT_ID_HERE,
                scopes: ['profile', 'email'],
            });
            
            if (result.type === 'success') {
                setLoading(false)
                return navigation.navigate('Cadastrar', {result});
            } else {
                setLoading(false)
                return {cancelled: true};
            }
        } catch (e) {
            setLoading(false)
            return setMensagem('Não foi possivel efetuar login com Google. tente novamente.');
        }
    }

    return(
        <LinearGradient
            colors={['rgb(0, 230, 180)', 'rgb(0, 200, 70)']}
            start={{x: 0.7, y: 0.4}}
            style={{flex: 1}}
        >
            <View style={estilo.container}>
                {loading == true &&
                    <Modal 
                        animationType='fade'
                        visible={loading}
                        transparent={true}
                    >
                        <View style={estilo.load}>
                            <ActivityIndicator size={50} color='rgb(0, 200, 70)'/>
                        </View>
                    </Modal>
                }
                <View style={estilo.logo}>
                    <Image 
                        source={require ('../../../assets/images/LogoLio.png')}
                        style={estilo.imgLogo}
                        resizeMode={'contain'}
                    />
                </View>
                {mensagem != '' &&
                    <TouchableOpacity 
                        style={estilo.cardMensagem}
                        onPress={() => setMensagem('')}
                    >
                        <Text style={estilo.textoMensagem}>{mensagem}</Text>
                    </TouchableOpacity>
                }
                <View style={estilo.inputs}>
                    <TextInput 
                        placeholder='E-mail ou Usuário'
                        autoCompleteType='email'
                        autoCapitalize='none'
                        returnKeyLabel='next'
                        returnKeyType='next'
                        style={estilo.input}
                        onChangeText={texto => setEmail(texto)}
                    />
                    <TextInput
                        placeholder='Senha'
                        autoCompleteType='password'
                        autoCapitalize='none'
                        returnKeyLabel='go'
                        returnKeyType='go'
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
                            onPress={LoginGoogle}
                        >
                            <LinearGradient
                                colors={['rgb(255,255,255)', 'rgb(240,240,240)']}
                                start={{ x: 0.5, y: 0 }}
                                style={estilo.addConvidado}
                            >
                                <Image 
                                    source={require ('../../../assets/images/google.png')}
                                    style={estilo.iconGoogle}
                                />
                            </LinearGradient>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            onPress={() => navigation.navigate('Cadastrar')}
                        >
                            <LinearGradient
                                colors={['rgb(0,200,50)','rgb(0, 100,10)']}
                                start={{x:0.5, y: 0}}
                                style={estilo.addConvidado}
                            >
                                <Icon name="user-plus" size={28} solid color='white'/>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        style={{alignItems: 'center', marginTop: 25}}
                        onPress={() => {}}
                    >
                        <Text style={estilo.textHelp}>Esqueceu sua Senha?</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </LinearGradient>
    )
}

export default Login;