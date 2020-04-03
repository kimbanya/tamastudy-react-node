const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studyTodoSchema = new Schema(
  {
    text: {
      type: String,
      required: [true, 'ToDo를 입력해주세요. '],
    },
    completed: {
      type: Boolean,
      default: false,
    },
    study: {
      type: mongoose.Types.ObjectId,
      ref: 'Study',
      required: [true, 'Study를 입력해주세요. '],
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: [true, 'User를 입력해주세요. '],
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('StudyTodo', studyTodoSchema);
