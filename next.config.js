/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["i.pravatar.cc"],
  },
  experimental: {
    serverComponentsExternalPackages: ["mongoose"],
    mdxRs: true,
  },
};

module.exports = nextConfig;
