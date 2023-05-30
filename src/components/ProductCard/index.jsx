import { ShoppingCartOutlined } from '@ant-design/icons/lib/icons';
import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { createOrderAPI, updateOrder } from '../../features/orders/orderSlide';
import { formatter } from '../../shared/constants';
import { Context } from '../../store/Context';
import './style.scss';


function ProductCard({ imgUrl, name, price, id }) { // id la id cua san pham
  const context = useContext(Context);
  const isLogin = context.isLogin;
  const navigate = useNavigate();
  const orderList = useSelector(state => state.orders.orderList);
  const dispatch = useDispatch();

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
            dispatch(updateOrder({ orderId: item.id, quantity: item.attributes.quantity + 1, userId: context.userId }));

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
            return true;
          }
        });
        alert('existed');
        return;
      }

      alert('not ');
      dispatch(createOrderAPI({ quantity: 1, product: id, user: context.userId, total: price }));

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

      // orderList.forEach(item => console.log(111, item.attributes.product.data.id));
      // console.log(orderList.some(item => item.attributes.product.data.id === id));
      return;
    } else {
      navigate('/login');
      toast.warning('You must log in to buy this product!', { autoClose: 1500, position: 'top-right' });
    }
  }

  return (
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

  );
}

export default ProductCard;
