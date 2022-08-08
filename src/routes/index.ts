import { Router } from 'express';

import user from './user.routes';
import event from './event.routes';

const router = Router();

router.use('/user', user);
router.use('/event', event);

export default router;
