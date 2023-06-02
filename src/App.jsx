import { Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';
import React from 'react';
import './App.scss';
import HeaderLayout from './Layouts/Header';
import SignIn from './pages/Authentication/components/Signin';

function App() {
  return (
    <Layout>
      <SignIn/>
      <HeaderLayout />
    </Layout>
  );
}

export default App;
