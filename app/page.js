import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="bg-card border border-border p-10 rounded-2xl shadow-lg text-center max-w-md">
        <h1 className="text-3xl font-bold mb-4 text-foreground">
          🍱 Welcome to Tiffin Service
        </h1>

        <p className="text-foreground mb-6">
          Fresh, healthy and homemade food delivered daily.
        </p>

        <Link
          href="/menu"
          className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:opacity-90 transition"
        >
          View Menu
        </Link>
      </div>
    </div>
  );
}
