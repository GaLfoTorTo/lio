import React, { useEffect, useState } from 'react';
import {View, Text, ScrollView, FlatList, TouchableOpacity, Image} from 'react-native';
import Dados from '../api/Dados'
import estilo from './estilo'

const Feed = () => {

    const [posts, setPosts ] = useState('');
    
    useEffect(() =>{
        Dados(setPosts)
    }, [])

    return(
        <ScrollView style={estilo.container}>
            <View>
                <FlatList
                    data={posts}
                    keyExtractor={(item,index) => index.toString()}
                    renderItem={({item}) => (
                        <View style={estilo.subContainer}>
                            <TouchableOpacity>
                                <Image 
                                    source={{uri: item.image}}
                                    style={estilo.imagem1}
                                />
                                <Text style={{color: 'white'}}>ADSGNÇNnçangdas</Text>
                            </TouchableOpacity>
                            
                            <TouchableOpacity>
                                <Image
                                    source={{uri: item.image}}
                                    style={estilo.imagem2}
                                />
                                <Text style={{ color: 'white' }}>adshgafdshgsdfhfsdhsfdh</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                    
                />
            </View>
        </ScrollView>
    )
}

export default Feed;