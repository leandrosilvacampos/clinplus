import { ReadCompaniesController } from '@/controllers/read-companies';
import express from 'express';
const router = express.Router();

router.get('/', new ReadCompaniesController().handle);

export default router;
