import { adaptRoute } from '@/adapters/express-route';
import { makeReadCompanyAgreementsController } from '@/factories/controllers/read-company-agreements';
import express from 'express';
const router = express.Router();

router.get('/:companyId/agreements', adaptRoute(makeReadCompanyAgreementsController()));

export default router;
