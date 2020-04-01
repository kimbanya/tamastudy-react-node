const express = require('express');
const studyTodoRouters = require('./studyTodo.route');
// controller
const {
  getStudies,
  createStudy,
  joinStudyByStudyId,
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
router.put('/join/:studyId', getCurrentUserId, joinStudyByStudyId);

module.exports = router;
