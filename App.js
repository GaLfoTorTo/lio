import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './src/Components/Pages/Login/Login';
import Home from './src/Components/Navegacao/Home/Home'
import Loading from './src/Components/Navegacao/Loading/Loading';

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Login'
        screenOptions={{
          headerStyle: {
            backgroundColor: 'rgb(0,220, 130)'
          }
        }}
      >
        <Stack.Screen 
          name='Login'
          component={Login}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name='Home'
          component={Home}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name='Loading'
          component={Loading}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


