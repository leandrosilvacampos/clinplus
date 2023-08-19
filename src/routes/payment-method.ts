import { ReadPaymentMethodsController } from '@/controllers/payment-method/read-payment-methods';
import express from 'express';
const router = express.Router();

router.get('/:companyId/payment-methods', new ReadPaymentMethodsController().handle);

export default router;
