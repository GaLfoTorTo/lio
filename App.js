import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/Components/Redux/DrawerStore';
import Routes from  './src/Routes/Routes';

export default function App() {

  return (
    <Provider store={store} >
      <Routes />
    </Provider>
  );
}