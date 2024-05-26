import { Request, Response } from 'express';
import Message from '../models/Message';

const fetchMessages = async (req: Request, res: Response) => {
  try {
    const messages = await Message.find();
    if (!messages) {
      res.status(204).json({ message: 'Messages not found' });
    }

    res.json(messages);
  } catch (err) {
    res.status(500).send('Internal Server Error');
  }
};

export { fetchMessages };
