import express from 'express';
import 'dotenv/config';
import { dataSource } from './data/type-orm/config/data-source';
import apiConfig from './config/api.json';
import cors from 'cors';
import companyAgreementRouter from './routes/company-agreement';
import companyRouter from './routes/company';
import companyPaymentMethodRouter from './routes/company-payment-method';
import scheduleRouter from './routes/schedule';
import userRouter from './routes/user';
import helmet from 'helmet';

dataSource
    .initialize()
    .then(() => {
        console.info('Database has been initialized!');
    })
    .catch((err) => {
        console.error('Error during Database initialization:', err);
    });

const app = express();

app.use(helmet());

app.use(cors({ origin: ['http://35.239.141.210', 'http://35.239.141.210:4200'] }));

app.use(express.json());

app.use('/companies', [companyRouter, companyAgreementRouter, companyPaymentMethodRouter, scheduleRouter]);
app.use('/users', userRouter);

app.listen(apiConfig.port, () => {
    console.info('SERVER IS UP ON PORT:', apiConfig.port);
});
