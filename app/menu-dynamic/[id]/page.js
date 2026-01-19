import { notFound } from "next/navigation";

// ✅ Fetch single product safely
async function getProduct(id) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return null;
  }

  const text = await res.text();   // 👈 SAFETY
  if (!text) return null;

  return JSON.parse(text);
}

// ✅ SEO
export async function generateMetadata({ params }) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) {
    return {
      title: "Product Not Found",
      description: "This product does not exist",
    };
  }

  return {
    title: product.title,
    description: product.description,
  };
}

// ✅ PAGE
export default async function Page({ params }) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) notFound();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-8">
        <h1 className="text-2xl font-bold mb-4 text-gray-900">
          {product.title}
        </h1>

        <img
          src={product.image}
          alt={product.title}
          className="w-40 h-40 object-contain mx-auto mb-4"
        />

        <p className="text-gray-600 mb-4">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-green-600">
            ₹{product.price}
          </span>

          <button className="bg-green-600 text-white px-6 py-3 rounded-lg">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
