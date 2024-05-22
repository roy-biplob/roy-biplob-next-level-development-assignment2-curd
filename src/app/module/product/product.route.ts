import express from 'express';
import { ProductControllers } from './product.controller';

const router = express.Router();

router.post('/api/products', ProductControllers.createProduct);
router.get('/api/products', ProductControllers.getAllStudents);
router.get('/api/products/:productId', ProductControllers.getSingleStudents);
router.put('/api/products/:productId', ProductControllers.updateSingleProduct);

export const ProductRoutes = router;
