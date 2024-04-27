import express from 'express';
import cors from 'cors';
import 'dotenv/config'

import {data} from './movies-limit.js';

const app = express();
const port = 3000;

app.use(cors({
    origin: process.env.REACT_URL
}));

app.get('/api/movies', (req, res) => {
    console.log("Request from " + req.ip);
    res.send({status: 200, message: 'Welcome to the Movies API', payload: data});
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});