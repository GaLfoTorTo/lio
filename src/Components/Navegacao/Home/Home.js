import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Feed from '../../Pages/Feed/Feed';
import Perfil from '../../Pages/Perfil/Perfil';
import Foto from '../../Pages/Feed/Foto/Foto';
import Tab from '../Tab/Tab';
import Post from '../../Pages/Post/Post';
import Drawer from '../../Navegacao/Drawer/Drawer';

const Stack = createStackNavigator();

const Home = () => {

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
        options={{
          title: null
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