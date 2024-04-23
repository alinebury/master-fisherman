import express from 'express';
import { router } from './routes/index';

const app = express();

app.use(express.json());
app.use('/', router);

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
