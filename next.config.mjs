import { config } from 'dotenv';

config();

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    IGDB_API_KEY: process.env.IGDB_API_KEY,
    IGDB_CLIENT_ID: process.env.IGDB_CLIENT_ID,
  },
};

export default nextConfig;

