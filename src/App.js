import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Qual from './components/Info/Qual';
import UserInfo from './components/UserInfo/UserInfo';

function App() {
  return (
    <div className="app">
      <Header/>
      <UserInfo/>
      <Qual/>
    </div>
  );
}

export default App;
