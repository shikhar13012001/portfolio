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
  },
  headers: async () => {
    // MUI/Emotion inject <style> tags at runtime with no nonce wiring in this
    // app, so style-src needs 'unsafe-inline'. script-src/connect-src allow
    // Vercel Speed Insights' known script + beacon hosts. form-action is
    // scoped to 'self' plus getform.io, which is where the contact form
    // actually posts (a plain HTML form submit, not fetch/XHR).
    const csp = [
      "default-src 'self'",
      "script-src 'self' https://va.vercel-scripts.com",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data:",
      "font-src 'self'",
      "connect-src 'self' https://va.vercel-scripts.com https://vitals.vercel-insights.com",
      "form-action 'self' https://getform.io",
      "frame-ancestors 'none'",
      "object-src 'none'",
      "base-uri 'self'",
    ].join("; ");
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          { key: "Content-Security-Policy", value: csp },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
