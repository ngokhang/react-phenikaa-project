import { Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';
import React from 'react';
import './App.scss';
import HeaderLayout from './Layouts/Header';

function App() {
  return (
    <Layout>
      <HeaderLayout />
    </Layout>
  );
}

export default App;
