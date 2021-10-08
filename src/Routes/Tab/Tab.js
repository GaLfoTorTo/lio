import React, { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import Notificacoes from '../../Pages/Notificacoes/Notificacoes';
import loading from '../../Pages/Post/loadingCamera';
import IconPlus from './IconPlus/IconPlus';
import Feed from '../../Pages/Feed/Feed';
import { useDispatch, useSelector } from 'react-redux';
import { DrawerActions } from '@react-navigation/routers';
import { actions } from '../../Components/Redux/DrawerConfig';


const NavegacaoTabs = createBottomTabNavigator();

const Tab = ({navigation}) => {

  const icone = () => ({
    tabBarIcon: ({ tintColor }) => (
      <IconPlus />
      )
    })

    const rightDrawer = useSelector((state) => state.reducer.rightDrawer);
    const dispatch = useDispatch();

    useEffect(() => {
        if (rightDrawer === 'toggle') {
            navigation.dispatch(DrawerActions.toggleDrawer());
            dispatch(actions.resetLeftDrawer());
        }
    }, [rightDrawer === 'toggle']);

    return(
        <NavegacaoTabs.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;
        
              switch (route.name) {
                case 'Feed':
                  iconName = 'home';
                  break;
                case 'Post':
                  iconName = 'plus';
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
          
          <NavegacaoTabs.Screen 
            name="Feed"
            component={Feed}
            navigation={navigation}
            />
          <NavegacaoTabs.Screen 
            name="Post" 
            component={loading}
            navigation={navigation}
            options={icone}
            />
          <NavegacaoTabs.Screen name="Notificacoes" component={Notificacoes} options={{title: 'Notificações'}}/>
        </NavegacaoTabs.Navigator>
    )
}

export default Tab;