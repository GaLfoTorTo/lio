import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Chat from '../Chat/Chat';

const DrawerNavigator = createDrawerNavigator();

const Drawer = ({navigation}) => {
    return(
        <DrawerNavigator.Navigator>
            <DrawerNavigator.Screen name='Chat' component={Chat}/>
        </DrawerNavigator.Navigator>
    )
}

export default Drawer;