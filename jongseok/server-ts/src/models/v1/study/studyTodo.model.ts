import mongoose, { Document, Schema } from 'mongoose';
import { IUser } from './../user.model';

export interface IStudyTodo extends Document {
  content: string;
  completed: boolean;
  user: IUser['_id'];
}

const StudyTodoSchema: Schema = new Schema(
  {
    content: {
      type: String,
      required: [true, '투두항목을 입력해주세요.'],
      maxlength: [1000, '1000자 이내로 입력해주세요.'],
      trim: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model<IStudyTodo>('StudyTodo', StudyTodoSchema);
