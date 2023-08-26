import { adaptMiddleware } from '@/adapters/express-middleware';
import { adaptRoute } from '@/adapters/express-route';
import { makeCreateScheduleController } from '@/factories/controllers/create-schedule';
import { makeAuthMiddleware } from '@/factories/middlewares/auth';
import express from 'express';
const router = express.Router();

router.post('/:companyId/schedules', adaptMiddleware(makeAuthMiddleware()), adaptRoute(makeCreateScheduleController()));

export default router;
