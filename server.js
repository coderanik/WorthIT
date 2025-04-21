import express from 'express';
import cors from 'cors';
import "dotenv/config";
import designRoutes from './routes/designRoutes.js';
import reviewRoutes from './routes/reviewRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

app.use('/api/design', designRoutes);
app.use('/api/review', reviewRoutes);

app.get('/',(req,res)=>{
  res.send("Backend is working");
})



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
