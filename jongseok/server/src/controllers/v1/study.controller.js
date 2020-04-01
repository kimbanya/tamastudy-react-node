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

exports.joinStudyByStudyId = asyncHandler(async (req, res, next) => {
  let updateParticipantInStudy = await Study.findById({ _id: req.params.studyId });

  if (!updateParticipantInStudy) {
    return next(new Error('스터디가 존재하지 않습니다.'));
  }

  if (updateParticipantInStudy.participant.find((p) => p.toString() === req.currentUserId)) {
    return next(new Error('이미 참석하셨습니다.'));
  }

  updateParticipantInStudy = await Study.findByIdAndUpdate(
    { _id: req.params.studyId },
    { participant: [...updateParticipantInStudy.participant, req.currentUserId] },
    { new: true, runValidators: false },
  );

  res.status(200).json({
    success: true,
    result: updateParticipantInStudy,
    error: null,
  });
});
