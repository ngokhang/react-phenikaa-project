import { SearchOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import { InputComponent } from './style';
import { Col, Row } from 'antd';

SearchBar.propTypes = {};

function SearchBar(props) {
  const [loading, setLoading] = useState(false);
  const onSearch = value => {
    console.log(value);
    setLoading(true);
  };
  useEffect(() => {
    const loadingSto = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => {
      clearTimeout(loadingSto);
    };
  }, [loading]);
  return (
    <Row>
      <Col>
        <InputComponent
          bordered={false}
          placeholder="Search products"
          suffix={<SearchOutlined />}
        />
      </Col>
    </Row>
  );
}

export default SearchBar;
