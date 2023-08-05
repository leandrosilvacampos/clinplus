import { adaptRoute } from '@/adapters/express-route';
import { makeReadAvailableCompanyHoursController } from '@/factories/controllers/read-available-company-hours';
import { makeReadCompaniesController } from '@/factories/controllers/read-companies';
import express from 'express';
const router = express.Router();

router.get('/', adaptRoute(makeReadCompaniesController()));

router.get('/:id/available-hours', adaptRoute(makeReadAvailableCompanyHoursController()));

export default router;
