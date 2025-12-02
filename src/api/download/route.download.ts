import { Router } from 'express';
import { downloadResume } from './controller.download.js';

const router = Router();

router.get('/resume', downloadResume);

export default router;
