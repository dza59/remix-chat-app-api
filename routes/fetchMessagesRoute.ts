import express, { Request, Response } from 'express';
import { fetchMessage } from '../controllers/fetchMessageController';

const router = express.Router();

router.get('/send-message', fetchMessage);

export default router;
