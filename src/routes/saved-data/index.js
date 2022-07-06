import { Router } from 'express';
import savedDataController from '../../controller/saved-data.js';

const router = Router();

router.get('/', async (req, res) => savedDataController.getAllData(req, res));
router.get('/:id', async (req, res) => savedDataController.getOneData(req, res));
router.post('/', async (req, res) => savedDataController.postOneData(req, res));
router.delete('/:id', async (req, res) => savedDataController.deleteOneData(req, res));

export default router;