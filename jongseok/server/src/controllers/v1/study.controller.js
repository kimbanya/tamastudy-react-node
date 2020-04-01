const asyncHandler = require('../../middleware/asyncHandler');
const Study = require('../../database/models/Study');

exports.getStudies = asyncHandler(async (req, res, next) => {
  const studies = await Study.find().populate({
    path: 'todos',
    model: 'StudyTodo',
    select: 'text',
  });
  res.status(200).json({
    success: true,
    result: studies,
    error: null,
  });
});

exports.createStudy = asyncHandler(async (req, res, next) => {
  const newStudy = await Study.create({
    category: req.currentUserId,
    user: req.currentUserId,
    ...req.body,
  });

  res.status(200).json({
    success: true,
    result: newStudy,
    error: null,
  });
});
