import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Perfil from '../../Pages/Perfil/Perfil';
import Foto from '../../Pages/Feed/Foto/Foto'
import Post from '../../Pages/Post/Post';
import Drawer from '../../Navegacao/Drawer/Drawer';
import ButtonDrawer from './buttonDrawer/ButtonDrawer';

const Stack = createStackNavigator();

const Home = ({ route }) => {
  const dadosConvidado = {
    user: {
      name: 'Convidado',
      givenName: 'Convidado',
      familyName: '',
      photoUrl: 'assets/images/logo.png',
      email: ''
    }
  }

  const dados = () => {

    if (typeof route.params === 'object') {
      const dadosGoogle = route.params.dadosGoogle;
      return dadosGoogle;

    } else {
      const dadosGoogle = dadosConvidado;
      return dadosGoogle;
    }
  }

  return(
    <Stack.Navigator
        initialRouteName='Feed'
        screenOptions={{
          headerStyle: {
            backgroundColor: 'rgb(0,220, 130)',
            //height: 50
          }
        }}
    >
      <Stack.Screen
        name='Feed'
        component={Drawer}
        initialParams={{dados: dados()}}
        options={{
          title: null,
          headerRight: (props) => (<ButtonDrawer {...props} />),
        }}
      />
      <Stack.Screen
        name='Perfil'
        component={Perfil}
      />
      <Stack.Screen
        name='Foto'
        component={Foto}
      />
      <Stack.Screen
        name='Post'
        component={Post}
        options={{
          headerStyle: {
            backgroundColor: 'rgb(0,220, 130)',
            height: 37
          },
          title: null
        }}
      />
    </Stack.Navigator>
  )
}

export default Home;