import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import Logo from '../../assets/icons/a-logo.png';

HeaderLogo.propTypes = {};

function HeaderLogo(props) {
  return (
    <Row>
      <Col>
        <a
          href="#"
          style={{
            display: 'inline-block',
          }}
        >
          <img src={Logo} alt="" />
        </a>
      </Col>
    </Row>
  );
}

export default HeaderLogo;
