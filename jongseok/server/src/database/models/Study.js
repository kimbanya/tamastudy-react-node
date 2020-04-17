const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studySchema = new Schema({
  category: {
    type: mongoose.Types.ObjectId,
    ref: 'StudyCategory',
    required: true,
  },
  title: {
    type: String,
    required: [true, '타이틀을 입력해주세요. '],
  },
  description: {
    type: String,
    required: [true, '본문을 입력해주세요. '],
  },
  imgUrl: {
    type: String,
    required: [true, '이미지주소를 입력해주세요.'],
  },
  lat: {
    type: Number,
    required: [true, '위도(latitude)를 입력해주세요. '],
    trim: true,
  },
  lng: {
    type: Number,
    required: [true, '경도(longitude)를 입력해주세요. '],
    trim: true,
  },
  address: {
    type: String,
    required: [true, '주소를 입력해주세요.'],
  },
  view: {
    type: Number,
    default: 0,
  },
  like: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'User',
    },
  ],
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  participant: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'User',
    },
  ],
  minParticipant: {
    type: Number,
    min: [2, '설정가능한 최소인원은 2명입니다. '],
    max: [19, '설정가능한 최대인원은 20명입니다. '],
    required: [true, '최소인원을 입력해주세요. '],
    default: 2,
  },
  maxParticipant: {
    type: Number,
    min: [2, '설정가능한 최소인원은 20명입니다. '],
    max: [20, '설정가능한 최대인원은 20명입니다. '],
    required: [true, '최대인원을 입력해주세요. '],
    default: 20,
  },
  todos: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'StudyTodo',
      required: true,
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

Study;

module.exports = mongoose.model('Study', studySchema);
