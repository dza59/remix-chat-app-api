import { Request, Response } from 'express';
import Message from '../models/message';

const fetchMessage = async (req: Request, res: Response) => {
  const { message } = req.body;

  try {
    const messages = await Message.find();

    if (!messages) {
      res.status(404).json({ message: 'Messages not found' });
    }

    res.status(200).json({ messages });
  } catch (err) {
    res.status(500).send('Internal Server Error');
  }
};

export { fetchMessage };
