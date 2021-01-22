import React from 'react';
import {View, Image} from 'react-native';
import estilo from './estilo';

const loading = ({navigation}) => {

    const goPost = () => {return( navigation.replace('Post'))}
    setTimeout(() => {
        goPost()
    }, 700);
    
    return (
        <View style={estilo.loading}>
            <Image
                source={require('../../../../assets/images/loading.gif')}
                style={estilo.gif}
            />
        </View>
    )
}

export default loading;