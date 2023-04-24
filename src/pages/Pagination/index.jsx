import React from 'react'
import { Pagination } from 'antd';
import './style.css';
export default function pagination() {
  
  return (
    <div className='Pagination'>
      <Pagination defaultCurrent={1} total={60} pageSize={5} />
    </div>
  );
}