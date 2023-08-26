import { adaptRoute } from '@/adapters/express-route';
import { makeLoginController } from '@/factories/controllers/login';
import express from 'express';
const router = express.Router();

router.post('/login', adaptRoute(makeLoginController()));

export default router;
