import { Col, Row } from 'react-bootstrap'
import Product from '../components/Product.jsx';
import { productsApiSlice, useGetProductsQuery } from "../slices/productApiSlice.js";
import Loader from '../components/Loader.jsx';
import Message from '../components/Message.jsx';

const HomeScreen = () => {
  // const api = productsApiSlice(); // Initialize the API slice

  const { data: products, isLoading, error } = useGetProductsQuery();

  return (
    <>
    {isLoading ? (
      <Loader/>
    ) : error ? (
      <Message variant="danger">{error?.data?.message || error.error}</Message>
    ) : (
      <>
      <h1 className="text-center my-3">Latest Products</h1>
      <Row>
        {products.map((product) => {
          return (
            <Col key={product._id} sm={12} md={6} lg={4} xl={4}>
              <Product product={product} />
            </Col>
          );
        })}
      </Row>
      </>
      )}
    </>
  );
}

export default HomeScreen