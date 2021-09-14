import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function saveUsuario (usuario, token) {
    try {
        await AsyncStorage.setItem('@lio:usuario', JSON.stringify(usuario))
        await AsyncStorage.setItem('@lio:token', JSON.stringify(token))
    } catch (e) {
        console.warn(e)
    }
}

export async function getUsuario (){
    try {
        const lioUsuario = await AsyncStorage.getItem('@lio:usuario');
        const lioToken = await AsyncStorage.getItem('@lio:token');
        const usuario = lioUsuario != null ? JSON.parse(lioUsuario): null;
        const token = lioToken != null ? JSON.parse(lioToken): null;
        return {usuario, token}
    } catch (e) {
        console.warn(e)
    }
}

export async function removerUsuario(){
    try {
        await AsyncStorage.removeItem('@lio:usuario');
        await AsyncStorage.removeItem('@lio:token');
    } catch (e) {
        console.warn(e)
    }
}