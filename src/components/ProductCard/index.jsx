import { ShoppingCartOutlined } from '@ant-design/icons/lib/icons';
import { Spin } from 'antd';
import React, { useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { formatter } from '../../shared/constants';
import { Context } from '../../store/Context';
import './style.scss';


function ProductCard({ imgUrl, name, price, id }) { // id la id cua san pham
  const context = useContext(Context);
  const isLogin = context.isLogin;
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleOnClickCard = (e) => {
    e.stopPropagation();
    navigate(`../products/${id}`);
  }
  const handleOnClickCart = async (e) => {
    e.stopPropagation();

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
