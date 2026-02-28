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

// start listening
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
