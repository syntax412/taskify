import { Router } from 'express';
const router = Router();
import {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
  showStats,
} from '../controllers/taskController.js';
import {
  validateTaskInput,
  validateIdParam,
} from '../middleware/validationMiddleware.js';
import { checkForTestUser } from '../middleware/authMiddleware.js';

// router.get('/',getAllTasks)
// router.post('/',createTask)

router
  .route('/')
  .get(getAllTasks)
  .post(checkForTestUser, validateTaskInput, createTask);

router.route('/stats').get(showStats);

router
  .route('/:id')
  .get(validateIdParam, getTask)
  .patch(checkForTestUser, validateTaskInput, validateIdParam, updateTask)
  .delete(checkForTestUser, validateIdParam, deleteTask);

export default router;
