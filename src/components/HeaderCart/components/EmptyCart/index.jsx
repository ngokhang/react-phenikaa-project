import { Button, Col, Row, Typography } from 'antd';
import React from 'react';
import emptyCart from '../../../../assets/images/emptyCart.png';
import { ColCart, RowCart } from './style';
import Title from 'antd/es/typography/Title';
const { Text } = Typography;

EmptyCart.propTypes = {};

function EmptyCart(props) {
  return (
    <>
      <RowCart>
        <ColCart>
          <Row className="cart-content" gutter={[0, 40]}>
            <Col
              className="cart-content-img"
              style={{
                width: '210px',
                height: '142px',
                background: `url(${emptyCart})`,
              }}
            ></Col>
            <Col>
              <Title level={4}>Your bag is empty</Title>
              <Text>
                Looks like you haven’t added any items to the bag yet. Start
                shopping to fill it in.
              </Text>
            </Col>
          </Row>
          <Row style={{ width: '100%' }}>
            <Col xs={24}>
              <Button block className="btn-cart">
                {'Start Shopping'.toUpperCase()}
              </Button>
            </Col>
          </Row>
        </ColCart>
      </RowCart>
    </>
  );
}

export default EmptyCart;
