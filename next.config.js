const { VERCEL_URL, HOTPEPPER_API_KEY } = process.env;

module.exports = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    VERCEL_URL,
  },
  serverRuntimeConfig: {
    HOTPEPPER_API_KEY,
  },
};
