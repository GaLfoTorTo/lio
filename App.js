import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './src/Components/Pages/Login/Login';
import Feed from './src/Components/Pages/Feed/Feed';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}


