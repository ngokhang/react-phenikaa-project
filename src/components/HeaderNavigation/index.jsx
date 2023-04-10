import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'antd';
import { MenuContainer } from './style';
import SearchBar from '../SearchBar';

HeaderNavigation.propTypes = {};

function HeaderNavigation(props) {
  const items = [
    {
      label: 'Home'.toUpperCase(),
      key: 'home',
      onClick: () => console.log('Hello world'),
    },
    {
      label: 'Clothes'.toUpperCase(),
      key: 'clothes',
      onClick: () => console.log('Hello world 2'),
    },
    {
      label: 'Sport shoes'.toUpperCase(),
      key: 'sportShoes',
      onClick: () => console.log('Hello world 3'),
    },
    {
      label: <SearchBar />,
      onClick: () => console.log('Hello world 3'),
    },
  ];
  return (
    <Col xs={16}>
      <MenuContainer
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={['home']}
        items={items}
      />
    </Col>
  );
}
export default HeaderNavigation;
