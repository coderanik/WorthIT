import path from 'path';
import { fileURLToPath } from 'url';
import { analyzeImageDesign } from '../utils/gptRequest.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const rateDesign = async (req, res) => {
  try {
    const imagePath = path.join(__dirname, '../', req.file.path);
    const result = await analyzeImageDesign(imagePath);
    res.json({ rating: result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to rate design' });
  }
};

