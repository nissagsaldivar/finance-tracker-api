import express, { Express, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { SpendingData, SpendingRequest, ApiResponse } from './types/index';
import db from './db';

const app: Express = express();
const PORT = process.env.PORT || 3001;

//Middleware
app.use(cors());
app.use(express.json());

console.log("Middleware is configured");

// routes
app.get('/healthz', (req:Request, res:Response, next:NextFunction) => {
    res.json({
        status:"OK"
    })
})

app.get('/finance-data', (req: Request, res: Response, next: NextFunction) => {
    // fetch all spending rows from the database
    const items = db.prepare('SELECT category as id, value FROM spending').all();
    res.json({ items });
  })

// add a new spending item
app.post('/finance-data', (req: Request, res: Response, next: NextFunction) => {
    const { category, amount } = req.body;
  
    // validate the request body
    if (!category || !amount) {
      res.status(400).json({ error: 'category and amount are required' });
      return;
    }
  
    // insert into the database
    const insert = db.prepare('INSERT INTO spending (category, value) VALUES (?, ?)');
    insert.run(category, amount);
  
    res.json({ message: 'Spending item added successfully' });
  });
  
// start listening
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
