export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: "https://fazel-client.vercel.app/sitemap.xml",
  };
}
