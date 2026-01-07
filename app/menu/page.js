import Link from "next/link";

const menu = [
  { name: "Gujarati Thali", slug: "gujarati-thali", price: 120 },
  { name: "Punjabi Thali", slug: "punjabi-thali", price: 150 },
  { name: "Jain Thali", slug: "jain-thali", price: 140 },
];

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold text-center mb-10">🍽 Our Tiffin Menu</h1>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {menu.map((item) => (
          <Link
            key={item.slug}
            href={`/menu/${item.slug}`}
            className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition block"
          >
            <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
            <p className="text-gray-600 mb-4">Delicious & Healthy Meal</p>
            <p className="text-green-600 font-bold text-lg">₹{item.price}</p>
            <div className="mt-4 text-blue-600 font-medium">View Details →</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
