import React from 'react';
import './App.css';
import Routing from './components/Routes';
import { Provider } from 'react-redux';
import store from './reduxstore/store.js';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
     
      <main>
        <Routing />
      </main>
    </div>
    </Provider>
  );
}

export default App;