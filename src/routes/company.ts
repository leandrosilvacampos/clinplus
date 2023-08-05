import { ReadAvailableCompanyHoursController } from '@/controllers/company/read-available-company-hours';
import { ReadCompaniesController } from '@/controllers/company/read-companies';
import express from 'express';
const router = express.Router();

router.get('/', new ReadCompaniesController().handle);

router.get('/:id/available-hours', new ReadAvailableCompanyHoursController().handle);

export default router;
