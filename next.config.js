/**   @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: false,
    swcMinify: true,
    // output: "standalone",
    // images: { unoptimized: true },
  
    watch: true,
  
    publicRuntimeConfig: {
      // Will be available on both server and client
      reactAppUrl: process.env.REACT_API_URL,
    }
  };
  
  module.exports = nextConfig;
  