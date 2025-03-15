import { useState } from "react";
import OrderList from "./components/OrderList";
import OrderDetails from "./components/OrderDetails";
import QRScanner from "./components/QRScanner";
import BottomNav from "./components/BottomNav";

const App = () => {
  const [activeTab, setActiveTab] = useState("Voorbereiden");
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [scanning, setScanning] = useState(false);

  const startPreparation = () => setScanning(true);
  const completeOrder = () => {
    setScanning(false);
    setSelectedOrder(null);
    alert("Order voltooid!");
  };

  return (
    <div className="min-h-screen bg-gray-100 pb-16">
      {scanning ? (
        <QRScanner onComplete={completeOrder} />
      ) : selectedOrder ? (
        <OrderDetails order={selectedOrder} onStart={startPreparation} />
      ) : (
        <OrderList onSelectOrder={setSelectedOrder} />
      )}

      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default App;
