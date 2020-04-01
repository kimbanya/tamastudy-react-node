const express = require('express');
const studyTodoRouters = require('./studyTodo.route');
// controller
const {
  getStudies,
  createStudy,
  getStudyById,
  joinStudyById,
  updateLikeByStudyId,
  updateUnLikeByStudyId,
} = require('../../controllers/v1/study.controller');

// model
const Study = require('../../database/models/Study');

// middleware
const { getCurrentUserId } = require('../../middleware/auth');
const advancedGetResult = require('../../middleware/advancedGetResult');

const router = express.Router();

// merge Route
router.use('/:studyId/studyTodo', studyTodoRouters);

router.get('/', getStudies);
router.post('/create', getCurrentUserId, createStudy);
router.get('/:studyId', getStudyById);
router.put('/join/:studyId', getCurrentUserId, joinStudyById);
router.put('/like/:studyId', getCurrentUserId, updateLikeByStudyId);
router.put('/unlike/:studyId', getCurrentUserId, updateUnLikeByStudyId);

module.exports = router;
