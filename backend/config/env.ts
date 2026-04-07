import dotenv from 'dotenv';
dotenv.config();

export const ENV = {
  PORT: process.env.BASE_PORT || 5000,
  // CLIENT
  CLIENT_ORIGINS: process.env.CLIENT_ORIGINS || 'http://localhost:5000',
  CLIENT_ORIGIN: process.env.CLIENT_ORIGIN,

  // SERVER
  BASE_URL: process.env.BASE_URL || 'http://localhost:5000',
  NODE_ENV: process.env.NODE_ENV || 'development',
  // REDIS_URL: process.env.REDIS_URL || 'redis://127.0.0.1:6379',

  // DATABASE
  DB_HOST: process.env.DB_HOST!, // "!" asserts it's not undefined (must include in .env)
  DB_USER: process.env.DB_USER!,
  DB_PASSWORD: process.env.DB_PASSWORD!,
  DB_NAME: process.env.DB_NAME!,
  TIDB_CA: process.env.TIDB_CA!,
  // SECRETS

  JWT_SECRET: process.env.JWT_SECRET!,
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN!,

  // LOGIN PROVIDER SECRETS
  //------GOOGLE ------------
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID!,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET!,
  //----- GITHUB ------------
  GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID!,
  GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET!,
  //------ LINKEDIN -------------
  LINKEDIN_CLIENT_ID: process.env.LINKEDIN_CLIENT_ID!,
  LINKEDIN_CLIENT_SECRET: process.env.LINKEDIN_CLIENT_SECRET!,

  SESSION_SECRET: process.env.SESSION_SECRET,
};
