import { Router } from 'express';
import { getProfile, updateProfile } from '../controllers/user.controller.js';
import { verifyToken } from '../middlewares/auth.jwt.js';

const router = Router();

// Protected routes - require authentication
router.use(verifyToken);

router.get('/profile', getProfile);
router.put('/profile', updateProfile);

export default router; 
