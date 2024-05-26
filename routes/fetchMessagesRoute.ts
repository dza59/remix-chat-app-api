import express, { Request, Response } from 'express';
import { fetchMessages } from '../controllers/fetchMessageController';

const router = express.Router();

router.get('/getAllMessages', fetchMessages);

export default router;
