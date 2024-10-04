import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
            protocol: 'https',
            hostname: '**',
            },
        ],
        domains: ['profile-namnv.b-cdn.net'],
    },
};

export default withNextIntl(nextConfig);
