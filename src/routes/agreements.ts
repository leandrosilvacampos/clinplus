import { ReadAgreementsController } from '@/controllers/read-agreements';
import express from 'express';
const router = express.Router();

router.get('/', new ReadAgreementsController().handle);

export default router;
