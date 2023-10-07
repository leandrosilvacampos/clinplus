import { adaptMiddleware } from '@/adapters/express-middleware';
import { adaptRoute } from '@/adapters/express-route';
import { makeReadAvailableCompanyHoursController } from '@/factories/controllers/read-available-company-hours';
import { makeReadAvailableCompanySpecialtiesController } from '@/factories/controllers/read-available-company-specialties';
import { makeReadCompaniesController } from '@/factories/controllers/read-companies';
import { makeAuthMiddleware } from '@/factories/middlewares/auth';
import express from 'express';
const router = express.Router();

router.get('/', adaptMiddleware(makeAuthMiddleware()), adaptRoute(makeReadCompaniesController()));

router.get('/:id/available-hours', adaptMiddleware(makeAuthMiddleware()), adaptRoute(makeReadAvailableCompanyHoursController()));

router.get(
    '/:id/available-specialties',
    adaptMiddleware(makeAuthMiddleware()),
    adaptRoute(makeReadAvailableCompanySpecialtiesController())
);

export default router;
