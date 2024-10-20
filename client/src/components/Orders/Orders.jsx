import React from "react";
import { Col, Row } from "reactstrap";
// import Product from "../Home/Product";
import Product from "../../pages/Product/Product";
import "./Order.scss"

const getDateTime = (string) => {
  const fullDate = new Date(string);
  const date = fullDate.toLocaleDateString();
  const time = fullDate.toLocaleTimeString();
  return `${date} - ${time}`;
};

const Orders = ({ orders }) => {
  return (
    <div className="orders">
      {orders? (
        <>
          <h2>Your orders:</h2>
          {orders.map((order) => (
            <div key={order.createdAt}>
              <h3>Order date: {getDateTime(order.createdAt)}</h3>
              <Row>
                {order.orders.map((product) => (
                  <Col sm="12" md="4" key={product.id}>
                    <Product orderCard product={product} />
                  </Col>
                ))}
              </Row>
            </div>
          ))}
        </>
      ) : (
        <h2>No orders avaliable.</h2>
      )}
    </div>
  );
};

export default Orders;
