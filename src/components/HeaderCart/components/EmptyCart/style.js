import styled from 'styled-components';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Drawer, Row, Col } from 'antd';
export const RowCart = styled(Row)`
  height: 100%;
  justify-content: space-around;
  .cart-content {
    padding-top: 164px;
    justify-content: center;
    text-align: center;
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
  }
`;
