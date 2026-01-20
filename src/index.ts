import express from 'express';
import type { Request, Response } from 'express';


// const express = require('express');
const app = express();
const PORT = 3000;

app.get('/healthz', (req: Request, res: Response) => {
    res.status(200).send('OK');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});