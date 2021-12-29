import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Tab from '../Tab/Tab';
import { Conversas } from '../../Components/Conversas';
import Menu from '../../Components/Menu/Menu';
import TabDrawer from '../../Components/TabDrawer';

const DrawerNavigator = createDrawerNavigator();

export const Drawer = ({ navigation, route, ...props}) => {
    return(
        <DrawerNavigator.Navigator
            drawerContent={(props) => <Menu {...props}/>}
            edgeWidth={200}
            drawerStyle={{
                backgroundColor: 'rgb(0 ,0, 0)'
            }}
            key={'leftDrawer'}
        >
            <DrawerNavigator.Screen 
                name='DrawerRight' 
                component={DrawerRight}
            />
        </DrawerNavigator.Navigator>
    )
}

const DrawerRight = ({navigation, route, ...props}) => {
    
    return(
        <DrawerNavigator.Navigator
            drawerContent={(props) => <TabDrawer {...props}/>}
            drawerPosition={'right'}
            edgeWidth={200}
            drawerStyle={{
                backgroundColor: 'rgb(0 ,0, 0)'
            }}
            drawerType={'back'}
        >
            <DrawerNavigator.Screen 
                name='Tab' 
                component={Tab}
            />
        </DrawerNavigator.Navigator>
    )
}

export default Drawer;