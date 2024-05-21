import * as dotenv from 'dotenv';
import { connect } from './utils/connect';
import { log } from './utils/logger';
import { createServer } from './utils/server';

dotenv.config();

const PORT = process.env.PORT;

const app = createServer();

app.listen(PORT, async function () {
  log.info(`App is running at http://localhost:${PORT}`);
  await connect();
});
