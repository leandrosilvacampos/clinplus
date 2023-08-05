import express from 'express';
import { Request, Response } from 'express';
import { dataSource } from './database/config/connection';
import apiConfig from './config/api.json';
import cors from 'cors';

//Routes import
import agreementRouter from './routes/agreements';
import companyRouter from './routes/companies';
import paymentMethodRouter from './routes/payment-methods';
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

app.use(cors());

app.use(express.json());

app.use('/agreements', agreementRouter);
app.use('/companies', companyRouter);
app.use('/payment-methods', paymentMethodRouter);
app.use('/schedules', scheduleRouter);

app.get('/', function (req: Request, res: Response) {
    res.json({ ip: req.ip, message: 'Hello World' });
});

app.listen(apiConfig.port, () => {
    console.log('SERVER IS UP ON PORT:', apiConfig.port);
});
