/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async () => {
    return [
      {
        source: "/works",
        destination: "/works/gissues",
        permanent: true,
      }, 
      {
        destination: "/works/blackbird",
        source: "/works/black-bird-blog",
        permanent: true,
      },
      {
        destination: "/works/louvre",
        source: "/works/louvre-meaux",
        permanent: true,
      },
      {
        destination: "/works/prospero",
        source: "/works/prospero",
        permanent: true,
      }, 
    ];
  }
};

module.exports = nextConfig;
