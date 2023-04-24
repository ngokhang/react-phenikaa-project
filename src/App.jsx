import { Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';
import React from 'react';
import './App.css';
import './App.scss';
import Header from './components/InputCustom/header';
import Footer from './components/InputCustom/footer';
import MainContent from './components/InputCustom/mainContent';
import Profile from './pages/Profile';


function App() {
  return (
    <div className='container'>
      <Header/>
      <MainContent/>
      <Footer/>
    </div>
  );
}

export default App;
