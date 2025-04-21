import express from 'express';
import multer from 'multer';
import { rateDesign } from '../controllers/designController.js';

const router = express.Router();

const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname),
});

const upload = multer({ storage });

router.post('/rate', upload.single('image'), rateDesign);

export default router;
