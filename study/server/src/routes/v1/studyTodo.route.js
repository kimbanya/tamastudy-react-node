const express = require('express');
const {
  createStudyTodo,
  getStudyTodosByStudyId,
  updateCompletedStatusByStudyId,
  deleteStudyTodoByStudyId,
} = require('../../controllers/v1/studyTodo.controller');

// middleware
const { getCurrentUserId } = require('../../middleware/auth');

const router = express.Router({ mergeParams: true });

// 컨트롤러를 불러온다. (즉, 이전에 작성했던 '로직'만 컨트롤러로 옮겼다고 생각하면 된다.)

router.route('/create').post(getCurrentUserId, createStudyTodo);
router.route('/').get(getStudyTodosByStudyId);
router.route('/status/:studyTodoId').put(updateCompletedStatusByStudyId);
router.route('/delete/:studyTodoId').delete(deleteStudyTodoByStudyId);

module.exports = router;
