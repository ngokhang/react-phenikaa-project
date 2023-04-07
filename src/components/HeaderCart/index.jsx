import { Col } from 'antd';
import React, { useState } from 'react';
import EmptyCart from './components/EmptyCart';
import { Cart, CartSVG, DrawerCart } from './style';

HeaderCart.propTypes = {};

function HeaderCart(props) {
  const [open, setOpen] = useState(false);
  const showDrawer = e => {
    e.preventDefault();
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <Col>
      <Cart href="#" onClick={e => showDrawer(e)}>
        <CartSVG />
      </Cart>
      <DrawerCart placement="right" onClose={onClose} open={open} xs={24}>
        <EmptyCart />
      </DrawerCart>
    </Col>
  );
}

export default HeaderCart;
