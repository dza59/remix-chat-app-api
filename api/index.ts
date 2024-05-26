import express, { Request, Response } from 'express';

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

app.get('/', (req: Request, res: Response) => res.send('Express on Vercel'));

app.listen(3000, () => console.log('Server ready on port 3000.'));

export default app;
