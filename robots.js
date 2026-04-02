// 3. ROBOTS INSTRUCTIONS
// This file automatically generates a robots.txt at yourdomain.com/robots.txt
// It tells web crawlers (like Googlebot) which pages they are allowed to scan.

export default function robots() {
  const baseUrl = "https://proresume-builder.vercel.app/";

  return {
    rules: {
      userAgent: "*", // Applies to all search engine bots
      allow: "/", // Allows them to crawl the entire site
      disallow: "/api/", // Prevents crawling of your backend API routes if you add them later
    },
    sitemap: `${baseUrl}/sitemap.xml`, // Points the bots to your sitemap
  };
}
