import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // WordPress URLs end in "/", so keep them identical for SEO.
  trailingSlash: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      // WordPress-only URLs that are indexed or linked from the old site
      { source: "/testimonial/:slug*", destination: "/reviews/", permanent: true },
      { source: "/author/:slug*", destination: "/blog/", permanent: true },
      { source: "/:year(\\d{4})/:month(\\d{2})/:day(\\d{2})", destination: "/blog/", permanent: true },
      { source: "/:year(\\d{4})/:month(\\d{2})", destination: "/blog/", permanent: true },
      { source: "/feed", destination: "/blog/", permanent: true },
      { source: "/comments/feed", destination: "/blog/", permanent: true },
      { source: "/home", destination: "/", permanent: true },
      { source: "/contact", destination: "/contact-us/", permanent: true },
      { source: "/about", destination: "/about-us/", permanent: true },
      { source: "/wp-sitemap.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/sitemap_index.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/wp-admin/:path*", destination: "/", permanent: false },
      { source: "/wp-login.php", destination: "/", permanent: false },
    ];
  },
};

export default nextConfig;
