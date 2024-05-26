import express, { Request, Response } from 'express';
import cors from 'cors';
import http from 'http';
import mongoose from 'mongoose';
import { ConnectOptions } from 'mongoose';
const PORT = process.env.PORT || 3000;
const mongodbUrl = process.env.MONGODB_URL || '';

const app = express();

var CorsOptions = {
  credentials: true,
  origin: ['*'],
};

app.use(cors(CorsOptions));

app.use(express.json());

// Routes
app.use('/api', require('../routes/fetchMessagesRoute'));
app.use('/api', require('../routes/sendMessageRoute'));

app.get('/', (req: Request, res: Response) => res.send('Express on Vercel'));

mongoose
  .connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error(err));

app.listen(3000, () => console.log('Server ready on port 3000.'));

export default app;
