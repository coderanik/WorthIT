import express from 'express';
import { checkWorth } from '../controllers/reviewController.js';

const router = express.Router();

router.post('/check-worth', checkWorth);

export default router;
