import Redis from 'ioredis';
import { ENV } from './env';

const redis = new Redis(ENV.REDIS_URL);


// THIS PART PREVENTS THE CRASH:
redis.on('error', (err) => {
  console.error('Redis Connection Error:', err);
});

redis.on('connect', () => {
  console.log('Successfully connected to Redis');
});

export default redis;