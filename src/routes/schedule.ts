import { adaptRoute } from '@/adapters/express-route';
import { makeCreateScheduleController } from '@/factories/controllers/create-schedule';
import express from 'express';
const router = express.Router();

router.post('/:companyId/schedules', adaptRoute(makeCreateScheduleController()));

export default router;
