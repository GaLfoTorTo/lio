import React from 'react';
import { View, Image } from 'react-native';
import estilo from './estilo';
import * as Google from 'expo-google-app-auth';

const Loading = ({ navigation }) => {

    async function signInWithGoogleAsync() {
        try {
            const result = await Google.logInAsync({
                androidClientId: '478462940609-nti08e0und47b2ri1a7oamk5fcttrnae.apps.googleusercontent.com',
                //iosClientId: YOUR_CLIENT_ID_HERE,
                scopes: ['profile', 'email'],
            });

            if (result.type === 'success') {
                const dadosGoogle = result;
                let ir = () => navigation.replace('Home', {dadosGoogle});
                return result.accessToken, ir();
            } else {
                let ir = () => navigation.replace('Login', { cancelled: true });
                return ir();
            }
        } catch (e) {
            return { error: true };
        }
    }
     
    setTimeout(() => {
        signInWithGoogleAsync(this)
    }, 500)

    
    return (
        <View style={estilo.loading}>
            <Image
                source={require('../../../assets/images/loading.gif')}
                style={estilo.gif}
            />
        </View>
    )
}

export default Loading;