import { Menu } from 'antd';
import styled from 'styled-components';

export const MenuContainer = styled(Menu)`
  border-bottom: unset !important;
  .ant-menu-item {
    color: black !important;
    &:hover {
      &::after {
        border-bottom: 1px solid black !important;
      }
    }
    &-selected {
      &::after {
        border-bottom: 1px solid black !important;
      }
    }
  }
`;
