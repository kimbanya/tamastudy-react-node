import { Request, Response } from 'express';
import { Study } from '../../../models/v1/study';
import asyncHandler from '../../../utils/asyncHandler';

//  Public
//  GET
//  v1/study
export const getStudies = asyncHandler(async (req: Request, res: Response, next) => {
  const studies = await Study.find({});
  res.status(200).json(studies);
});

//  Private
//  POST
//  v1/study
export const createStudy = asyncHandler(async (req: Request, res: Response, next) => {
  const newStudy = await Study.create(req.body);
  res.status(201).json(newStudy);
});

//  Public
//  GET
//  v1/study/:studyId
export const getStudy = asyncHandler(async (req: Request, res: Response, next) => {
  const study = await Study.findByIdAndUpdate(
    { _id: req.params.studyId },
    { $inc: { view: 1 } },
    { new: true, runValidators: false },
  );
  if (!study) return next('존재하지않는 스터디입니다. ');
  res.status(200).json(study);
});

//  Private
//  PUT
//  v1/study/:studyId
export const updateStudy = asyncHandler(async (req: Request, res: Response, next) => {
  const updatedStudy = await Study.findByIdAndUpdate(
    { _id: req.params.studyId },
    { ...req.body },
    { new: true, runValidators: false },
  );
  if (!updatedStudy) return next('존재하지않는 스터디입니다. ');
  res.status(201).json(updatedStudy);
});

//  Private
//  DELETE
//  v1/study/:studyId
export const deleteStudy = asyncHandler(async (req: Request, res: Response, next) => {
  const deletedStudy = await Study.findByIdAndDelete({ _id: req.params.studyId });
  if (!deletedStudy) return next('존재하지않는 스터디입니다. ');
  res.status(200).json(deletedStudy);
});

//  Private
//  PUT
//  v1/study/:studyId/like
export const like = asyncHandler(async (req, res, next) => {
  let study = await Study.findById({ _id: req.params.studyId });
  if (!study) return next('스터디가 존재하지 않습니다. ');
  const includesUser = !!study.likes.find((user) => user.toString() === req.user._id.toString());
  if (includesUser) return next('이미 좋아요를 누르셨습니다. ');
  study.likes = [...study.likes, req.user._id];
  study = await Study.findByIdAndUpdate(
    { _id: req.params.studyId },
    { likes: study.likes },
    { new: true, runValidators: false },
  );
  res.status(200).json(study);
});

//  Private
//  PUT
//  v1/study/:studyId/unlike
export const unlike = asyncHandler(async (req, res, next) => {
  let study = await Study.findById({ _id: req.params.studyId });
  if (!study) return next('스터디가 존재하지 않습니다. ');
  const includesUser = !!study.likes.find((user) => user.toString() === req.user._id.toString());
  if (!includesUser) return next('좋아요를 누르지 않으셨습니다. ');
  study.likes = study.likes.filter((user) => user.toString() !== req.user._id.toString());
  study = await Study.findByIdAndUpdate(
    { _id: req.params.studyId },
    { likes: study.likes },
    { new: true, runValidators: false },
  );
  res.status(200).json(study);
});
