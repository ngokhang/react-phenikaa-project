import React, { useState, useEffect } from 'react';
import { Pagination, Card, Menu, Row, Col, Spin } from 'antd';
import { Link } from 'react-router-dom';
import axiosInstance from '../../../shared/services/http-client';
import ProductCard from '../../../components/ProductCard'

const pageSize = 8

const ProductListShoes = () => {
  //Hiệu ứng Loading
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [quantityProduct, setQuantityProduct] = useState(0);

  useEffect(() => {
    fetchProducts(currentPage);
  }, [currentPage]);

  const fetchProducts = async (currentPage) => {
    try {
      setLoading(true); // Hiển thị hiệu ứng loading

      const response = await axiosInstance.get('products', {
        params: {
          'pagination[page]': currentPage,
          'pagination[pageSize]': pageSize,
          'filters[category]': 2
        }
      });

      setProducts(response.data);
      setQuantityProduct(response.data.length);

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false); // Ẩn hiệu ứng loading
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Spin spinning={loading} tip="Loading...">
        <div style={{ display: 'flex' }}>
          <Menu mode="vertical" style={{ marginRight: '20px', width: "25%" }}>
            <Menu.Item key="clothes">
              <Link to="/clothes">Clothes</Link>
            </Menu.Item>
            <Menu.Item key="shoes">
              <Link to="/sportshoes">Shoes</Link>
            </Menu.Item>
          </Menu>

          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <div style={{ margin: '20px 60px 20px 0', marginLeft: 'auto' }}>
              <h1>Product found: {quantityProduct}</h1>
            </div>

            <Row gutter={[16, 24]}>
              {
                products.map((item, index) => (
                  <Col key={index} md={6}>
                    <ProductCard imgUrl={item.attributes.image} name={item.attributes.name} price={item.attributes.price} id={item.id} />
                  </Col>
                ))
              }
            </Row>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', padding: '20px 0' }}>
          <Pagination style={{ textalign: "center" }} current={currentPage} total={28} pageSize={pageSize} onChange={handlePageChange} />
        </div>
      </Spin>
    </div>
  );
};

export default ProductListShoes;
