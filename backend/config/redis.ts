import Redis from 'ioredis';

const redisUrl = process.env.REDIS_URL;

export const redis = redisUrl 
  ? new Redis(redisUrl) 
  : new Redis({
      host: process.env.REDIS_HOST || '127.0.0.1',
      port: Number(process.env.REDIS_PORT) || 6379,
      password: process.env.REDIS_PASSWORD,
    });

// THIS PART PREVENTS THE CRASH:
redis.on('error', (err) => {
  console.error('Redis Connection Error:', err);
});

redis.on('connect', () => {
  console.log('Successfully connected to Redis');
});
