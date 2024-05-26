import express, { Request, Response } from 'express';
import { sendMessage } from '../controllers/sendMessageController';

const router = express.Router();

router.post('/sendMessage', sendMessage);

export default router;
