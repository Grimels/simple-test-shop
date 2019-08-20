import React from 'react';
import { Provider } from 'react-redux';

import Navbar from './components/Navbar';
import ItemsList from './components/ItemsList';

import store from './store/store';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div>
        <Navbar />
        <ItemsList />
      </div>
    </Provider>
  );
}

export default App;
