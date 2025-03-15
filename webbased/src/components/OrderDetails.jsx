const OrderDetails = ({ order, onStart }) => {
    if (!order) return <p>Selecteer een order</p>;
  
    return (
      <div className="p-4">
        <h2>Order details</h2>
        <p>Order Nr: {order.orderNumber}</p>
        <p>Datum: {order.date} {order.time}</p>
        <p>Categorie: {order.category}</p>
        <p><b>{order.product}</b></p>
        
        <button 
          onClick={onStart} 
          className="mt-4 bg-black text-white py-2 px-4 rounded"
        >
          Start voorbereiding
        </button>
      </div>
    );
  };
  
  export default OrderDetails;
  