import React from 'react';
import 'regenerator-runtime'

import StoreProvider from './store/StoreProvider'

import './App.scss';

const App = () =>(
<StoreProvider>
  <header>Hello World!</header>
</StoreProvider>
)
  
   


export default App;