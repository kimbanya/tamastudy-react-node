import dotenv from 'dotenv';
dotenv.config({ path: '../.env' });
export default {
  PORT: process.env.SERVER_PORT || 5000,
  MONGO_URL: process.env.MONGO_URL || '',
  JWT_SECRET: process.env.JWT_SECRET || '',
};
