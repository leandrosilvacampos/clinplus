import { adaptMiddleware } from '@/adapters/express-middleware';
import { adaptRoute } from '@/adapters/express-route';
import { makeLoginController } from '@/factories/controllers/login';
import { makeReadUserSchedulesController } from '@/factories/controllers/read-user-schedules';
import { makeAuthMiddleware } from '@/factories/middlewares/auth';
import express from 'express';
const router = express.Router();

router.post('/login', adaptRoute(makeLoginController()));

router.get('/schedules', adaptMiddleware(makeAuthMiddleware()), adaptRoute(makeReadUserSchedulesController()));

export default router;
