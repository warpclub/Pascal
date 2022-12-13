/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  plugins: [
    {
      autoprefixer: {
        grid: "autoplace",
      },
    },
  ]
}

module.exports = nextConfig