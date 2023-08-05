import { ReadAgreementsController } from '@/controllers/agreement/read-agreements';
import express from 'express';
const router = express.Router();

router.get('/', new ReadAgreementsController().handle);

export default router;
