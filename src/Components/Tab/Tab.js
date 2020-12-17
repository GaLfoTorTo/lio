import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feed } from '../../../../contatos-react-native/src/Pages/Feed';
import Perfil from '../Pages/Perfil/Perfil';

const NavegacaoTabs = createBottomTabNavigator();

const Tab = ({navigation}) => {
    return(
        <NavegacaoTabs.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;
        
              switch (route.name) {
                case 'Feed':
                  iconName = 'home';
                  break;
                case 'Perfil':
                  iconName = 'users';
                  break;
                default:
                  iconName = 'circle';
                  break;
              }
        
              return <Icon name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: '#3498db',
            inactiveTintColor: '#777',
            showLabel: false,
          }}  
        >
            <NavegacaoTabs.Screen name="Feed" component={Feed} navigation={navigation} options={{ title: 'Página de feed' }} />
            <NavegacaoTabs.Screen name="Perfil" component={Perfil}/>
        </NavegacaoTabs.Navigator>
    )
}
export default Tab;