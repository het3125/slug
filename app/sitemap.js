export default function sitemap() {
  return [
    { url: "http://localhost:3000/", lastModified: new Date() },
    { url: "http://localhost:3000/menu", lastModified: new Date() },
    { url: "http://localhost:3000/menu/gujarati-thali", lastModified: new Date() },
    { url: "http://localhost:3000/menu/punjabi-thali", lastModified: new Date() },
    { url: "http://localhost:3000/menu/jain-thali", lastModified: new Date() },
  ];
}
