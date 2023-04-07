import styled from 'styled-components';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Drawer, Row, Col } from 'antd';

export const CartSVG = styled(ShoppingCartOutlined)`
  svg {
    color: black;
    width: 20px;
    height: 20px;
  }
`;

export const Cart = styled.a`
  display: inline-block;
  width: 20px;
  height: 20px;
`;

export const DrawerCart = styled(Drawer)`
  .ant-drawer-header-title {
    justify-content: flex-end;
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
    }
  }
`;
