import { Button, Spin } from 'antd';
import React, { useContext, useEffect } from 'react';
import { formatter } from '../../../../shared/constants';
import './FilledCart.scss';
import ItemCart from './ItemCart';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrdereList, checkoutOrderAPIs } from '../../../../features/orders/orderSlide';
import { Context } from '../../../../store/Context';

function FilledCart(props) {
  const { _orderList, quantityOrders } = props;
  const loading = useSelector(state => state.orders.isLoading);
  const userId = localStorage.getItem('userId');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOrdereList(userId));
  }, [dispatch, userId, quantityOrders])

  const calcTotalPrice = () => {
    return _orderList.filter(item => {
      if (item.attributes.product.data !== null) return true;
      return false;
    }).reduce((curr, next) => {
      return next.attributes.quantity * next.attributes.product.data.attributes.price + curr;
    }, 0)
  }
  const handleCheckout = () => {
    dispatch(checkoutOrderAPIs({ orders: _orderList, total: totalPrice, userID: userId }));
  };
  const totalPrice = calcTotalPrice();

  return (
    <>
      <ul className='list-orders'>
        {
          _orderList?.filter(item => {
            if (item.attributes.product.data !== null) return true;
            return false;
          })?.map((item, index) => (
            <li>
              <ItemCart name={item.attributes.product.data.attributes.name} imgUrl={item.attributes.product.data.attributes.image} price={item.attributes.product.data.attributes.price} quantityProduct={item.attributes.quantity} orderId={item.id} key={index} indexInArray={index} />
            </li>
          ))
        }
      </ul>

      <div className='total-price'>
        <span>Subtotal: </span>
        <span>{formatter.format(totalPrice)}</span>
      </div>

      <Button className="btn-checkout" block onClick={handleCheckout}>
        CHECKOUT
      </Button>


    </>
  );
}

export default FilledCart;