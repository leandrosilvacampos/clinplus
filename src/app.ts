import express from 'express';
import { Request, Response } from 'express';
import { dataSource } from './database/config/connection';
import apiConfig from './config/api.json';

//Routes import
import scheduleRouter from './routes/schedules';

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

app.use('/schedules', scheduleRouter);

app.get('/', function (req: Request, res: Response) {
    res.json({ ip: req.ip, message: 'Hello World' });
});

app.listen(apiConfig.port, () => {
    console.log('SERVER IS UP ON PORT:', apiConfig.port);
});
