/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol: "https" , 
                hostname:"www.bhagwanbhagat.com"
            }
        ]
    }
}

module.exports = nextConfig
