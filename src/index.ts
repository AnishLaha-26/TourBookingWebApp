import express, { Express } from 'express';
const app: Express = express();

// Define your middleware and routes here
// For example:
// app.use(express.json());
// app.use('/api', routes);

const PORT: number = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});