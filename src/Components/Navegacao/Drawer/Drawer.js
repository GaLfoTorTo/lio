import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Feather';
import Chat from '../../Pages/Chat/Chat';
import Tab from '../Tab/Tab';
import { Conversas } from './Conversas';

const DrawerNavigator = createDrawerNavigator();

const Drawer = ({navigation}) => {
    return(
        <DrawerNavigator.Navigator
            drawerContent={props => <Conversas {...props} />}
            screenOptions={{}}
            drawerPosition={'right'}
            drawerStyle={{
                backgroundColor: 'rgb(0 ,0, 0)'
            }}
        >
            <DrawerNavigator.Screen 
                name='Tab' 
                component={Tab}
                
            />
            <DrawerNavigator.Screen name='Chat' component={Chat} />
        </DrawerNavigator.Navigator>
    )
}

export default Drawer;