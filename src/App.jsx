import { Layout } from 'antd';
import React, { useState } from 'react';
import './App.scss';
import HeaderLayout from './Layouts/Header';
import LoginContext from './utils/LoginContext';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <LoginContext.Provider value={isLogin}>
      <Layout>
        <HeaderLayout />
      </Layout>
    </LoginContext.Provider>
  );
}

export default App;
