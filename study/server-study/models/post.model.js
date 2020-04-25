const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    title: {
      type: String,
      maxlength: [20, '20자 이내로 입력해주세요'],
      description: [255, '255자 이내로 입력해주세요'],
    },
  },
  { timestamps: true, toJSON: true },
);

module.exports = mongoose.model('Post', postSchema);
