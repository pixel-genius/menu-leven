/** @type {import('next').NextConfig} */
//  add url media (image)
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname: '188.121.118.102',
            pathname: '/**',
          },
        ],
      },
};



export default nextConfig;
