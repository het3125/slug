import { notFound } from "next/navigation";

const menu = [
  {
    slug: "gujarati-thali",
    name: "Gujarati Thali",
    price: 120,
    description: "Dal, Sabji, Roti, Rice, Sweet"
  },
  {
    slug: "punjabi-thali",
    name: "Punjabi Thali",
    price: 150,
    description: "Paneer, Butter Roti, Dal Makhani, Rice"
  },
  {
    slug: "jain-thali",
    name: "Jain Thali",
    price: 140,
    description: "No onion, No garlic, Pure Jain food"
  }
];

// ✅ SEO
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const item = menu.find(m => m.slug === slug);

  if (!item) {
    return {
      title: "Menu Not Found",
      description: "This menu item does not exist"
    };
  }

  return {
    title: item.name + " | Tiffin Service",
    description: item.description
  };
}

// ✅ PAGE
export default async function Page({ params }) {
  const { slug } = await params;
  const item = menu.find(m => m.slug === slug);

  if (!item) notFound();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-8">
        <h1 className="text-3xl font-bold mb-4">{item.name}</h1>
        <p className="text-gray-600 mb-6">{item.description}</p>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-green-600">₹{item.price}</span>
          <button className="bg-green-600 text-black px-6 py-3 rounded-lg hover:bg-green-700 transition">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
}
