import 'dotenv/config';
import express from 'express';
import { connectDB } from './database.js';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
app.use(cors());
app.use(bodyParser.json());

const port: Number = Number(process.env.SERVER_PORT) || 3001;
const startServer = async () => {
  await app.listen(port, () => {
    console.log(`
Server running on http://localhost:${port}
`);
  });
};

(async () => {
  await connectDB();
  await startServer();
})();
