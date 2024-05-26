import express, { Request, Response } from 'express';
import cors from 'cors';
import mongoose, { ConnectOptions } from 'mongoose';
import sendMessageRoute from '../routes/sendMessageRoute';
import fetchMessageRoute from '../routes/fetchMessagesRoute';
import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT || 3000;
const mongodbUrl =
  process.env.MONGODB_URL || 'mongodb://localhost:27017/express-mongodb';

console.log('MONGODB_URL:', process.env.MONGODB_URL);

const app = express();

var CorsOptions = {
  credentials: true,
  origin: ['*'],
};

app.use(cors(CorsOptions));
app.use(express.json());

// Routes
app.use('/api', sendMessageRoute);
app.use('/api', fetchMessageRoute);

app.get('/', (req: Request, res: Response) => res.send('Express on Vercel'));

mongoose
  .connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error(err));

app.listen(PORT, () => console.log('Server ready on port 3000.'));

export default app;
