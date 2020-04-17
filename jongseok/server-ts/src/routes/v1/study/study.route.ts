import express from 'express';
import commentRoutes from './studyComment.route';
import todoRoutes from './studyTodo.route';
import { unlike } from '../../../controllers/v1/study/study.controller';
import { requireAuth } from '../../../middlewares/requireAuth';
import {
  getStudies,
  createStudy,
  getStudy,
  updateStudy,
  deleteStudy,
  like,
} from '../../../controllers/v1/study/study.controller';

const router = express.Router();

router.use('/:studyId/comment', commentRoutes);
router.use('/:studyId/todo', todoRoutes);

router.get('/', getStudies);
router.post('/', requireAuth, createStudy);
router.get('/:studyId', getStudy);
router.put('/:studyId', requireAuth, updateStudy);
router.delete('/:studyId', requireAuth, deleteStudy);
router.put('/:studyId/like', requireAuth, like);
router.put('/:studyId/unlike', requireAuth, unlike);

export default router;
