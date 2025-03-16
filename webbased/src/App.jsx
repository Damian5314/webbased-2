import { Routes, Route } from "react-router-dom";
import Voorbereiden from "./pages/Voorbereiden";
import OrderDetails from "./pages/OrderDetails";
import Klaar from "./pages/Klaar";
import Geannuleerd from "./pages/Geannuleerd";
import Geschiedenis from "./pages/Geschiedenis";
import InBehandeling from "./pages/InBehandeling";
import QRScanner from "./components/QRScanner";
import BottomNav from "./components/BottomNav";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 pb-16">
      <Routes>
        <Route path="/" element={<Voorbereiden />} />
        <Route path="/voorbereiden" element={<Voorbereiden />} />
        <Route path="/order/:id" element={<OrderDetails />} />
        <Route path="/klaar" element={<Klaar />} />
        <Route path="/geannuleerd" element={<Geannuleerd />} />
        <Route path="/geschiedenis" element={<Geschiedenis />} />
        <Route path="/in-behandeling" element={<InBehandeling />} />
        <Route path="/order/:id/scan" element={<QRScanner />} />
      </Routes>
      <BottomNav />
    </div>
  );
};

export default App;
