import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-2xl shadow-lg text-center max-w-md">
        <h1 className="text-3xl font-bold mb-4 text-gray-900">
          🍱 Welcome to Tiffin Service
        </h1>
        <p className="text-gray-600 mb-6">
          Fresh, healthy and homemade food delivered daily.
        </p>
        <Link
          href="/menu"
          className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
        >
          View Menu
        </Link>
      </div>
    </div>
  );
}
