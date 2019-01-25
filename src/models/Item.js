import mongoose from 'mongoose';

const { Schema } = mongoose;

const itemSchema = new Schema({
  originUrl: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: true
  },
  plainText: String,
  lastUpdated: {
    required: true,
    type: Date,
    default: Date.now
  },
  firstCreated: {
    required: true,
    type: Date,
    default: Date.now
  }
});

itemSchema.set('toJSON', {
  virtuals: true,
  transform: (doc, ret, options) => {
    delete ret.__v;
    ret.id = ret._id.toString();
    delete ret._id;
  }
});

export default mongoose.model('Item', itemSchema);
