import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrdereList } from '../../../features/orders/orderSlide';
import { Context } from '../../../store/Context';
import EmptyCart from './components/EmptyCart';
import FilledCart from './components/FilledCart';
import { CartSVG, DrawerCart } from './style';

function HeaderCart(props) {
  const loginState = useContext(Context);
  const userId = localStorage.getItem('userId');
  const [open, setOpen] = useState(false);


  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      {loginState.isLogin && (
        <>
          <CartSVG onClick={showDrawer} className="no-bd" />

          <DrawerCart title={`Total item: ${0}`} placement="right" onClose={onClose} open={open}>
            <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              {0 ? (<EmptyCart onClose={onClose} />) : (<FilledCart />)}

            </div>
          </DrawerCart>
        </>
      )}
    </>
  );
}

export default HeaderCart;
