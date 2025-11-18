import React, { useState, useContext } from "react";
import { AuthContext } from "./AuthContext.jsx";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

const PaymentModal = ({ show, onClose }) => {
  const { user, setUser } = useContext(AuthContext);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    jazzCashNumber: "",
    easyPaisaNumber: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
    cnicLast4: "",
  });

  const handlePayment = async () => {
    if (!paymentMethod) {
      setError("Please select a payment method");
      return;
    }
    setError("");
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:5000/api/payment/initiate", {
        userId: user.id,
        paymentMethod,
        amount: 50000, // 500 PKR in cents
        ...formData,
      });

      const { paymentUrl, transactionId } = response.data;

      // Redirect to Paymob payment page
      window.location.href = paymentUrl;

      // Note: After payment, Paymob will redirect to the return URL configured in the backend
      // The backend will handle verification and update user status
    } catch (err) {
      setError("Payment initiation failed. Please try again.");
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Become a Premium User</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold">Select Payment Method</h3>
          <div className="flex gap-4">
            <button
              className={`px-4 py-2 rounded-lg ${paymentMethod === "jazzcash" ? "bg-green-600 text-white" : "bg-gray-200"}`}
              onClick={() => setPaymentMethod("jazzcash")}
            >
              JazzCash
            </button>
            <button
              className={`px-4 py-2 rounded-lg ${paymentMethod === "easypaisa" ? "bg-green-600 text-white" : "bg-gray-200"}`}
              onClick={() => setPaymentMethod("easypaisa")}
            >
              EasyPaisa
            </button>
            <button
              className={`px-4 py-2 rounded-lg ${paymentMethod === "card" ? "bg-green-600 text-white" : "bg-gray-200"}`}
              onClick={() => setPaymentMethod("card")}
            >
              Credit/Debit Card
            </button>
          </div>

          {paymentMethod === "jazzcash" && (
            <div className="flex flex-col gap-2">
              <label>JazzCash Wallet Number</label>
              <input
                type="text"
                name="jazzCashNumber"
                value={formData.jazzCashNumber}
                onChange={handleInputChange}
                className="border p-2 rounded"
                placeholder="Enter JazzCash number"
              />
              <label>Last 4 Digits of CNIC</label>
              <input
                type="text"
                name="cnicLast4"
                value={formData.cnicLast4}
                onChange={handleInputChange}
                className="border p-2 rounded"
                placeholder="Last 4 digits of CNIC"
              />
            </div>
          )}

          {paymentMethod === "easypaisa" && (
            <div className="flex flex-col gap-2">
              <label>EasyPaisa Wallet Number</label>
              <input
                type="text"
                name="easyPaisaNumber"
                value={formData.easyPaisaNumber}
                onChange={handleInputChange}
                className="border p-2 rounded"
                placeholder="Enter EasyPaisa number"
              />
            </div>
          )}

          {paymentMethod === "card" && (
            <div className="flex flex-col gap-2">
              <label>Card Number</label>
              <input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleInputChange}
                className="border p-2 rounded"
                placeholder="Enter card number"
              />
              <label>Expiry Date (MM/YY)</label>
              <input
                type="text"
                name="expiry"
                value={formData.expiry}
                onChange={handleInputChange}
                className="border p-2 rounded"
                placeholder="MM/YY"
              />
              <label>CVV</label>
              <input
                type="text"
                name="cvv"
                value={formData.cvv}
                onChange={handleInputChange}
                className="border p-2 rounded"
                placeholder="CVV"
              />
            </div>
          )}

          {error && <p className="text-red-500">{error}</p>}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button
          className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
          onClick={onClose}
        >
          Cancel
        </button>
        <button
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
          onClick={handlePayment}
          disabled={loading}
        >
          {loading ? "Processing..." : "Pay Now"}
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default PaymentModal;