import React, { useEffect, useState, useRef } from 'react';
import { View, Text, TouchableOpacity, Modal,ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { LinearGradient} from 'expo-linear-gradient';
import { Camera } from 'expo-camera';
import estilo from './estilo';

const Post = ({navigation}) => {
    const camRef = useRef(null);
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back); 
    const [capFoto, SetCapFoto] = useState(null);
    const [open, setOpen] = useState(false);

    useEffect(()=>{
        (async () => {
            const {status} = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    },[])
    if (hasPermission === null){
        return <View/>
    }
    if (hasPermission === false){
        return <Text style={estilo.negado}>Acecsso Negado</Text>
    }

    async function takePicture(){
        if(camRef){
            const data = await camRef.current.takePictureAsync();
            SetCapFoto(data.uri);
            setOpen(true);
        }
    }

    return(
        <View style={estilo.container}>
            <Camera
                style={estilo.camera}
                type={type}
                ref={camRef}
            >
                <TouchableOpacity
                    onPress={()=> navigation.replace('Home')}
                >
                    <Icon name='arrow-left' size={40} style={estilo.voltar}/>
                </TouchableOpacity>
                <View style={estilo.barra}>
                    <TouchableOpacity 
                        style={estilo.inverter}
                    >
                        <Icon name='settings' size={32} style={estilo.iconeInverter} />
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={ takePicture }
                    >
                        <LinearGradient 
                            colors={['rgb(0, 220, 130)', 'rgb(0, 180, 180)']}
                            end={{ x: 0, y: 1 }}
                            style={estilo.tirarFoto}
                        >
                            <View style={estilo.botao}></View>
                        </LinearGradient>
                    </TouchableOpacity>
                    {capFoto &&
                        <Modal
                            animationType='fade'
                            transparent={true}
                            visible={open}
                        >
                            <View style={estilo.modal}>
                                <ImageBackground
                                    source={{uri: capFoto}}
                                    style={estilo.foto}                                
                                >
                                    <TouchableOpacity
                                        onPress={() => setOpen(false)}
                                        style={estilo.botaoFechar}>
                                        <Icon name='x' size={40} color={'white'} style={estilo.iconeFechar} />
                                    </TouchableOpacity>
                                </ImageBackground>
                            </View>
                        </Modal>
                    }
                    <TouchableOpacity 
                        style={estilo.inverter}
                        onPress={() => {
                            setType(
                                type === Camera.Constants.Type.back
                                    ? Camera.Constants.Type.front
                                    : Camera.Constants.Type.back
                                );
                        }}
                    >
                        <Icon name='repeat' size={32} style={estilo.iconeInverter}/>
                    </TouchableOpacity>
                </View>
            </Camera>
        </View>
    )
}

export default Post;