const express = require('express');
const { createTask, getUserTasks, updateTaskProgress } = require('../controllers/taskController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/create', authMiddleware, createTask);
router.get('/user-tasks', authMiddleware, getUserTasks);
router.put('/update-progress', authMiddleware, updateTaskProgress);

module.exports = router;
