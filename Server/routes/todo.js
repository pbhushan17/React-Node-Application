import express from 'express';
import { createTodos, readTodos, updateTodos } from '../controller/todo.js';


const router = express.Router();
router.get('/', readTodos);
router.post('/', createTodos);
router.patch('/:id', updateTodos);

export default router;