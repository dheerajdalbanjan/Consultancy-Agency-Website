/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol: "https" , 
                hostname:"www.bhagwanbhagat.com"
            }, 
            {
                protocol: "https" , 
                hostname:"images.news9live.com"
            }
        ]
    }
}

module.exports = nextConfig
