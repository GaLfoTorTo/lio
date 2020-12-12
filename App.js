import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './src/Components/Pages/Login/Login';
import Feed from './src/Components/Pages/Feed/Feed';
import Perfil from './src/Components/Pages/Perfil/Perfil';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}


