/** @type {import('next').NextConfig} */
const nextConfig = {
    remotePatterns:[
        {
            protocol: "https",
            hostname : "images.pexels.com"
        }
    ]
}

module.exports = nextConfig
