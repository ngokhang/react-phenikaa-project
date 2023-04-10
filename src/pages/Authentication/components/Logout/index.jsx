import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Col, Dropdown, Row } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './style.scss';
import { MyContext } from '../../../../utils/MyContext';

Logout.propTypes = {};

function Logout(props) {
  const loginState = useContext(MyContext);

  const items = [
    {
      key: '1',
      label: (
        <a target="_blank" href="#">
          My profile
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_blank" href="#" onClick={e => logOutAccount(e)}>
          Logout
        </a>
      ),
    },
  ];
  const items_2 = [
    {
      key: '1',
      label: (
        <a target="_blank" href="#">
          Log in
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_blank" href="#" onClick={e => logOutAccount(e)}>
          Register
        </a>
      ),
    },
  ];
  const logOutAccount = e => {
    e.preventDefault();
    localStorage.clear();
    loginState.setIsLogin(false);
  };

  return (
    <Row>
      <Col>
        <Dropdown
          menu={{ items: loginState.isLogin ? items : items_2 }}
          placement="bottom"
        >
          <a href="#" style={{ color: 'black' }}>
            <UserOutlined className="user-img" />
          </a>
        </Dropdown>
      </Col>
    </Row>
  );
}

export default Logout;
