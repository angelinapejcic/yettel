var mongoose = require('mongoose');

var blogsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  body: { type: String, required: true },
  date: { type: Date, default: Date.now },
  updateDate: { type: Date },
  likes: { type: Number, default: 0 },
  category: { type: String, enum: ['najbitniji', 'obican'], required: true }
});

blogsSchema.set('toJSON', { virtuals: true });

var blogs = mongoose.model('blog', blogsSchema);

exports = module.exports = blogs;

