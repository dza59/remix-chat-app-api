import { Request, Response } from 'express';
import Message from '../models/Message';

const sendMessage = async (req: Request, res: Response) => {
  const { message } = req.body;

  try {
    if (!message) {
      res.status(400).json({ message: 'Message is required' });
    }

    const result = await Message.create({ content: message });
    res.status(201).json({ success: result });
  } catch (err) {
    res.status(500).send('Internal Server Error');
  }
};

export { sendMessage };
