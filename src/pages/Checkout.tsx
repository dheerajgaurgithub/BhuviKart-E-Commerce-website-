import React, { useState } from "react";
import { useCart } from "@/contexts/CartContext";
import { useNavigate } from "react-router-dom";
// Optional: If using toast notifications
// import toast from "react-hot-toast";

const Checkout: React.FC = () => {
  const { state: cartState, clearCart } = useCart();
  const [address, setAddress] = useState("");
  const [showSlip, setShowSlip] = useState(false);
  const [orderId, setOrderId] = useState<string>("");
  const [total, setTotal] = useState(0);
  const [orderDate, setOrderDate] = useState("");
  const navigate = useNavigate();

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!address.trim()) {
      // toast.error("Please enter your shipping address.");
      return alert("Please enter your shipping address.");
    }

    const orderTotal = cartState.total;
    const date = new Date().toLocaleString();
    const newOrder = {
      id: Date.now().toString(),
      items: cartState.items,
      total: orderTotal,
      address,
      payment: "Cash on Delivery",
      date,
    };

    // Save order
    const prevOrders = JSON.parse(localStorage.getItem("bhuvikart-orders") || "[]");
    localStorage.setItem("bhuvikart-orders", JSON.stringify([newOrder, ...prevOrders]));

    setOrderId(newOrder.id);
    setTotal(orderTotal);
    setOrderDate(date);
    setShowSlip(true);
    clearCart();
  };

  if (showSlip) {
    return (
      <div className="container mx-auto p-6 max-w-3xl">
        <h1 className="text-2xl font-bold mb-4">Order Placed Successfully!</h1>
        <div className="bg-white rounded shadow p-4 mb-4">
          <h2 className="font-semibold mb-2">Order Slip</h2>
          <p><strong>Order ID:</strong> {orderId}</p>
          <p><strong>Date:</strong> {orderDate}</p>
          <p><strong>Shipping Address:</strong> {address}</p>
          <p><strong>Payment Mode:</strong> Cash on Delivery</p>
          <p><strong>Total:</strong> ₹{total.toFixed(2)}</p>
        </div>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={() => navigate("/orders")}
        >
          Go to My Orders
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 max-w-3xl">
      <h1 className="text-3xl font-bold mb-4">Proceed to Checkout</h1>
      <form onSubmit={handlePlaceOrder} className="space-y-4">
        <div>
          <label className="block font-semibold mb-1">Shipping Address</label>
          <textarea
            className="w-full border rounded p-2"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Payment Mode</label>
          <input type="radio" checked readOnly /> Cash on Delivery
        </div>
        <div>
          <h2 className="font-semibold mb-2">Order Summary</h2>
          {cartState.items.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ul className="mb-2">
              {cartState.items.map((item) => (
                <li key={item.id} className="flex justify-between border-b py-1">
                  <span>{item.title} x {item.quantity}</span>
                  <span>₹{(item.price * item.quantity).toFixed(2)}</span>
                </li>
              ))}
            </ul>
          )}
          <div className="font-bold">Total: ₹{cartState.total.toFixed(2)}</div>
        </div>
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded disabled:opacity-50"
          disabled={cartState.items.length === 0}
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;
