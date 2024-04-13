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
            }, 
            {
                protocol: 'https', 
                hostname: 'm.media-amazon.com'
            }, 
            {
                protocol: "https", 
                hostname: 'images.indianexpress.com'
            }, 
            {
                protocol: 'https', 
                hostname: 'images-na.ssl-images-amazon.com'
            }, 
            {
                protocol: 'https', 
                hostname: 'images-eu.ssl-images-amazon.com'
            }
        ]
    }
}

module.exports = nextConfig
