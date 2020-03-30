const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studyCategorySchema = new Schema({
  title: {
    type: String,
    required: [true, '타이틀을 입력해주세요. '],
  },
  study: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Study',
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('StudyCategory', studyCategorySchema);
