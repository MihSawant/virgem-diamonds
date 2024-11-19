/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

    images: {
    domains: ['https://webby-production.s3.amazonaws.com', 'webby-production.s3.amazonaws.com', '*'],
  },

}

module.exports = nextConfig



