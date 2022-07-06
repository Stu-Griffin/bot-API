import { Router } from 'express';
import userController from '../../controller/bot-users.js';

const router = Router();

router.get('/', async (req, res) => userController.getAllUsers(req, res));
router.get('/:id', async (req, res) => userController.getOneUser(req, res));
router.post('/', async (req, res) => userController.signUpUser(req, res));
router.delete('/:id', async (req, res) => userController.deleteOneUser(req, res));

export default router;