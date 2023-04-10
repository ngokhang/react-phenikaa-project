import { Col } from 'antd';
import React, { useContext, useState } from 'react';
import EmptyCart from './components/EmptyCart';
import { Cart, CartSVG, DrawerCart } from './style';
import { MyContext } from '../../utils/MyContext';

HeaderCart.propTypes = {};

function HeaderCart(props) {
  const isLogin = useContext(MyContext).isLogin;
  const [open, setOpen] = useState(false);
  const showDrawer = e => {
    e.preventDefault();
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      {isLogin && (
        <Col>
          <Cart href="#" onClick={e => showDrawer(e)}>
            <CartSVG />
          </Cart>
          <DrawerCart placement="right" onClose={onClose} open={open} xs={24}>
            <EmptyCart />
          </DrawerCart>
        </Col>
      )}
    </>
  );
}

export default HeaderCart;
