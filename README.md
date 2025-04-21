
# WorthIt

This backend service provides functionalities to rate product designs and evaluate the worth of products based on user reviews, description, price, and features. It utilizes OpenAI's GPT-4 for processing and evaluating image design and product value.

## Features

1. **Design Rating**:
   - Analyze product images and rate their design based on sleekness, minimalism, and color palette.
   - The design is analyzed using GPT-4 and the rating is provided along with a brief justification.
   
2. **Product Worth Evaluation**:
   - Evaluate if a product is worth the price based on its reviews, description, price, and features.
   - Uses GPT-4 to make a decision ("Yes", "No", or "Depends") on whether the product is worth the extra cost.

## Tech Stack
- **Express.js**: Web server for handling HTTP requests.
- **Multer**: Middleware for handling file uploads.
- **OpenAI API**: Used for generating responses and evaluations based on GPT-4.
- **Node.js**: Backend runtime environment.
- **dotenv**: Loads environment variables (e.g., OpenAI API key).
- **cors**: Middleware to enable Cross-Origin Request Sharing.

## Installation

1. Clone this repository:
   ```bash
   git clone <repository_url>
   ```

2. Navigate to the project directory:
   ```bash
   cd <project_directory>
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory with the following variables:
   ```env
   OPENAI_API_KEY=<your_openai_api_key>
   ```

5. Run the server:
   ```bash
   npm start
   ```

   The server will run on `http://localhost:5000` by default.

## Endpoints

### `/api/design/rate`
**POST**: Upload an image to rate the design of a product.

- **Form Data**:
  - `image`: The image file of the product design (must be in the `image/jpeg` format).

- **Response**:
  - `rating`: The rating of the design (e.g., a score from 1 to 10).
  - Example Response:
    ```json
    {
      "rating": "8.5 - The design is minimalistic with a sleek color palette but lacks some distinctive elements."
    }
    ```

### `/api/review/check-worth`
**POST**: Evaluate whether a product is worth the price based on reviews, description, price, and features.

- **Request Body**:
  ```json
  {
    "reviews": ["Review 1", "Review 2", "Review 3"],
    "description": "Product description goes here.",
    "price": 199.99,
    "features": ["Feature 1", "Feature 2"]
  }
  ```

- **Response**:
  - `decision`: "Yes", "No", or "Depends" along with an explanation.
  - Example Response:
    ```json
    {
      "decision": "Depends - The product offers great features, but the price is higher than average for similar products."
    }
    ```

## File Uploads

Uploaded images will be saved to the `uploads/` folder. This folder should be present in your project directory.

## Directory Structure
```
/project
│
├── /controllers
│   ├── designController.js
│   └── reviewController.js
│
├── /routes
│   ├── designRoutes.js
│   └── reviewRoutes.js
│
├── /utils
│   ├── gptRequest.js
│
├── /uploads
│   └── (Uploaded files will be stored here)
│
├── .env (API keys and environment variables)
├── package.json
└── server.js
```

## Environment Variables
- **OPENAI_API_KEY**: Your OpenAI API key to access GPT-4.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
