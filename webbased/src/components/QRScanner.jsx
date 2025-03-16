import { useEffect, useRef, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import { useNavigate } from "react-router-dom";

const QRScanner = () => {
  const scannerRef = useRef(null);
  const navigate = useNavigate();
  const [manualInput, setManualInput] = useState("");

  useEffect(() => {
    const scanner = new Html5QrcodeScanner("qr-reader", {
      fps: 10,
      qrbox: { width: 250, height: 250 }
    });

    scanner.render(
      (decodedText) => {
        alert(`✅ Code gescand: ${decodedText}`);
        scanner.clear();
        navigate("/in-behandeling");
      },
      (error) => console.warn("Scan error:", error)
    );

    scannerRef.current = scanner;

    return () => scanner.clear();
  }, [navigate]);

  const handleManualSubmit = () => {
    if (manualInput.trim() !== "") {
      alert(`✅ Handmatige invoer: ${manualInput}`);
      navigate("/in-behandeling");
    } else {
      alert("⚠️ Voer een geldige code in!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h2 className="text-xl font-bold mb-4">Scan een QR-code</h2>

      {/* Scanner */}
      <div id="qr-reader" className="w-full max-w-md"></div>

      {/* Handmatige invoer */}
      <div className="mt-4 w-full max-w-md">
        <input
          type="text"
          placeholder="EAN handmatig invoeren"
          value={manualInput}
          onChange={(e) => setManualInput(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button 
          onClick={handleManualSubmit} 
          className="mt-2 w-full bg-blue-600 text-white py-2 rounded"
        >
          Handmatig invoeren
        </button>
      </div>
    </div>
  );
};

export default QRScanner;
