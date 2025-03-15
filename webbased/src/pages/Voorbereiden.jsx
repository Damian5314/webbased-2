import { useState, useEffect } from "react";
import ordersData from "../data/orders.json";
import styles from "../components/styles.module.css";

const Voorbereiden = ({ onSelectOrder }) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setOrders(ordersData);
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Alle orders om voor te bereiden</h2>
      {orders.map((order) => (
        <div
          key={order.id}
          className={styles.orderCard}
          onClick={() => onSelectOrder(order)}
        >
          <p className="text-gray-500 text-sm">Order Nr. {order.orderNumber}</p>
          <p className="text-black font-bold">{order.product}</p>
          <p className="text-gray-500">{order.date} - {order.time}</p>
        </div>
      ))}
    </div>
  );
};

export default Voorbereiden;
