import { useState, useEffect } from "react";
import ordersData from "../data/orders.json";
import styles from "./styles.module.css";

const OrderList = ({ onSelectOrder }) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setOrders(ordersData);
  }, []);

  return (
    <div className="p-4">
      <h2>Alle orders om voor te bereiden</h2>
      {orders.map((order) => (
        <div
          key={order.id}
          className={styles.orderCard}
          onClick={() => onSelectOrder(order)}
        >
          <p>Order Nr. {order.orderNumber}</p>
          <p><b>{order.product}</b></p>
          <p>{order.date} - {order.time}</p>
        </div>
      ))}
    </div>
  );
};

export default OrderList;
