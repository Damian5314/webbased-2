import { useState } from "react";

const QRScanner = ({ onComplete }) => {
  const [scanned, setScanned] = useState(false);

  const handleScan = () => {
    setScanned(true);
    setTimeout(() => onComplete(), 1000); // Simuleer scan voltooid
  };

  return (
    <div className="p-4 text-center">
      <h2>Scan de QR-code</h2>
      <button 
        onClick={handleScan} 
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
      >
        {scanned ? "Scan voltooid!" : "Scannen..."}
      </button>
    </div>
  );
};

export default QRScanner;
