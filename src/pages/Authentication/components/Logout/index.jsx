import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Col, Dropdown, Row } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './style.scss';

Logout.propTypes = {};

function Logout(props) {
  const [isLogin, setIsLogin] = useState(false);

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
  const logOutAccount = e => {
    e.preventDefault();
    localStorage.clear();
    setIsLogin(false);
  };

  return (
    <Row>
      <Col>
        {isLogin ? (
          <Dropdown menu={{ items }} placement="bottom">
            <a href="#" style={{ color: 'black' }}>
              <UserOutlined className="user-img" />
            </a>
          </Dropdown>
        ) : (
          <a
            href="#"
            style={{ color: 'black' }}
            onClick={e => e.preventDefault()}
          >
            <UserOutlined className="user-img" />
          </a>
        )}
      </Col>
    </Row>
  );
}

export default Logout;
