import React, { useContext } from 'react';
import { Context } from '../../store/Context';
import { Col, Pagination, Row } from 'antd';
import './style.scss';
import ProductCard from '../../components/ProductCard';

function SearchResult(props) {
  const searchResultContext = useContext(Context);
  const searchResult = searchResultContext.searchResult;
  const searchKeyword = searchResultContext.searchKeyword;
  const totalPage = searchResultContext.pageSize;

  return (
    <Row className="search-result-page" justify={'center'}>
      <Col>
        {searchResult.length === 0 ? (
          <div className="empty">
            <p className="empty-title">{`We couldn’t find anything for “${searchKeyword}”`}</p>
            <p className="empty-text">These popular items might interest you</p>
          </div>
        ) : (
          <Row>
            <Col xs={24} style={{ display: 'flex', justifyContent: 'center' }}>
              <Row justify={'start'} style={{ maxWidth: '768px' }}>
                <Col xs={24}>
                  <p className="show-title">{`Showing ${searchResult.length} results for "${searchResultContext.searchKeyword}"`}</p>
                </Col>
                {searchResult.map((item, index) => (
                  <Col
                    key={index}
                    className="product"
                    xs={24}
                    sm={24}
                    md={12}
                    lg={8}
                  >
                    <ProductCard
                      name={item.attributes.name}
                      price={item.attributes.price}
                      imgUrl={item.attributes.image}
                    />
                  </Col>
                ))}
              </Row>
            </Col>
            <Col style={{ margin: '0 auto' }}>
              <Pagination defaultCurrent={1} total={totalPage} defaultPageSize={25} />
            </Col>
          </Row>
        )}
      </Col>
    </Row>
  );
}

export default SearchResult;
