import { adaptRoute } from '@/adapters/express-route';
import { makeReadPaymentMethodsController } from '@/factories/controllers/read-company-payment-methods';
import express from 'express';
const router = express.Router();

router.get('/:companyId/payment-methods', adaptRoute(makeReadPaymentMethodsController()));

export default router;
