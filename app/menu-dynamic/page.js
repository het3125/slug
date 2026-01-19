"use client";
import { useEffect, useState, useRef } from "react";

// ✅ THROTTLE FUNCTION (OUTSIDE COMPONENT)
function throttle(fn, delay) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      fn(...args);
    }
  };
}

export default function DynamicMenuPage() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);   // ✅ MISSING STATE ADDED
  const [search, setSearch] = useState("");
  const debounceRef = useRef(null);

  // =========================
  // 1️⃣ LOAD INITIAL PRODUCTS
  // =========================
  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=12")
      .then(res => res.json())
      .then(data => {
        setProducts(data.products);
        setFiltered(data.products);
      });
  }, []);

  // =========================
  // 2️⃣ DEBOUNCE SEARCH (API)
  // =========================
  useEffect(() => {
    // If search empty, show default list
    if (!search) {
      setFiltered(products);
      return;
    }

    // ❌ Cancel previous timer
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    // ✅ Start new timer
    debounceRef.current = setTimeout(() => {
      console.log("🌐 API CALL for:", search);

      fetch(`https://dummyjson.com/products/search?q=${search}`)
        .then(res => res.json())
        .then(data => {
          console.log("✅ API RESULT:", data.products.length);
          setFiltered(data.products);
        });
    }, 1000); // 👈 1 second debounce

  }, [search, products]);

  // =========================
  // 3️⃣ THROTTLED SCROLL
  // =========================
  useEffect(() => {
    const onScroll = throttle(() => {
      console.log("📜 Throttled scroll...");
    }, 1000);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // =========================
  // UI
  // =========================
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-900">
        🌐 Dynamic Menu (With Search + Debounce + Throttle)
      </h1>

      <input
        className="w-full max-w-md mx-auto block mb-8 p-3 border rounded
                   text-black placeholder-gray-500 bg-white
                   focus:outline-none focus:ring-2 focus:ring-green-500"
        placeholder="Search product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="bg-white p-6 rounded-xl shadow block hover:shadow-lg transition"
          >
            <h2 className="text-lg font-bold text-gray-900 mb-2">
              {item.title}
            </h2>
            <p className="text-green-600 font-bold">
              ₹{item.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
