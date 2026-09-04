/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async () => {
    // Old project URLs no longer exist — send everything to the homepage.
    const legacy = [
      "/works",
      "/works/gissues",
      "/works/blackbird",
      "/works/black-bird-blog",
      "/works/louvre",
      "/works/louvre-meaux",
      "/works/prospero",
    ];
    return legacy.map((source) => ({
      source,
      destination: "/",
      permanent: true,
    }));
  }
};

module.exports = nextConfig;
