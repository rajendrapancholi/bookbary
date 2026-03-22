export const ENV = {
  // Frontend-safe
  APP_NAME: process.env.VITE_APP_NAME || 'BookBary',
  API_BASE_URL:
    process.env.VITE_AXIOS_BASE_URL || 'http://localhost:5000/api',
};

export const CLIENT_ORIGINS = (process.env.NEXT_PUBLIC_CLIENT_ORIGINS || '')
  .split(',')
  .map((origin) => origin.trim());
