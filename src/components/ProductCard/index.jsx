import { ShoppingCartOutlined } from '@ant-design/icons/lib/icons';
import React, { useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { createOrderAPI, fetchOrdereList, increaseQuantityProduct, updateOrder } from '../../features/orders/orderSlide';
import { formatter } from '../../shared/constants';
import { Context } from '../../store/Context';
import './style.scss';
import { Spin } from 'antd';


function ProductCard({ imgUrl, name, price, id }) { // id la id cua san pham
  const context = useContext(Context);
  const isLogin = context.isLogin;
  const navigate = useNavigate();
  const orderList = useSelector(state => state.orders.orderList);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const handleOnClickCard = (e) => {
    e.stopPropagation();
    navigate(`../products/${id}`);
  }
  const handleOnClickCart = async (e) => {
    e.stopPropagation();
    if (isLogin) {
      const orderListClone = [...orderList];

      if (orderListClone.length === 0) {
        dispatch(createOrderAPI({ quantity: 1, product: id, user: context.userId, total: price }));

        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          window.location.reload();
        }, 2000);
        toast.success('Added this product to your cart!', {
          position: "top-right",
          autoClose: 350,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "light",
        });
        return;
      }

      if (orderListClone.some(item => item.attributes.product.data.id === id)) {

        orderListClone.some(item => {
          if (item.attributes.product.data.id === id) {
            toast.success('Added this product to your cart!', {
              position: "top-right",
              autoClose: 350,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: false,
              draggable: false,
              progress: undefined,
              theme: "light",
            });
            dispatch(updateOrder({ orderId: item.id, quantity: item.attributes.quantity + 1, userId: context.userId }));
            dispatch(fetchOrdereList(localStorage.getItem('userId')));
            dispatch(increaseQuantityProduct());
            // setLoading(true);
            // setTimeout(() => {
            //   setLoading(false);
            //   window.location.reload();
            // }, 2000);

            // return true;
          }
        });

        return;
      }
      dispatch(createOrderAPI({ quantity: 1, product: id, user: context.userId, total: price }));
      // setLoading(true);
      // setTimeout(() => {
      //   setLoading(false);
      //   window.location.reload();
      // }, 2000);

      toast.success('Added this product to your cart!', {
        position: "top-right",
        autoClose: 350,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
      });

      return;
    } else {
      navigate('/login');
      toast.warning('You must log in to buy this product!', { autoClose: 1500, position: 'top-right' });
    }
  }

  return (
    <Spin spinning={loading} tips="Loading...">
      <div className="product-card" onClick={e => handleOnClickCard(e)} style={{ cursor: 'pointer' }}>
        <div className="card-image">
          <img src={imgUrl} alt="" className='image' />
          <ShoppingCartOutlined className='cart-icon' onClick={e => handleOnClickCart(e)} />
        </div>
        <div className="card-content">
          <p className='text'>{name}</p>
          <p className="cost"><sub className='text'>{formatter.format(price)}</sub></p>
        </div>
      </div>

    </Spin>

  );
}

export default ProductCard;
