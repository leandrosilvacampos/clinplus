import { adaptMiddleware } from '@/adapters/express-middleware';
import { adaptRoute } from '@/adapters/express-route';
import { makeReadCompanyAgreementsController } from '@/factories/controllers/read-company-agreements';
import { makeAuthMiddleware } from '@/factories/middlewares/auth';
import express from 'express';
const router = express.Router();

router.get('/:companyId/agreements', adaptMiddleware(makeAuthMiddleware()), adaptRoute(makeReadCompanyAgreementsController()));

export default router;
