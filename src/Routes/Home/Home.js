import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Perfil from '../../Pages/Perfil/Perfil';
import Foto from '../../Pages/Foto/Foto'
import Post from '../../Pages/Post/Post';
import Drawer from '../../Routes/Drawer/Drawer';
import ButtonDrawerMenu from '../../Components/ButtonDrawerMenu/ButtonDrawerMenu';
import ButtonDrawerChat from '../../Components/ButtonDrawer/ButtonDrawerChat';
import Chat from '../../Pages/Chat/Chat';

const Stack = createStackNavigator();

const Home = ({ route, navigation }) => {

  return(
    <Stack.Navigator
        initialRouteName='Feed'
        screenOptions={{
          headerStyle: {
            backgroundColor: 'rgb(0,220, 130)',
          }
        }}
    >
      <Stack.Screen
        name='Feed'
        component={Drawer}
        options={{
          title: null,
          headerLeft: (props) => (<ButtonDrawerMenu {...props} navigation={navigation} />),
          headerRight: (props) => (<ButtonDrawerChat {...props} navigation={navigation} />),
        }}
      />
      <Stack.Screen
        name='Perfil'
        component={Perfil}
      />
      <Stack.Screen
        name='Foto'
        component={Foto}
        options={{
          title: false
        }}
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
      <Stack.Screen 
        name='Chat'
        component={Chat}
        options={{
          headerStyle: {
            backgroundColor: 'rgb(0,0,0)',
          },
          headerTintColor: 'rgb(255, 255, 255)',
          headerTitleStyle: {
            fontSize: 18,
            marginLeft: 15
          },
        }}
      />
    </Stack.Navigator>
  )
}

export default Home;