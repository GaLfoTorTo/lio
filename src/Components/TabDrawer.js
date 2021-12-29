import React, { useState } from 'react';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Conversas from './Conversas/Conversas';
import Explore from './Explore/Explore';

const TabDrawer = () => {

    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'conversas', title: 'Conversas' },
        { key: 'explore', title: 'Explore' },
    ]);

    const renderScene = SceneMap({
        conversas: Conversas,
        explore: Explore,
    });

    const styleTab = props => (
        <TabBar
          {...props}
          indicatorStyle={{ backgroundColor: 'rgb(0, 220, 180)' }}
          style={{ backgroundColor: 'black' }}
          activeColor='rgb(0,220,180)'
        />
      );

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      renderTabBar={styleTab}
    />
  );
}

export default TabDrawer