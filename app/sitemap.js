// src/app/sitemap.js

export default function sitemap() {
  // 🔹 यही वही menu है जो तुम project में use कर रहे हो
  const menu = [
    { slug: "gujarati-thali" },
    { slug: "punjabi-thali" },
    { slug: "jain-thali" },
  ];

  // 🔹 Dynamic URLs generate होंगे
  const menuUrls = menu.map(item => ({
    url: `http://localhost:3000/menu/${item.slug}`,
    lastModified: new Date(),
  }));

  // 🔹 Final sitemap URLs
  return [
    {
      url: "http://localhost:3000/",
      lastModified: new Date(),
    },
    {
      url: "http://localhost:3000/menu",
      lastModified: new Date(),
    },
    {
      url: "http://localhost:3000/cart",
      lastModified: new Date(),
    },
    ...menuUrls, // 👈 yahan saare dynamic pages add ho jaayenge
  ];
}
