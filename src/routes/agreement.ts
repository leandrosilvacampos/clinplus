import { adaptRoute } from '@/adapters/express-route';
import { makeReadAgreementsController } from '@/factories/controllers/read-agreements';
import express from 'express';
const router = express.Router();

router.get('/:companyId/agreements', adaptRoute(makeReadAgreementsController()));

export default router;
