import { Button, Card, Col, FormControl, Image, ListGroup, ListGroupItem, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message';
import { FaTrashAlt } from 'react-icons/fa';
import { addToCart, removeFromCart } from '../slices/cartSlice';

const CartScreen = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;

    const addToCartHandler = (product, qty) => {
      dispatch(addToCart({...product, qty}))
    }

    const removeFromCartHandler = (id) => {
      dispatch(removeFromCart(id));
    }

    const checkoutHandler = () => {
      navigate('/login?redirect=/shipping')
    }

  return (
    <Row className="mt-5">
      <Col md={8}>
        <h1 className=" mb-5">Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <Message>
            Your Cart is Empty <Link to="/">Go Back</Link>
          </Message>
        ) : (
          <ListGroup variant="flush">
            {cartItems.map((item) => (
              <ListGroupItem key={item._id}>
                <Row className="d-flex align-items-center">
                  <Col md={2}>
                    <Image src={item.image} alt={item.name} fluid rounded />
                  </Col>
                  <Col md={5}>
                    <Link to={`/product/${item._id}`}>{item.name}</Link>
                  </Col>
                  <Col md={2}>₹{item.price}</Col>
                  <Col md={2}>
                    <FormControl
                      as="select"
                      value={item.qty}
                      onChange={(e) => addToCartHandler(item, Number(e.target.value))}
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </FormControl>
                  </Col>
                  <Col md={1}>
                    <Button onClick={()=>removeFromCartHandler(item._id)} type="button" variant="dark">
                      <FaTrashAlt />
                    </Button>
                  </Col>
                </Row>
              </ListGroupItem>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <Card className="p-3 py-5">
          <ListGroup variant="flush">
            <ListGroupItem>
              <h2>
                SubTotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) Items
              </h2>
              <h4 className="mt-3">
                Total: ₹
                {cartItems.reduce(
                  (acc, item) => acc + item.qty * item.price,
                  0
                )}
              </h4>
              <Button
                type="button"
                className="btn-dark mt-3"
                disabled={cartItems.length === 0}
                onClick={checkoutHandler}
              >
                Proceed To Checkout
              </Button>
            </ListGroupItem>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
}

export default CartScreen