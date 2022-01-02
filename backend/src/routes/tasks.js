import { Router } from 'express';
import {getTasks, 
    getTask, 
    getTaskCount, 
    saveTask, 
    deleteTask, 
    updateTask 
} from '../controllers/tasks';

const router = Router();

/**
 * @swagger
 * tags:
 *  name: Tasks
 *  description: Task endpoint
 */

/**
 * @swagger
 * /tasks:
 *  get:
 *      summary: get all tasks
 *      tags: [Tasks]
 */
router.get('/tasks', getTasks)

/**
 * @swagger
 * /tasks/count:
 *  get:
 *      summary: get number of tasks
 *      tags: [Tasks]
 * 
 */
router.get('/tasks/count', getTaskCount)


/**
 * @swagger
 * /tasks:
 *  get:
 *      summary: get one task by given id
 *      tags: [Tasks]
 * 
 */
router.get('/tasks/:id', getTask)

/**
 * @swagger
 * /tasks:
 *  post:
 *      summary: save a task
 *      tags: [Tasks]
 */
router.post('/tasks', saveTask)

/**
 * @swagger
 * /tasks:
 *  delete:
 *      summary: delete a task by given an id
 *      tags: [Tasks]
 */
router.delete('/tasks/:id', deleteTask)

/**
 * @swagger
 * /tasks:
 *  put:
 *      summary: update a task by given an id
 *      tags: [Tasks]
 */
router.put('/tasks/:id', updateTask)

export default router;