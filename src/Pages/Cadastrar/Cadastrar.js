import React, { useEffect, useState } from "react";
import {
    SafeAreaView,
    View,
    Text,
    Animated,
    TouchableOpacity,
    ScrollView,
    TextInput,
    Modal,
    ActivityIndicator,
    Platform,
    Image
} from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import DateTimePicker from '@react-native-community/datetimepicker';
import TextInputMask from 'react-native-masked-input';
import RNPickerSelect from 'react-native-picker-select';
import { useFormik } from "formik";
import moment from "moment";
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions'
import LottieView from 'lottie-react-native';
import { RectButton } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/FontAwesome5';
import Politicas from "../../Components/Politicas/Politicas";
import uf from '../../Components/uf';
import estilo from './estilo';
import NovoCadastro from "../../api/NovoCadastro";

const Cadastrar = ({navigation, route}) => {

    const dadosGoogle = route.params?.result.user;
    const [indicador, setIndicador] = useState(0);
    const [focado, setFocado] = useState('');
    const [data, setData] = useState(new Date());
    const [showData, setShowData] = useState(false);
    const [tipo, setTipo] = useState('');
    const [ready, setReady] = useState('');
    const [loading, setLoading] = useState(false);
    const [mensagem, setMensagem] = useState('');
    const [ uploadFoto, setUploadFoto] = useState('');
    const fade = new Animated.Value(1);

    const fadeAnimation = () => {
        Animated.timing(fade, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true
        }).start(() =>{
            Animated.timing(fade, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true
            }).start();
        })

    };

    useEffect(() => {
        if(dadosGoogle != undefined){
            setIndicador(indicador + 1)
        }
    })

    const CallbackFoto = async() => {
        setFocado('foto')
        if(Platform.OS == 'ios'){
            const {status} = await Permissions.askAsync(Permissions.CAMERA_ROLL)
            if(status !== 'granted'){
                alert('A permissão de camera e necessária')
                return;
            }
        }
        const foto = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect:[4,3],
            quality: 1
        })
        if(foto.cancelled == true){
            return;
        }
        if(!foto.uri){
            return;
        }
        setUploadFoto(foto)
    }

    const voltar = () => {
        fadeAnimation()
        setTimeout(() => {
            setIndicador(indicador - 1);
        }, 400);
    }

    const proximo = () => {
        fadeAnimation()
        if(indicador < 4){
            setTimeout(() => {
                setIndicador(indicador + 1);
            }, 400);
        }
    }

    const mudarData = (event, date) => {
        if (Platform.OS == 'android') {
            setShowData(oldState => !oldState)
        }
        
        if (showData == true) {
            if (date) {
                setFocado('data_nascimento')
                setData(date);
                setFieldValue('data_nascimento', date);
            }
        }
    }

    const esconder = () => {
        setReady(false)
        setLoading(false)
        setMensagem('')
        navigation.setOptions({ headerShown: true })
    }

    const salvar = (value) => {
        setLoading(true);
        value.data_nascimento = moment(value.data_nascimento).format('DD/MM/yyyy')
        if(uploadFoto != ''){
            const ext = uploadFoto.uri.split('.');
            const form = new FormData()
            form.append('nome', value.nome)
            form.append('user_name', value.user_name)
            form.append('email', value.email)
            form.append('senha', value.senha)
            form.append('data_nascimento', value.data_nascimento)
            form.append('telefone', value.telefone)
            form.append('cep', value.cep)
            form.append('logradouro', value.logradouro)
            form.append('numero', value.numero)
            form.append('bairro', value.bairro)
            form.append('cidade', value.cidade)
            form.append('uf', value.uf)
            form.append('foto_temp', {
                name: 'UploadFoto',
                type: uploadFoto.type+'/'+ext[ext.length - 1],
                uri: uploadFoto.uri,
            })
            form.append('ext', ext[ext.length - 1])
            NovoCadastro(setMensagem, form)
        }else{
            NovoCadastro(setMensagem, value)
        }
        value.data_nascimento = moment(value.data_nascimento, 'DD/MM/yyyy')
    }

    useEffect(()=>{
        if(mensagem != ''){  
            setReady(true)
        }
    });

    const { handleChange, handleBlur, handleSubmit, setFieldValue, errors, touched, values } = useFormik({
        initialValues:{
        id: '', nome: dadosGoogle != undefined ? dadosGoogle.name : '', user_name: '', email: dadosGoogle != undefined ? dadosGoogle.name : '', senha: '',
        data_nascimento: data, telefone: '',
        cep: '', logradouro: '', numero: '', bairro: '',
        cidade: '', uf: '', foto_temp: ''
    },
    //validationSchema: validation ,
    onSubmit: values => salvar(values)
    });

    if(ready == true){
        navigation.setOptions({headerShown: false})
        return( 
            <View style={estilo.check}>
                <Text style={[estilo.mensagem, mensagem == undefined && estilo.errorMensagem]}>{mensagem == undefined ? 'Não foi possivel salvar!': mensagem}</Text>
                <LottieView
                    source={mensagem == undefined ? require('../../../assets/animation/errorUser.json') : require('../../../assets/animation/checkUser.json')}
                    autoPlay
                    loop={false}
                    onAnimationFinish={() => {
                        mensagem == undefined ?
                        esconder()
                        :
                        navigation.reset({
                            index: 0,
                            routes: [{ name: 'Login' }]
                        })  
                    }}
                    style={estilo.animation}
                />
            </View>
        );
    }
    
    return (
        <Animated.View style={[estilo.container, {opacity: fade}, indicador == 0 && estilo.containerDark]}>
            {(()=>{
                switch(indicador){
                    case 0:
                        return (
                            <View>
                                <View style={estilo.intro}>
                                    <Text style={estilo.boasVindas}>Seja Bem Vindo ao Lio!</Text>
                                    <Text style={estilo.desc}>Aqui você encontra tudo aquilo que te agrada</Text>
                                    <Text style={estilo.desc}>Vamos fazer seu cadastro pra prosseguir com sua navegação no app</Text>
                                    <Text style={estilo.desc}>Clique no botão abaixo para continuar</Text>
                                    <RectButton
                                        style={estilo.botaoContinuar}
                                        onPress={()=> setIndicador(1)}
                                    >
                                        <Icon name='chevron-right' size={30} color='white'/>
                                    </RectButton>
                                </View>
                                <View style={estilo.effect1}></View>
                                <View style={estilo.effect2}>
                                    <View style={estilo.effect3}></View>
                                </View>
                            </View>
                        )
                    case 1:
                        return (
                            <ScrollView style={estilo.subContainer}>
                                <View >
                                    <Text style={estilo.title}>Informações Pessoais</Text>
                                    <Text style={estilo.subTitle}>Informe seu nome, sua data de nascimento e escolha um nome de usuario para podermos te identificar melhor.</Text>
                                </View>
                                <View sttyle={estilo.form}>
                                    <View style={estilo.row}>
                                        <View style={estilo.col}>
                                            <View style={estilo.cardLabel}>
                                                <Text style={estilo.label}>Nome</Text>
                                                <Text style={estilo.obrigatorio}>*</Text>
                                            </View>
                                            <TextInput 
                                                style={[estilo.input, focado == 'nome' && estilo.inputAtivo]}
                                                value={values.nome}
                                                onBlur={handleBlur('nome')}
                                                onFocus={() => setFocado('nome')}
                                                onChangeText={handleChange('nome')}
                                            />
                                        </View>
                                    </View>
                                    <View style={estilo.row}>
                                        <View style={estilo.col}>
                                            <View style={estilo.cardLabel}>
                                                <Text style={estilo.label}>Data de Nascimento</Text>
                                                <Text style={estilo.obrigatorio}>*</Text>
                                            </View>
                                            {errors.data_nascimento && touched.data_nascimento && <Text style={estilo.error}>{errors.data_nascimento}</Text>}
                                            <TouchableOpacity
                                                onPress={() => setShowData(true)}
                                                style={[estilo.input, focado == 'data_nascimento' && estilo.inputAtivo]}
                                            >
                                                <Text style={estilo.textInputData}>{moment(data).format('DD/MM/yyyy')}</Text>
                                            </TouchableOpacity>
                                            {showData == true &&
                                                <DateTimePicker
                                                    mode='date'
                                                    dateFormat='day month year'
                                                    value={values.data_nascimento}
                                                    onChange={mudarData}
                                                />
                                            }
                                        </View>
                                    </View>
                                    <View style={estilo.row}>
                                        <View style={estilo.col}>
                                        <View style={estilo.cardLabel}>
                                                <Text style={estilo.label}>Telefone</Text>
                                                <Text style={estilo.obrigatorio}>*</Text>
                                            </View>
                                            <TextInputMask
                                                style={[estilo.input, focado == 'telefone' && estilo.inputAtivo]}
                                                type={'cel-phone'}
                                                options={{
                                                    maskType: 'BRL',
                                                    withDDD: true,
                                                    dddMask: '(99) '
                                                }}
                                                keyboardType='numeric'
                                                value={values.telefone}
                                                onBlur={handleBlur('telefone')}
                                                onFocus={() => setFocado('telefone')}
                                                onChangeText={handleChange('telefone')}
                                            />
                                        </View>
                                    </View>
                                    <View style={estilo.row}>
                                        <View style={estilo.col}>
                                            <View style={estilo.cardLabel}>
                                                <Text style={estilo.label}>Nome de Usuário</Text>
                                                <Text style={estilo.obrigatorio}>*</Text>
                                            </View>
                                            <TextInput 
                                                style={[estilo.input, focado == 'user_name' && estilo.inputAtivo]}
                                                placeholder='@Castilho_2021'
                                                value={values.user_name}
                                                onBlur={handleBlur('user_name')}
                                                onFocus={() => setFocado('user_name')}
                                                onChangeText={handleChange('user_name')}
                                            />
                                        </View>
                                    </View>
                                    <View style={estilo.row}>
                                        <View style={estilo.col}>
                                            <Text style={estilo.label}>Foto:</Text>
                                            <View style={estilo.rowFoto}>
                                                <TouchableOpacity
                                                    style={estilo.botaoFoto}
                                                    onPress={CallbackFoto}
                                                >
                                                    <LinearGradient
                                                        colors={['rgb(0, 220, 130)', 'rgb(0, 180, 180)']}
                                                        start={{ x: 0.7, y: 0 }}
                                                        style={[estilo.botaoFoto, estilo.botaoProximo]}
                                                    >
                                                        <Text style={estilo.textFoto}>Escolha sua foto</Text>
                                                    </LinearGradient>
                                                </TouchableOpacity>
                                                <View style={estilo.col}>
                                                    <View style={[estilo.input, focado == 'foto' && estilo.inputAtivo]}>
                                                        <Text style={estilo.textInputData}>{uploadFoto != '' && '1 arquivo'}</Text>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                    <View >
                                        <Text style={estilo.title}>Login</Text>
                                        <Text style={estilo.subTitle}>Informe seu endereço de email e crie uma senha para fazer login no app.</Text>
                                    </View>
                                    <View style={estilo.row}>
                                        <View style={estilo.col}>
                                        <View style={estilo.cardLabel}>
                                                <Text style={estilo.label}>E-mail</Text>
                                                <Text style={estilo.obrigatorio}>*</Text>
                                            </View>
                                            <TextInput 
                                                style={[estilo.input, focado == 'email' && estilo.inputAtivo]}
                                                autoCompleteType='email'
                                                autoCapitalize='none'
                                                value={values.email}
                                                onBlur={handleBlur('email')}
                                                onFocus={() => setFocado('email')}
                                                onChangeText={handleChange('email')}
                                            />
                                        </View>
                                    </View>
                                    <View style={estilo.row}>
                                        <View style={estilo.col}>
                                        <View style={estilo.cardLabel}>
                                                <Text style={estilo.label}>Senha</Text>
                                                <Text style={estilo.obrigatorio}>*</Text>
                                            </View>
                                            <TextInput 
                                                style={[estilo.input, focado == 'senha' && estilo.inputAtivo]}
                                                textContentType={'password'}
                                                secureTextEntry={true}
                                                value={values.senha}
                                                onBlur={handleBlur('senha')}
                                                onFocus={() => setFocado('senha')}
                                                onChangeText={handleChange('senha')}
                                            />
                                        </View>
                                    </View>
                                </View>
                            </ScrollView>
                        )
                    case 2:
                        return (
                            <ScrollView style={estilo.subContainer}>
                                <View >
                                    <Text style={estilo.title}>Endereço</Text>
                                    <Text style={estilo.subTitle}>Por fim, diga-nos onde você mora para facilitar o procura por seus conhecidos. Essa parte Não e obrigatória, portanto você pode escolher preenche-la ou não.</Text>
                                </View>
                                <View sytle={estilo.form}>
                                    <View style={estilo.row}>
                                        <View style={estilo.col}>
                                            <Text style={estilo.label}>Cep</Text>
                                            <TextInputMask
                                                style={[estilo.input, focado == 'cep' && estilo.inputAtivo]}
                                                keyboardType='numeric'
                                                type={'zip-code'}
                                                value={values.cep}
                                                onBlur={handleBlur('cep')}
                                                onFocus={() => setFocado('cep')}
                                                onChangeText={handleChange('cep')}
                                            />
                                        </View>
                                    </View>
                                    <View style={estilo.row}>
                                        <View style={estilo.col}>
                                            <Text style={estilo.label}>Logradouro</Text>
                                            <TextInput 
                                                style={[estilo.input, focado == 'logradouro' && estilo.inputAtivo]}
                                                value={values.logradouro}
                                                onBlur={handleBlur('logradouro')}
                                                onFocus={() => setFocado('logradouro')}
                                                onChangeText={handleChange('logradouro')}
                                            />
                                        </View>
                                    </View>
                                    <View style={estilo.row}>
                                        <View style={estilo.col}>
                                            <Text style={estilo.label}>Número</Text>
                                            <TextInput 
                                                style={[estilo.input, focado == 'numero' && estilo.inputAtivo]}
                                                keyboardType='numeric'
                                                value={values.numero}
                                                onBlur={handleBlur('numero')}
                                                onFocus={() => setFocado('numero')}
                                                onChangeText={handleChange('numero')}
                                            />
                                        </View>
                                        <View style={estilo.col}>
                                            <Text style={estilo.label}>Complemento</Text>
                                            <TextInput 
                                                style={[estilo.input, focado == 'complemento' && estilo.inputAtivo]}
                                                value={values.complemento}
                                                onBlur={handleBlur('complemento')}
                                                onFocus={() => setFocado('complemento')}
                                                onChangeText={handleChange('complemento')}
                                            />
                                        </View>
                                    </View>
                                    <View style={estilo.row}>
                                        <View style={estilo.col}>
                                            <Text style={estilo.label}>Bairro</Text>
                                            <TextInput 
                                                style={[estilo.input, focado == 'bairro' && estilo.inputAtivo]}
                                                value={values.bairro}
                                                onBlur={handleBlur('bairro')}
                                                onFocus={() => setFocado('bairro')}
                                                onChangeText={handleChange('bairro')}
                                            />
                                        </View>
                                        <View style={estilo.col}>
                                            <Text style={estilo.label}>Cidade</Text>
                                            <TextInput 
                                                style={[estilo.input, focado == 'cidade' && estilo.inputAtivo]}
                                                value={values.cidade}
                                                onBlur={handleBlur('cidade')}
                                                onFocus={() => setFocado('cidade')}
                                                onChangeText={handleChange('cidade')}
                                            />
                                        </View>
                                    </View>
                                    <View style={estilo.row}>
                                        <View style={estilo.col}>
                                            <Text style={estilo.label}>Estado:</Text>
                                            <View style={[estilo.input, focado == 'email' && estilo.inputAtivo]}>
                                                <RNPickerSelect
                                                    placeholder={values.uf == "" ? { label: 'Selecione...', value: null } : { label: values.uf, value: values.uf }}
                                                    onValueChange={handleChange('uf')}
                                                    onFocus={() => setFocado('uf')}
                                                    value={values.uf}
                                                    items={uf}
                                                    useNativeAndroidPickerStyle={false}
                                                />
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </ScrollView>
                        )
                        case 3:
                            return(
                                <ScrollView style={estilo.subContainer}>
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
                                    <View>
                                        <Text style={estilo.title}>Termos de Uso e Política de privacidade</Text>
                                        <Text style={estilo.subTitle}>Esses são os termos de uso e Políticas de privacidade propostos pelo lio, leia e aceite os termos para poder concluir seu cadastro.</Text>
                                    </View>
                                    <View>
                                        <Politicas />
                                        <Text style={estilo.subTitle}>Você concordo com os termos de uso e com as políticas de privacidade oferecida pelo Lio?</Text>
                                    </View>
                                    <View style={estilo.cardCheckbox}>
                                        <TouchableOpacity 
                                            style={estilo.cardCheckbox}
                                            onPress={() => setTipo('concordo')}
                                        >
                                            <TouchableOpacity 
                                                style={[estilo.checkbox, tipo == 'concordo' && estilo.boxSelected]}
                                                onPress={() => setTipo('concordo')}
                                            >
                                                {tipo == 'concordo' && 
                                                    <View style={estilo.selected}>
                                                        <Icon name='check' size={15} color='white'/>
                                                    </View>
                                                }
                                            </TouchableOpacity>
                                            <Text style={estilo.textCheckbox}>Concordo</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity 
                                            style={estilo.cardCheckbox}
                                            onPress={() => setTipo('discordo')}
                                        >
                                            <TouchableOpacity 
                                                style={[estilo.checkbox, tipo == 'discordo' && estilo.boxSelected]}
                                                onPress={() => setTipo('discordo')}
                                            >
                                                {tipo == 'discordo' && 
                                                    <View style={estilo.selected}>
                                                        <Icon name='times' size={15} color='white'/>
                                                    </View>
                                                }
                                            </TouchableOpacity>
                                            <Text style={estilo.textCheckbox}>Discordo</Text>
                                        </TouchableOpacity>
                                    </View>
                                </ScrollView>
                            )
                }
            })()}
            <View style={estilo.cardBotoes}>
                {indicador > 0 &&
                    <TouchableOpacity 
                        onPress={() => voltar()}
                    >
                        <LinearGradient
                            colors={['rgb(0, 220, 130)', 'rgb(0, 180, 180)']}
                            start={{ x: 0.7, y: 0 }}
                            style={estilo.botao }
                        >
                            <View style={estilo.botaoVoltar}>
                                <Text style={estilo.textVoltar}>Voltar</Text>
                            </View>
                        </LinearGradient>
                    </TouchableOpacity>
                }
                {indicador >= 1 && indicador < 3 ?
                    <TouchableOpacity
                        onPress={() => proximo()}
                    >
                        <LinearGradient
                            colors={['rgb(0, 220, 130)', 'rgb(0, 180, 180)']}
                            start={{ x: 0.7, y: 0 }}
                            style={[estilo.botao, estilo.botaoProximo]}
                        >
                            <Text style={estilo.textProximo}>Proximo</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                :
                indicador == 3 &&
                    <TouchableOpacity
                        disabled={tipo == '' || tipo == 'discordo' ? true : false}
                        onPress={handleSubmit}
                    >
                        <LinearGradient
                            colors={['rgb(0, 220, 130)', 'rgb(0, 180, 180)']}
                            start={{ x: 0.7, y: 0 }}
                            style={tipo == '' || tipo == 'discordo' ? estilo.botaoInativo :estilo.botao}
                        >
                            <View style={ tipo == '' || tipo == 'discordo' ? estilo.botaoCadastrarInativo : estilo.botaoCadastrar}>
                                <Text style={estilo.textCadastrar}>Salvar</Text>
                                <Icon name='save' size={20} color='white'/>
                            </View>
                        </LinearGradient>
                    </TouchableOpacity>
                }
            </View>
        </Animated.View>
    )
}

export default Cadastrar;