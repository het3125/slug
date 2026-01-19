import { notFound } from "next/navigation";
import OrderButton from "./OrderButton";

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

// ✅ SEO (SERVER ONLY)
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const item = menu.find(m => m.slug === slug);

  if (!item) {
    return {
      title: "Menu Not Found | Tiffin Service",
      description: "This menu item does not exist"
    };
  }

  return {
    title: `${item.name} | Best Tiffin Service`,
    description: item.description
  };
}

// ✅ PAGE (SERVER)
export default async function Page({ params }) {
  const { slug } = await params;
  const item = menu.find(m => m.slug === slug);

  if (!item) notFound();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="bg-card border border-border rounded-2xl shadow-xl max-w-lg w-full p-8">
        <h1 className="text-3xl font-bold mb-4 text-foreground">{item.name}</h1>
        <p className="text-foreground mb-6">{item.description}</p>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-foreground">₹{item.price}</span>

          {/* 👇 CLIENT BUTTON */}
          <OrderButton item={item} />
        </div>
      </div>
    </div>
  );
}
