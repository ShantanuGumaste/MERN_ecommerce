import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Product from '../components/Product.jsx';
import axios from 'axios'

const HomeScreen = () => {
  const[products, setProducts] = useState([]);

  useEffect(()=>{
    try {
      const fetchProducts = async () => {
        const {data} = await axios.get('/api/products');
        setProducts(data);
      }
      fetchProducts()
    } catch (error) {
      console.log(error.error)
    }
  },[])
  return (
    <>
    <h1 className='text-center my-3'>Latest Products</h1>
    <Row>
        {products.map((product)=>{
            return(
            <Col key={product._id} sm={12} md={6} lg={4} xl={4}>
                <Product product={product}/>
            </Col>
            )
        })}
    </Row>
    </>
  )
}

export default HomeScreen