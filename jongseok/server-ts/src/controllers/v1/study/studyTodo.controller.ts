import { Request, Response } from 'express';
import { Study, StudyTodo } from '../../../models/v1/study';
import asyncHandler from '../../../utils/asyncHandler';

//  Public
//  GET
//  v1/study/:studyId/todo
export const getTodos = asyncHandler(async (req: Request, res: Response, next) => {
  const todos = await StudyTodo.find();
  res.status(200).json(todos);
});

//  Private
//  POST
//  v1/study/:studyId/todo
export const createTodo = asyncHandler(async (req, res: Response, next) => {
  const newTodo = await StudyTodo.create({ ...req.body, user: req.user._id });
  const study = await Study.findById({ _id: req.params.studyId });
  if (!study) return next('스터디가 존재하지않습니다. ');
  study.todos.push(newTodo._id);
  await study.save();
  res.status(200).json(newTodo);
});

//  Private
//  POST
//  v1/study/:studyId/todo/:todoId
export const updateTodo = asyncHandler(async (req, res: Response, next) => {
  const updatedTodo = await StudyTodo.findByIdAndUpdate(
    { _id: req.params.todoId },
    { ...req.body },
    { new: true, runValidators: false },
  );
  if (!updatedTodo) return next('해당 투두는 존재하지 않습니다. ');
  res.status(200).json(updatedTodo);
});

//  Private
//  POST
//  v1/study/:studyId/todo/:todoId
export const deleteTodo = asyncHandler(async (req, res: Response, next) => {
  let todo = await StudyTodo.findById({ _id: req.params.todoId });
  if (!todo) return next('해당투두는 존재하지 않습니다. ');
  if (todo.user.toString() !== req.user._id.toString())
    return next(new Error('해당 권한이 없습니다.'));
  // cascade
  await Study.updateOne({ _id: req.params.studyId }, { $pull: { todos: todo._id } });
  await todo.remove();
  res.status(200).json(todo);
});
