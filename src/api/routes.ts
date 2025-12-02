import { Router } from 'express';
import downloadRouter from './download/route.download.js';

const router = Router();

router.use('/download', downloadRouter);

export default router;
