// 2. DYNAMIC SITEMAP
// This file automatically generates a sitemap.xml at yourdomain.com/sitemap.xml
// Submit this exact URL to Google Search Console to tell Google to index your site.

export default function sitemap() {
  const baseUrl = "https://proresume-builder.vercel.app/"; // TODO: Replace with your actual domain

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1, // 1 is the highest priority, indicating this is the most important page
    },
    // If you add a /templates or /about page later, you would add them here:
    // {
    //   url: `${baseUrl}/templates`,
    //   lastModified: new Date(),
    //   changeFrequency: 'monthly',
    //   priority: 0.8,
    // },
  ];
}
