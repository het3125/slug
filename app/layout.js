import "./globals.css";

export const metadata = {
  title: "Tiffin Service - Home Made Food",
  description: "Best homemade tiffin service. Gujarati, Punjabi, Jain thali available.",
  keywords: ["tiffin service", "gujarati thali", "punjabi thali", "jain thali", "home food"],
  openGraph: {
    title: "Tiffin Service",
    description: "Order fresh homemade food daily",
    type: "website"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
