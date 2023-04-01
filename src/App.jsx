import { Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';

import './App.scss';
import Profile from './pages/Profile';
import Logout from './pages/Authentication/components/Logout';
import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

import { SearchOutlined } from '@ant-design/icons';
import { Button } from 'antd';


function App() {
  return (
    <Layout style={{ padding: '0', backgroundColor: 'white' }}>
      <Content style={{ padding: '0 50px' }} className="contentLayout">
        <Logout />
        <Profile />
      </Content>
    </Layout>
  );
}

export default App;
