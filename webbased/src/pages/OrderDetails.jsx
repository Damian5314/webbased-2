import { useParams, useNavigate } from "react-router-dom";
import ordersData from "../data/orders.json";

const OrderDetails = () => {
  const { id } = useParams(); // 🔥 Haal order ID uit de URL
  const navigate = useNavigate(); // 🔄 Voor navigatie
  const order = ordersData.find((order) => order.id === parseInt(id));

  if (!order) {
    return <p className="p-4">Order niet gevonden!</p>;
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Order details</h2>
      <p>Order Nr: {order.orderNumber}</p>
      <p>Datum: {order.date} {order.time}</p>
      <p>Categorie: {order.category}</p>
      <p className="font-bold">{order.product}</p>
      
      <button 
        onClick={() => navigate(`/order/${id}/scan`)} 
        className="mt-4 bg-black text-white py-2 px-4 rounded"
      >
        Start voorbereiding
      </button>
    </div>
  );
};

export default OrderDetails;
