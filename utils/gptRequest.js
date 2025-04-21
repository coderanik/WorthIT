import fs from 'fs';
import { OpenAI } from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export const analyzeImageDesign = async (imagePath) => {
  const imageData = fs.readFileSync(imagePath, { encoding: 'base64' });

  const response = await openai.chat.completions.create({
    model: 'gpt-4-turbo',
    messages: [
      {
        role: 'user',
        content: [
          {
            type: 'text',
            text: "Rate the product design on a scale of 1 to 10 based on sleekness, minimalism, and color palette. Justify your score briefly.",
          },
          {
            type: 'image_url',
            image_url: { url: `data:image/jpeg;base64,${imageData}` },
          },
        ],
      },
    ],
    max_tokens: 300,
  });

  return response.choices[0].message.content;
};

export const evaluateValue = async (reviews, description, price, features) => {
  const prompt = `
Based on the following:
- Product Reviews: ${reviews.join('\n')}
- Description: ${description}
- Price: ${price}
- Features: ${features.join(', ')}

Is the product worth the extra spend compared to average products? Answer "Yes", "No", or "Depends" and explain why.
  `;

  const response = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [{ role: 'user', content: prompt }],
    max_tokens: 250,
  });

  return response.choices[0].message.content;
};
