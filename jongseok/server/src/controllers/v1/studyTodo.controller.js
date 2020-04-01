const asyncHandler = require('../../middleware/asyncHandler');
const StudyTodo = require('../../database/models/StudyTodo');
const Study = require('../../database/models/Study');

exports.createStudyTodo = asyncHandler(async (req, res, next) => {
  const existStudy = await Study.findById({ _id: req.params.studyId });
  if (!existStudy) {
    return res.status(400).json({
      success: false,
      error: '스터디정보가 없습니다.',
      result: null,
    });
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
    return res.status(400).json({
      success: false,
      error: '스터디정보가 없습니다.',
      result: null,
    });
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
    return res.status(400).json({
      success: false,
      error: '스터디정보가 없습니다.',
      result: null,
    });
  }

  let todo = await StudyTodo.findById({
    _id: req.params.studyTodoId,
  });

  if (!todo) {
    return res.status(400).json({
      success: false,
      error: 'Todo 정보가 없습니다.',
      result: null,
    });
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
    return res.status(400).json({
      success: false,
      error: '스터디정보가 없습니다.',
      result: null,
    });
  }

  const todo = await StudyTodo.findByIdAndDelete({
    _id: req.params.studyTodoId,
  });

  if (!todo) {
    return res.status(400).json({
      success: false,
      error: 'Todo 정보가 없습니다.',
      result: null,
    });
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
