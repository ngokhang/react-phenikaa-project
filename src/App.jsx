import { Layout } from 'antd';
import React from 'react';
import './App.scss';
import ContentContainer from './Layouts/Content';
import HeaderLayout from './Layouts/Header';
function App() {
  return (
    <Layout>
      <HeaderLayout />
      <ContentContainer />
    </Layout>
  );
}

export default App;
