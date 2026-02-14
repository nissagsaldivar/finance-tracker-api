import express from 'express';
import type { Request, Response } from 'express';

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/healthz', (req: Request, res: Response) => {
    res.status(200).send('OK');
    console.log(req);
});

app.post('/income', (req: Request, res: Response) => {
    const { amount } = req.body || {};
  
    if (typeof amount !== 'number' || !isFinite(amount)) {
      return res.status(400).json({ error: 'Invalid income: must be a float' });
    }
  
    res.status(201).json({ message: `Entered Income: $${amount.toFixed(2)}` });
  });

app.post('/post', (req: Request, res: Response) => {
  res.status
})
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

