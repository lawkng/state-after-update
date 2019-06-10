import React from 'react';
import './App.css';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SelectViewUseEffect } from './components/SelectViewUseEffect';
import SelectViewClassComp from './components/SelectViewClassComp';
import SelectViewReduxChange from './components/SelectViewReduxChange';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <SelectViewUseEffect></SelectViewUseEffect>
      <SelectViewClassComp></SelectViewClassComp>
      <SelectViewReduxChange></SelectViewReduxChange>
      <Footer></Footer>
    </div>
  );
}

export default App;
