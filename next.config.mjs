/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      domains: ['lh3.googleusercontent.com'],
  },
  env: {
      NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
  transpilePackages: ['react-quill'],
  webpack: (config) => {
      config.resolve.alias = {
          ...config.resolve.alias,
          'quill$': 'quill/dist/quill.js',
      }
      return config
  },
};

export default nextConfig;