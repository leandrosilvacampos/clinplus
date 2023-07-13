import express from 'express';
import { Request, Response } from 'express';
import { dataSource } from './database/config';

const PORT: number = 3000;

dataSource
    .initialize()
    .then(() => {
        console.log('Database has been initialized!');
    })
    .catch((err) => {
        console.error('Error during Database initialization:', err);
    });

const app = express();

app.use(express.json());

app.get('/', function (req: Request, res: Response) {
    res.json({ ip: req.ip, message: 'Hello World' });
});

app.listen(PORT, () => {
    console.log('SERVER IS UP ON PORT:', PORT);
});
