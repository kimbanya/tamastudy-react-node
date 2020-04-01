const asyncHandler = require('../../middleware/asyncHandler');
const StudyTodo = require('../../database/models/StudyTodo');
const Study = require('../../database/models/Study');

exports.createStudyTodo = asyncHandler(async (req, res, next) => {
  const existStudy = await Study.findById({ _id: req.params.studyId });
  if (!existStudy) {
    return next(new Error('스터디정보가 없습니다. '));
  }

  if (existStudy.participant.find((pt) => pt.toString() === req.currentUserId) === undefined) {
    return next(new Error('먼저 스터디에 참가해주세요. '));
  }

  const newTodo = await StudyTodo.create({
    ...req.body,
    user: req.currentUserId,
    study: req.params.studyId,
  });

  existStudy.todos.push(newTodo._id);
  await existStudy.save();

  res.status(201).json({
    success: true,
    error: null,
    result: newTodo,
  });
});

exports.getStudyTodosByStudyId = asyncHandler(async (req, res, next) => {
  const existStudy = await Study.findById({ _id: req.params.studyId });

  if (!existStudy) {
    return next(new Error('스터디정보가 없습니다. '));
  }

  const todos = await StudyTodo.find({ study: req.params.studyId });

  res.status(200).json({
    success: true,
    error: null,
    result: todos,
  });
});

exports.updateCompletedStatusByStudyId = asyncHandler(async (req, res, next) => {
  const existStudy = await Study.findById({ _id: req.params.studyId });

  if (!existStudy) {
    return next(new Error('스터디정보가 없습니다. '));
  }

  let todo = await StudyTodo.findById({
    _id: req.params.studyTodoId,
  });

  if (!todo) {
    return next(new Error('Todo 정보가 없습니다. '));
  }

  todo = await StudyTodo.findByIdAndUpdate(
    {
      _id: req.params.studyTodoId,
    },
    { completed: !todo.completed },
    {
      new: true,
      runValidators: false,
    },
  );

  res.status(200).json({
    success: true,
    error: null,
    result: todo,
  });
});

exports.deleteStudyTodoByStudyId = asyncHandler(async (req, res, next) => {
  const existStudy = await Study.findById({ _id: req.params.studyId });

  if (!existStudy) {
    return next(new Error('스터디정보가 없습니다. '));
  }

  const todo = await StudyTodo.findByIdAndDelete({
    _id: req.params.studyTodoId,
  });

  if (!todo) {
    return next(new Error('Todo 정보가 없습니다. '));
  }

  await existStudy.updateOne(
    { _id: req.params.studyId },
    { $pull: { todos: todo.id } }, // 꺼내오는것, 즉 삭제 (cascade)
  );

  res.status(200).json({
    success: true,
    error: null,
    result: todo._id,
  });
});
