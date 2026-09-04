import { motion } from "framer-motion";
import React from "react";
import { NextSeo } from "next-seo";
import { SITE, ogImageAbsoluteUrl } from "../../lib/site-config";

const Layout = ({ children, title, description, path = "/", jsonLd }) => {
  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };
  const metaDescription = description || SITE.description;
  const canonical = `${SITE.url}${path}`;
  // next-seo's NextSeo (not DefaultSeo) ignores `defaultTitle`, and its
  // titleTemplate uses module-level state — so build the final title here.
  const pageTitle = title
    ? SITE.titleTemplate.replace("%s", title)
    : SITE.defaultTitle;
  return (
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ type: "linear" }}
      className="layout"
    >
      <NextSeo
        title={pageTitle}
        description={metaDescription}
        canonical={canonical}
        openGraph={{
          url: canonical,
          title: title ? `${title} | ${SITE.name}` : SITE.defaultTitle,
          description: metaDescription,
          type: "website",
          site_name: SITE.name,
          locale: SITE.locale,
          images: [
            {
              url: ogImageAbsoluteUrl,
              width: SITE.ogImageWidth,
              height: SITE.ogImageHeight,
              alt: SITE.name,
            },
          ],
        }}
        twitter={{
          handle: SITE.twitterHandle,
          site: SITE.twitterHandle,
          cardType: "summary_large_image",
        }}
      />
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      {children}
    </motion.div>
  );
};

export default Layout;