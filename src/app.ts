import express from 'express';
import { Request, Response } from 'express';
import { dataSource } from './data/type-orm/config/data-source';
import apiConfig from './config/api.json';
import cors from 'cors';

//Routes import
import companyAgreementRouter from './routes/company-agreement';
import companyRouter from './routes/company';
import companyPaymentMethodRouter from './routes/company-payment-method';
import scheduleRouter from './routes/schedule';
import userRouter from './routes/user';

dataSource
    .initialize()
    .then(() => {
        console.info('Database has been initialized!');
    })
    .catch((err) => {
        console.error('Error during Database initialization:', err);
    });

const app = express();

app.use(cors({ origin: ['http://localhost', 'http://localhost:4200'] }));

app.use(express.json());

app.use('/companies', [companyRouter, companyAgreementRouter, companyPaymentMethodRouter, scheduleRouter]);
app.use('/users', userRouter);

app.get('/', function (req: Request, res: Response) {
    res.json({ ip: req.ip, message: 'Hello World' });
});

app.listen(apiConfig.port, () => {
    console.info('SERVER IS UP ON PORT:', apiConfig.port);
});
