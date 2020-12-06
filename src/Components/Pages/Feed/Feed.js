import React from 'react';
import {View, Text, ScrollView, FlatList, TouchableOpacity, Image} from 'react-native';

import estilo from './estilo'

const Feed = () => {
    return(
        <ScrollView style={estilo.container}>
            <View style={estilo.subContainer}>
                <TouchableOpacity>
                    <Image 
                        source={require('../../../../assets/images/imgFoto3.jpg')}
                        style={estilo.imagem1}
                    />
                    <Text style={{color: 'white'}}>ADSGNÇNnçangdas</Text>
                </TouchableOpacity>
                
                <TouchableOpacity>
                    <Image
                        source={require('../../../../assets/images/imgFoto3.jpg')}
                        style={estilo.imagem2}
                    />
                    <Text style={{ color: 'white' }}>adshgafdshgsdfhfsdhsfdh</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        source={require('../../../../assets/images/imgFoto3.jpg')}
                        style={estilo.imagem3}
                    />
                    <Text style={{ color: 'white' }}>adshgafdshgsdfhfsdhsfdh</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default Feed;