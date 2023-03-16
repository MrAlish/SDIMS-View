// /** @type {import('next').NextConfig} */

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// };


// module.exports = {
//   images: {
//     unoptimized: true,
//   }
// };

// module.exports = {
//   reactStrictMode : true,
//   i18n:{
//     locales : ["en","ne"],
//     defaultLocale : "en"
//   }
// }


// module.exports = {
//   images : {
//     domains : [
//       'res.cloudinary.com'
//     ],
//   },
//   webpack(config) {
//     config.module.rules.push({
//       test: /\.svg$/i,
//       issuer: /\.[jt]sx?$/,
//       use: ['@svgr/webpack'],
//     })

//     return config
//   },
// }

// module.exports = nextConfig;



// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// }

// module.exports = {
//   images : {
//     domains : [
//       'res.cloudinary.com'
//     ],
//   },
//   webpack(config) {
//     config.module.rules.push({
//       test: /\.svg$/i,
//       issuer: /\.[jt]sx?$/,
//       use: ['@svgr/webpack'],
//     })

//     return config
//   },
// }


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

module.exports = {
  images: {
    unoptimized: true,
  },
};