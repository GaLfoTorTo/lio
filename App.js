import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './src/Components/Pages/Login/Login';
import Feed from './src/Components/Pages/Feed/Feed';
import Perfil from './src/Components/Pages/Perfil/Perfil';
import Foto from './src/Components/Pages/Feed/Foto/Foto';
import Tab from './src/Components/Tab/Tab';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Login'
        screenOptions={{
          headerShown: true,
          headerStyle: {
            backgroundColor: 'rgb(0,220, 130)'
          },
        }}
      >
        <Stack.Screen
          name='Tab'
          component={Tab}
        />
        <Stack.Screen 
          name='Login'
          component={Login}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name='Feed'
          component={Feed}
        />
        <Stack.Screen 
          name='Perfil'
          component={Perfil}
        />
        <Stack.Screen
          name='Foto'
          component={Foto}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


