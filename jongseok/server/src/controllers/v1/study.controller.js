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

exports.getStudyById = asyncHandler(async (req, res, next) => {
  const study = await Study.findByIdAndUpdate(
    { _id: req.params.studyId },
    { $inc: { view: 1 } }, // api가 호출될때마다(즉 한번씩 getPostById를 볼때마다) 조회수(view) 늘리는 로직
    { new: true, runValidators: false },
  ).populate({
    path: 'participant',
    model: 'User',
    select: 'username email',
  });

  if (!study) {
    return next(new Error('스터디가 존재하지 않습니다. '));
  }
  res.status(200).json({
    success: true,
    result: study,
    error: null,
  });
});

exports.joinStudyById = asyncHandler(async (req, res, next) => {
  let updateParticipantInStudy = await Study.findById({ _id: req.params.studyId });

  if (!updateParticipantInStudy) {
    return next(new Error('스터디가 존재하지 않습니다.'));
  }

  if (updateParticipantInStudy.participant.length >= updateParticipantInStudy.maxParticipant) {
    return next(new Error('정원 마감입니다 .'));
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
