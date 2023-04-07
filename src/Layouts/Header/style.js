import { Col, Row } from 'antd';
import styled from 'styled-components';

export const RowActions = styled(Row)`
  height: 100%;
  justify-content: end;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const ColActions = styled(Col)`
  display: flex;
  align-items: center;
  gap: 23px;
`;
