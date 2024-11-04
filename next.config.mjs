/** @type {import('next').NextConfig} */
//  add url media (image)
const nextConfig = {
  images: {
    remotePatterns: [
      {
      protocol: 'http',
      hostname: 'admin.levenbakery.ir',
      pathname: '/**',
      },
    ],
    },
};

export default nextConfig;