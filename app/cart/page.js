"use client";
import { useEffect, useState } from "react";

export default function CartPage() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(data);
  }, []);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">🛒 Your Order</h1>

      {cart.length === 0 && (
        <p className="text-gray-700">No items in cart.</p>
      )}

      {cart.map((item, i) => (
        <div
          key={i}
          className="bg-white p-4 mb-4 rounded shadow flex justify-between items-center"
        >
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              {item.name}
            </h2>
            <p className="text-gray-700">₹{item.price}</p>
          </div>
        </div>
      ))}

      {cart.length > 0 && (
        <div className="mt-6 bg-white p-6 rounded shadow max-w-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Total: ₹{total}
          </h2>

          <button
            onClick={() => {
              alert("Order Placed Successfully!");
              localStorage.removeItem("cart");
              setCart([]);
            }}
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
          >
            Place Order
          </button>
        </div>
      )}
    </div>
  );
}
