import { SearchOutlined } from '@ant-design/icons';
import React, { createContext, useEffect, useState } from 'react';
import { InputComponent } from './style';
import { Col, Row } from 'antd';
import axiosInstance from '../../shared/services/http-client';

SearchBar.propTypes = {};

function SearchBar(props) {
  const [searchKey, setSearchKey] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [listProducts, setListProducts] = useState([]);
  const handleOnChange = e => {
    setSearchKey(e.target.value);
    setIsTyping(true);
  };
  useEffect(() => {
    const stoSearch = setTimeout(async () => {
      setIsTyping(false);
      setListProducts(
        (
          await axiosInstance.get(
            `products?filters[name][$contains]=${searchKey.trim()}`
          )
        ).data
      );
      console.log(listProducts);
      console.log(searchKey);
    }, 1500);

    return () => {
      clearTimeout(stoSearch);
    };
  }, [searchKey]);
  return (
    <Row>
      <Col>
        <InputComponent
          bordered={false}
          name="searchInp"
          placeholder="Search products"
          onChange={handleOnChange}
          suffix={<SearchOutlined />}
        />
      </Col>
    </Row>
  );
}

export default SearchBar;
