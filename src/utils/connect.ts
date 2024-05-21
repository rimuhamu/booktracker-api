import mongoose from 'mongoose';
import { log } from './logger';

export async function connect() {
  const DBUrl = process.env.DATABASE_URL;

  try {
    await mongoose.connect(DBUrl);
    log.info('Connected to DB');
  } catch (error) {
    log.error("Couldn't connect to DB");
    process.exit(1);
  }
}
