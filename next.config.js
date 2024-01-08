/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "clinicalaiassistance.com",
        port: "",
        pathname: "/img/**",
      },
      {
        protocol: "https",
        hostname: "img.icons8.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "w7.pngwing.com",
        port: "",
        pathname: "/**",
      },

      {
        protocol: "https",
        hostname: "pngimg.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
