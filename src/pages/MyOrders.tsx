import React, { useEffect, useState } from "react";

interface Order {
  id: number;
  items: { id: number; title: string; price: number; quantity: number }[];
  total: number;
  address: string;
  payment: string;
  date: string;
}

const MyOrders: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("bhuvikart-orders");
    if (stored) setOrders(JSON.parse(stored));
  }, []);

  return (
    <div className="container mx-auto p-6 max-w-3xl">
      <h1 className="text-3xl font-bold mb-4">My Orders</h1>
      {orders.length === 0 ? (
        <p className="mb-4">You have not placed any orders yet.</p>
      ) : (
        <div className="space-y-6">
          {orders.map(order => (
            <div key={order.id} className="border rounded p-4 bg-white shadow">
              <div className="mb-2">
                <span className="font-semibold">Order ID:</span> {order.id}
                <span className="ml-4 font-semibold">Date:</span> {order.date}
              </div>
              <div className="mb-2">
                <span className="font-semibold">Shipping Address:</span> {order.address}
              </div>
              <div className="mb-2">
                <span className="font-semibold">Payment Mode:</span> {order.payment}
              </div>
              <div className="mb-2">
                <span className="font-semibold">Items:</span>
                <ul className="pl-6 list-disc">
                  {order.items.map(item => (
                    <li key={item.id}>
                      {item.title} x {item.quantity} (₹{(item.price * item.quantity).toFixed(2)})
                    </li>
                  ))}
                </ul>
              </div>
              <div className="font-bold">Total: ₹{order.total.toFixed(2)}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyOrders;