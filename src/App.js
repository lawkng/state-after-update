import React from 'react';
import './App.css';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SelectViewUseEffect } from './components/SelectViewUseEffect';
import SelectViewClassComp from './components/SelectViewClassComp';
import SelectViewReduxChange from './components/SelectViewReduxChange';

const test = () => {
  const local = 'This is a test. <strong>{token}</strong>';
  return local.replace('{token}', 'hello');
};

function App() {
  return (
    <div className="App">
      <Header></Header>
      <SelectViewUseEffect></SelectViewUseEffect>
      <SelectViewClassComp></SelectViewClassComp>
      <SelectViewReduxChange></SelectViewReduxChange>
      <div dangerouslySetInnerHTML={{__html: test()}} ></div>
      <Footer></Footer>
    </div>
  );
}

export default App;
