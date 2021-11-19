const path = require("path/posix");

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: "./",
  pageExtensions: ["page.tsx", "page.ts"],
  webpack: (config) => {
    entry: "./src/scripts/content.ts";
    output: {
      filename: "content.js";
      path: path.resolve(__dirname, "dist");
    }
    return config;
  },
};
