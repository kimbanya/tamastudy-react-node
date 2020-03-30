const express = require('express');

// controller
const { getStudies, createStudy } = require('../../controllers/v1/study.controller');

// model
const Study = require('../../database/models/Study');

// middleware
const { getCurrentUserId } = require('../../middleware/auth');
const advancedGetResult = require('../../middleware/advancedGetResult');

const router = express.Router();

router.get('/', getStudies);
router.get('/create', getCurrentUserId, createStudy);
module.exports = router;
