import { Router } from 'express';
import book from './book';

const router: Router = Router();
router.use('/book', book);
export default router;
