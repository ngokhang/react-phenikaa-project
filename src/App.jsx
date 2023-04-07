import { Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';
import React from 'react';
import './App.scss';
import HeaderLayout from './Layouts/Header';
import Login from './pages/Authentication/components/Login';

function App() {
  return (
    <Login/>
    // <Layout>
    //   <HeaderLayout />
    // </Layout>
  );
}

export default App;
