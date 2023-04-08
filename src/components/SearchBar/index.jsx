import { SearchOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import { InputComponent } from './style';
import { Col, Row } from 'antd';
import axiosInstance from '../../shared/services/http-client';

SearchBar.propTypes = {};

function SearchBar(props) {
  const [searchKey, setSearchKey] = useState(false);
  const [listProducts, setListProducts] = useState([]);
  const handleOnChange = e => {
    setSearchKey(e.target.value);
  };
  useEffect(() => {
    async function searchProducts() {
      const list = (
        await axiosInstance.get(
          `products?filters[name][$contains]=${searchKey}`
        )
      ).data;
      setListProducts(list);
    }
    searchProducts();
  }, [searchKey]);
  console.log(listProducts);
  return (
    <Row>
      <Col>
        <InputComponent
          bordered={false}
          placeholder="Search products"
          onChange={handleOnChange}
          suffix={<SearchOutlined />}
        />
      </Col>
    </Row>
  );
}

export default SearchBar;
