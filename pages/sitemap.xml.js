import fs from "fs";
const Sitemap = () => {
  return null;
};

export const getServerSideProps = async ({ res }) => {
  const baseUrl = "https://shikhar.design";
  const BASE_DIR = process.env.NODE_ENV === "production" ? "./" : "pages";
  const forbiddenPages = [
    "api",
    "product",
    "_app.js",
    "privacy-policy.js",
    "_document.js",
    "404.js",
    "500.js",
    "sitemap.xml.js",
    "node_modules",
    "package.json",
    ".next",
    "__next",
    "___next_launcher.cjs",
    "___vc",
    "___vc_bridge",
    "works",
  ];
  const staticPages = fs
    .readdirSync(BASE_DIR)
    .filter((staticPage) => !forbiddenPages.includes(staticPage));
  const WorkPaths = [
    "futurepedia",
    "blackbird",
    "gissues",
    "louvre",
    "prospero",
  ];
  const dynamicPages = WorkPaths.map((work) => `/works/${work}`);
  const pages = [...staticPages, ...dynamicPages,'/'];
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset
        xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
    >
        ${pages
          .map((page) => {
            const path =  page;
            return `
                    <url>
                        <loc>${baseUrl}${path}</loc>
                        <changefreq>daily</changefreq>
                        <priority>0.7</priority>
                    </url>
                `;
          })
          .join("")}
    </urlset>
    `;
  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();
  return {
    props: {},
  };
};

export default Sitemap;
