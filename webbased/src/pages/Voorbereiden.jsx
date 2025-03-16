import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ordersData from "../data/orders.json";
import styles from "../components/styles.module.css";

const Voorbereiden = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate(); // 🔥 React Router navigatie

  useEffect(() => {
    setOrders(ordersData);
  }, []);

  const handleOrderClick = (orderId) => {
    navigate(`/order/${orderId}`); // 🔗 Stuur naar de order details pagina
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Alle orders om voor te bereiden</h2>
      {orders.map((order) => (
        <div
          key={order.id}
          className={styles.orderCard}
          onClick={() => handleOrderClick(order.id)}
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
