import { Col, Row } from 'antd';
import { Header } from 'antd/es/layout/layout';
import React from 'react';
import HeaderCart from '../../components/HeaderCart';
import HeaderLogo from '../../components/HeaderLogo';
import SearchBar from '../../components/SearchBar';
import Logout from '../../pages/Authentication/components/Logout';
import { ColActions, RowActions } from './style';

function HeaderLayout(props) {
  return (
    <Header style={{ backgroundColor: 'white' }}>
      <Row className="container">
        <Col xs={24} md={10} className="left">
          <Row gutter={40}>
            <HeaderLogo />
            <HeaderNavigation />
          </Row>
        </Col>
        <Col xs={24} md={14} className="right">
          <RowActions>
            <ColActions xs={18} md={12}>
              <SearchBar />
              <Logout />
              <HeaderCart />
            </ColActions>
          </RowActions>
        </Col>
      </Row>
    </Header>
  );
}

export default HeaderLayout;
