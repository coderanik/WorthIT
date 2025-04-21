import { evaluateValue } from '../utils/gptRequest.js';

export const checkWorth = async (req, res) => {
  const { reviews, description, price, features } = req.body;
  try {
    const result = await evaluateValue(reviews, description, price, features);
    res.json({ decision: result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'LLM evaluation failed' });
  }
};
