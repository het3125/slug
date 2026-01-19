"use client";

export default function OrderButton({ item }) {
  return (
    <button
      onClick={() => {
        const cart = JSON.parse(localStorage.getItem("cart") || "[]");
        cart.push(item);
        localStorage.setItem("cart", JSON.stringify(cart));
        alert("Item added to cart!");
        window.location.href = "/cart";
      }}
      className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
    >
      Order Now
    </button>
  );
}
