import React from 'react';
import {View, Text, TextInput, TouchableOpacity, Image, ScrollView} from 'react-native';
import estilo from './estilo';

const Chat = ({navigation, route}) => {

    const dadosUsuario = route.params.item

    return(
        <View>
            <ScrollView style={estilo.scroll}>
                <View>

                </View>
            </ScrollView>
            <View></View>
        </View>
    )
}

export default Chat;