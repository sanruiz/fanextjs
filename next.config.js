if (!process.env.WORDPRESS_API_URL) {
  throw new Error(`
      Please provide a valid WordPress instance URL.
      Add to your environment variables WORDPRESS_API_URL.
    `)
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.familyassets.com',
        port: '',
        pathname: '/wp-content/**',
      },
      {
        protocol: 'https',
        hostname: 'familyassets.s3.amazonaws.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'media.familyassets.comhttps',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'media.familyassets.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'stg-fa-single.familyassets.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'staging.familyassets.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.aplaceformom.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'd13iq96prksfh0.cloudfront.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'd354o3y6yz93dt.cloudfront.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.aplaceformom.com',
        port: '',
        pathname: '/**',
      }
    ],

  },
  experimental: {

  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  }
}

module.exports = nextConfig


