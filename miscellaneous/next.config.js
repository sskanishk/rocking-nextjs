/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // redirect some page to other whiole they are on fixing work. 
  redirects: async () => {
    return [
      {
        source: '/about',
        destination: '/',
        permanent: true //308   if false // 301 required for crawler
      }
    ]
  }
}

module.exports = nextConfig
