/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'frontend-tech-test-data.s3-eu-west-1.amazonaws.com',
                port: '',
                pathname: '/img/**',
            },
        ],
    },
}

module.exports = nextConfig
