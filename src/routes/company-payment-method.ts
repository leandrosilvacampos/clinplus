import { adaptMiddleware } from '@/adapters/express-middleware';
import { adaptRoute } from '@/adapters/express-route';
import { makeReadPaymentMethodsController } from '@/factories/controllers/read-company-payment-methods';
import { makeAuthMiddleware } from '@/factories/middlewares/auth';
import express from 'express';
const router = express.Router();

router.get('/:companyId/payment-methods', adaptMiddleware(makeAuthMiddleware()), adaptRoute(makeReadPaymentMethodsController()));

export default router;
