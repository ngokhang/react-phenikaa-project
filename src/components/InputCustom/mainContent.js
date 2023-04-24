import React, { useState, useEffect } from "react";
import axiosInstance from '../../shared/services/http-client'
import { Card, Carousel } from 'antd';

const MainContent = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axiosInstance.get("products")
      .then(res => {
        const data = res.data.map(({ id, attributes: { name, image, price } }) => ({
          id,
          name,
          image,
          price,
        }));
        setProducts(data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const { Meta } = Card;

  const listItems = products.map((product) => (
    <Card
      className='card'
      key={product.id}
      hoverable
      style={{
        width: 220,
      }}
      cover={<img src={product.image} alt={product.name} />}
    >
      <Meta className="name" title={product.name}/>
      <Meta className="price" description={product.price} />
    </Card>
  ));

  return (
    <div className='main_content'>
      <h3>Categories</h3>
      {listItems}
    </div>
  );
};

export default MainContent;
