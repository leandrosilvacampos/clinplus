import { CreateScheduleController } from '@/controllers/create-schedule';
import express from 'express';
const router = express.Router();

router.post('/', new CreateScheduleController().handle);

export default router;
