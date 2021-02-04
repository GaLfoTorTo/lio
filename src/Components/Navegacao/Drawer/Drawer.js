import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Chat from '../../Pages/Chat/Chat';
import Tab from '../Tab/Tab';
import { Conversas } from './Conversas';

const DrawerNavigator = createDrawerNavigator();

const Drawer = ({navigation, route, ...props}) => {

    const dadosGoogle = route.params.dados

    return(
        <DrawerNavigator.Navigator
            drawerContent={(props) => <Conversas {...props} dadosGoogle={dadosGoogle}/>}
            drawerPosition={'right'}
            edgeWidth={200}
            drawerStyle={{
                backgroundColor: 'rgb(0 ,0, 0)'
            }}
            screenOptions={{
                headerStyle: {
                    backgroundColor: 'rgb(0,0,0)',
                    color: 'white'
                }
            }}
        >
            <DrawerNavigator.Screen 
                name='Tab' 
                component={Tab}
            />
        </DrawerNavigator.Navigator>
    )
}

export default Drawer;