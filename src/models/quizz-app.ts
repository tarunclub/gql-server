import mongoose, { Document, Schema, Model } from 'mongoose';

interface Option {
  optionText: string;
  tip: string;
  correct: boolean;
  dropZone: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  imageDetails: {
    path: string;
    height: number;
    width: number;
  };
}

interface ImageDetails {
  path: string;
  height?: number;
  width?: number;
}

interface Question {
  questionText: string;
  options: Option[];
  solution: string;
  timer: number;
  questionType: string;
  imageDetails: ImageDetails;
  taskDescription: string;
}

interface Quiz {
  questions: Question[];
}

interface OptionDocument extends Option, Document {}
interface ImageDetailsDocument extends ImageDetails, Document {}
interface QuestionDocument extends Question, Document {}
interface QuizDocument extends Quiz, Document {}

const optionSchema = new Schema<OptionDocument>({
  optionText: String,
  tip: String,
  correct: Boolean,
  dropZone: {
    x: Number,
    y: Number,
    width: Number,
    height: Number,
  },
  imageDetails: {
    path: String,
    height: Number,
    width: Number,
  },
});

const imageDetailsSchema = new Schema<ImageDetailsDocument>({
  path: String,
  height: Number,
  width: Number,
});

const questionSchema = new Schema<QuestionDocument>({
  questionText: String,
  options: [optionSchema],
  solution: String,
  timer: Number,
  questionType: String,
  id: String,
  imageDetails: imageDetailsSchema,
  taskDescription: String,
});

const quizSchema = new Schema<QuizDocument>({
  questions: [questionSchema],
});

// Create the Mongoose models
const OptionModel = mongoose.model<OptionDocument>('Option', optionSchema);
const ImageDetailsModel = mongoose.model<ImageDetailsDocument>(
  'ImageDetails',
  imageDetailsSchema
);
const QuestionModel = mongoose.model<QuestionDocument>(
  'Question',
  questionSchema
);
const QuizModel = mongoose.model<QuizDocument>('Quiz', quizSchema);

export { QuizModel, QuestionModel, OptionModel, ImageDetailsModel };
