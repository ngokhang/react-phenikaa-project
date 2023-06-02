import { Button } from 'antd';
import React from 'react';

function EmptyCart({ onClose }) {

  const handleOnClickShopping = () => {
    onClose();
  }

  return (
    <>
      <div className="cart-empty">
        <div className='content'>
          <div className="empty-img" style={{marginLeft:'90px'}}></div>
          <div className="empty-content">
            <p className="empty-title">Your bag is empty</p>
            <p className="cart-empty-text">
              Looks like you haven’t added any items to the bag yet. Start
              shopping to fill it in.
            </p>
          </div>
        </div>
        <Button className="btn-start-shopping" block onClick={() => handleOnClickShopping()}>
          START SHOPPING
        </Button>
      </div>
    </>
  );
}

export default EmptyCart;