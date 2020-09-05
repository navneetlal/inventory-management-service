import loginRouter from './login';
import productRouter from './product';

import express from 'express';

const router = express.Router();

router.use('/', loginRouter)
router.use('/', productRouter)

export default router;