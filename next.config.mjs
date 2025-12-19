/** @type {import("next").NextConfig} */
const nextConfig = {
  output: "export",
  distDir: ".next",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
