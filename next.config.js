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
            }, 
            {
                protocol : 'https', 
                hostname: 'i.ibb.co'
            }
        ]
    }
}

module.exports = nextConfig
