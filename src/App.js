import React from 'react';
import './App.css';
import Card from './components/Card/Card';
import Header from './components/Header/Header';
import Qual from './components/Info/Qual';
import UserInfo from './components/UserInfo/UserInfo';

function App() {
  return (
    <div className="app">
      <Header/>
      <UserInfo/>
      <Qual/>
      <Card/>
    </div>
  );
}

export default App;
