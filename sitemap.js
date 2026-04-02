// 2. DYNAMIC SITEMAP
// This file automatically generates a sitemap.xml at yourdomain.com/sitemap.xml
// Submit this exact URL to Google Search Console to tell Google to index your site.

export default function sitemap() {
  const baseUrl = "https://proresume-builder.vercel.app"; 
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/templates`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];
}
