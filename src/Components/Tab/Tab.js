import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feed from '../Pages/Feed/Feed';
import Icon from 'react-native-vector-icons/Feather'
import Notificacoes from '../Pages/Notificacoes/Notificacoes';

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
                case 'Notificacoes':
                  iconName = 'bell';
                  break;
                default:
                  iconName = 'circle';
                  break;
              }
        
              return <Icon name={iconName} size={size} color={color}  options={{title: ''}}/>;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'black',
            inactiveTintColor: 'rgb(80, 80, 80)',
            showLabel: false,
            style: {
              backgroundColor: 'rgb(0,220, 130)',
              borderRadius: 40,
              zIndex: 1,
              position: 'absolute',
              bottom: 20,
              left: 40,
              width: '80%',
              safeAreaInset: {}
            }
          }}  
        >
          
          <NavegacaoTabs.Screen name="Feed" component={Feed} navigation={navigation}  options={{title: 'Feed'}}/>
          <NavegacaoTabs.Screen name="Notificacoes" component={Notificacoes, idFoto} options={{title: 'Notificações'}}/>
        </NavegacaoTabs.Navigator>
    )
}
export default Tab;