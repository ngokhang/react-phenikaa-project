import { Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';
import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.scss';
import FooterLayout from './Layouts/Footer';
import './assets/styles/index.scss';
import MyHeader from './components/MyHeader';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <Layout>
      <MyHeader />
      <Content style={{ backgroundColor: 'white !important' }}>
        <ToastContainer />
        <Outlet />
      </Content>
      <FooterLayout />

    </Layout>
  );
}

export default App;
