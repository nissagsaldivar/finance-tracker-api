import express, { Express, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { SpendingData, SpendingRequest, ApiResponse } from './types/index';

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

app.get('/finance-data', (req:Request, res:Response, next:NextFunction) => {
    res.json({
        items:[
            {id: 'Weed', value: 300},
            {id: 'Rent', value: 1650},
            {id: 'Groceries', value: 400}
        ]
    })
})

// start listening
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
