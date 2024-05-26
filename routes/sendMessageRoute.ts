import express, { Request, Response } from 'express';
import { sendMessage } from '../controllers/sendMessageControllers';

const router = express.Router();

router.post('/send-message', sendMessage);

export default router;
