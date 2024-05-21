import mongoose from 'mongoose';

const { Schema } = mongoose;

const BlogPostSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    maxlength: 150,
  },
  
  author: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
    required: true,
    trim: true,
  },
  content: {
    type: String,
    required: true,
    trim: true,
  },
  tags: {
    type: [String],
    default: [],
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

BlogPostSchema.pre('save', function(next) {
  this.updatedAt = new Date();
  next();
});

const Blog = mongoose.models.Blog || mongoose.model('Blog', BlogPostSchema);

export default Blog;
