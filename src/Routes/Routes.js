import React, {useEffect, useMemo, useReducer} from 'react' ;
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthContext} from '../Components/AuthContext';
import { getUsuario, removerUsuario } from '../Storage/Storage';
import Login from '../Pages/Login/Login';
import Home from './Home/Home'
import Cadastrar from '../Pages/Cadastrar/Cadastrar';

const Stack = createStackNavigator();

const Routes = ({navigation}) => {

    const initialState = {
        usuario: null
    }

    const reducer = (prev, action) => {
        switch(action.type){
            case 'LOGAR':
                return {
                    ...prev,
                    usuario: action.usuario
                }
            case 'LOGOUT':
                return {
                    ...prev,
                    usuario: null 
                }
        }
    }

    const [loginState, dispatch] = useReducer(reducer, initialState)
    const state = useMemo(() => ({
        signIn: () => {
            const usuario = async () =>{
                const data = await getUsuario()
                dispatch({type: 'LOGAR', usuario: data.usuario})
            }
            usuario();
        },
        signOut: () => {
            const remove = async () => {
                const data = await removerUsuario()
                dispatch({type: 'LOGOUT'})
            }
            remove();
        }
    }))

    useEffect(() => {
        const usuario = async () => {
            const data = await getUsuario()
            dispatch({type: 'LOGAR', usuario: data.usuario})
        }
        usuario()
    },[])
    return (
        <AuthContext.Provider value={state}>
            <NavigationContainer>
                {loginState.usuario == null ? (
                    <Stack.Navigator>
                        <Stack.Screen 
                        name='Login'
                        component={Login}
                        options={{
                            headerShown: false
                        }}
                        />
                        <Stack.Screen
                        name='Cadastrar'
                        component={Cadastrar}
                        options={{
                            headerStyle: {
                                backgroundColor: 'rgb(0,220, 130)'
                            },
                            title: false
                        }}
                        />
                    </Stack.Navigator>
                ):(
                    <Stack.Navigator
                    screenOptions={{
                        headerStyle: {
                            backgroundColor: 'rgb(0,220, 130)'
                            }
                        }}
                    >
                        <Stack.Screen
                        name='Home'
                        component={Home}
                        options={{
                            headerShown: false
                        }}
                        />
                </Stack.Navigator>
                )}
            </NavigationContainer>
        </AuthContext.Provider>
    )
}

export default Routes;