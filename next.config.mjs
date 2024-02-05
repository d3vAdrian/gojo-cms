// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images:{
//         remotePatterns:[
//             {
//                 protocol: 'https',
//                 hostname: 'liveblocks.io',
//                 port:''
//             }
//         ]
//     }
// };
// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
      if (isServer) {
        // Exclude specified modules from server-side rendering
        config.externals.push(
          /^(utf-8-validate|bufferutil|canvas)$/
        );
      }
      return config;
    },
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "liveblocks.io",
          port: "",
        },
      ],
    },
    typescript: {
      ignoreBuildErrors: true,
    },
  };
  
  export default nextConfig;
