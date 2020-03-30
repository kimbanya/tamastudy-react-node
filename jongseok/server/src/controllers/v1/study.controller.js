const asyncHandler = require('../../middleware/asyncHandler');
const Study = require('../../database/models/Study');

exports.getStudies = asyncHandler(async (req, res, next) => {
  const studies = await Study.find();
  res.status(200).json({
    success: true,
    result: studies,
    error: null,
  });
});

exports.createStudy = asyncHandler(async (req, res, next) => {
  const newStudy = await Study.create({ ...req.body, user: req.currentUserId });
  res.status(200).json({
    success: true,
    result: newStudy,
    error: null,
  });
});
