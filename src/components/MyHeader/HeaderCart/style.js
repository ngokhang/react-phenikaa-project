import { ShoppingCartOutlined } from '@ant-design/icons';
import { Drawer,Row, Col } from 'antd';
import styled from 'styled-components';
import EmptyCard from '../../../assets/images/emptyCart.png';

export const CartSVG = styled(ShoppingCartOutlined)`
  svg {
    color: black;
    width: 20px;
    height: 20px;
  }
`;

export const DrawerCart = styled(Drawer)`
.ant-drawer-header-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  color: #000;
  width: 100%;
  .ant-drawer-close {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 52px;
    height: 52px;
    padding: 14px;
    background-color: black;
    font-size: 24px;
    color: white;
    border-radius: 50%;
    order: 2; 
  }
  
}

  .ant-drawer-body {
    display: flex;
    justify-content: center;
    align-items: center;
    .cart-empty {
      padding-top: 106px;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      text-align: center;
      .empty-img {
        width: 210px;
        height: 142px;
        padding-bottom: 36px;
        background: url(${EmptyCard}) no-repeat center center;
      }
      .empty-content {
        padding-top: 36px;
        .cart-empty-title {
          font-size: 24px;
          line-height: 38px;
          font-weight: 600;
        }
        .cart-empty-text {
          font-size: 12px;
          line-height: 19px;
          color: #1d1f22;
        }
      }
      .btn-start-shopping {
        height: unset;
        padding: 16px 15px !important;
        border-radius: unset;
        background-color: black;
        color: white;
      }
    }
  }
  .btn-close{
    display: flex;
      align-items: center;
      justify-content: center;
      width: 26px;
      height: 26px;
      padding: 14px;
      background-color: black;
      font-size: 24px;
      color: white;
      border-radius: 50%;
      position: absolute;
      right: 0;
  }
`;
export const RowCart = styled(Row)`
  height: 100%;
  width: 100%;
  justify-content: space-around;
  .cart-content {
    padding-top: 10px;
    padding-left: 5px;
    padding-right: 10px;
    justify-content: center;
    text-align: center;
    overflow-x: hidden;
    display: flex;
    max-width: 115%;
    

    flex-wrap: wrap;
    flex-direction: column;
  }
`;

export const ColCart = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  .ant-btn {
    height: 52px;
    padding: 16px 0;
    background-color: black;
    color: white;
    width: 100%;
    margin-top: 20px
  }
  .btn-close{
    display: flex;
      align-items: center;
      justify-content: center;
      width: 26px;
      height: 26px;
      padding: 10px;
      background-color: black;
      font-size: 24px;
      color: white;
      border-radius: 50%;
      position: absolute;
      right: 0;
      
  }
  .product-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100px
  }
  
`;
export const QuantityButton = styled.span`
  display: flex;
  align-items: center;
  
  button {
    width: 30px;
    height: 30px;
    border: none;
    border-radius: 3px;
    background-color: #f1f1f1;
    color: #333;
    font-size: 18px;
    
    cursor: pointer;
    outline: none;
  }
  
  span {
    margin: 0 10px;
    font-size: 13px;
    
  }
`;