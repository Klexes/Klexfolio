import React from 'react';
import './App.css';
import Card from './components/Card/Card';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Qual from './components/Info/Qual';
import UserInfo from './components/UserInfo/UserInfo';

function App() {
  return (
    <div className="app">
      <Header/>
      <UserInfo/>
      <Qual/>
      <div className="app__card">
        <div className="app__header">
          <h1>Projects</h1>
          <p>Here are the few projects I've worked On.</p>
        </div>
        <div className="app__projects">
        <Card/>
        <Card/>
        <Card/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
