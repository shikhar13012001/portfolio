import { motion } from "framer-motion";
import React from "react";
import { NextSeo } from "next-seo";
import { SITE, ogImageAbsoluteUrl } from "../../lib/site-config";

const Layout = ({
  children,
  title,
  description,
  path = "/",
  image,
  imageWidth,
  imageHeight,
  jsonLd,
}) => {
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
  const ogImage = image || ogImageAbsoluteUrl;
  // Google/LinkedIn/X read every JSON-LD script on the page as one entity
  // graph, so a distinct block per type (Person, WebSite, CreativeWork,
  // BreadcrumbList, ...) is the standard multi-entity pattern.
  const jsonLdBlocks = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];
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
              url: ogImage,
              width: imageWidth || SITE.ogImageWidth,
              height: imageHeight || SITE.ogImageHeight,
              alt: title || SITE.name,
            },
          ],
        }}
        twitter={{
          handle: SITE.twitterHandle,
          site: SITE.twitterHandle,
          cardType: "summary_large_image",
        }}
      />
      {jsonLdBlocks.map((block, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}
      {children}
    </motion.div>
  );
};

export default Layout;