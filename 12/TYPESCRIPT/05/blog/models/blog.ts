import { Schema, model, Document } from 'mongoose';

interface IBlog extends Document {
  title: string;
  snippet: string;
  body: string;
  createdAt: Date;
}

const blogSchema = new Schema<IBlog>({
  title: {
    type: String,
    required: true
  },
  snippet: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export const Blog = model<IBlog>('Blog', blogSchema);