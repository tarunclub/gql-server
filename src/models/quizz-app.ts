import mongoose, { Document, Model } from 'mongoose';

interface Feedback {
  from: number;
  to: number;
  feedback: string;
}

interface TipsAndFeedback {
  tip: string;
  chosenFeedback: string;
  notChosenFeedback: string;
}

interface Behaviour {
  enableRetry: boolean;
  enableSolutionsButton: boolean;
  enableCheckButton: boolean;
  type: string;
  singlePoint: boolean;
  randomAnswers: boolean;
  showSolutionsRequiresInput: boolean;
  confirmCheckDialog: boolean;
  confirmRetryDialog: boolean;
  autoCheck: boolean;
  passPercentage: number;
  showScorePoints: boolean;
}

interface UI {
  checkAnswerButton: string;
  submitAnswerButton: string;
  showSolutionButton: string;
  tryAgainButton: string;
  tipsLabel: string;
  scoreBarLabel: string;
  tipAvailable: string;
  feedbackAvailable: string;
  readFeedback: string;
  wrongAnswer: string;
  correctAnswer: string;
  shouldCheck: string;
  shouldNotCheck: string;
  noInput: string;
  a11yCheck: string;
  a11yShowSolution: string;
  a11yRetry: string;
}

interface Answer {
  correct: boolean;
  tipsAndFeedback: TipsAndFeedback;
  text: string;
}

interface Question {
  id: string;
  text: string;
  overallFeedback: Feedback[];
  behaviour: Behaviour;
  UI: UI;
  answers: Answer[];
}

interface IntroPage {
  showIntroPage: boolean;
  startButtonText: string;
  introduction: string;
}

interface Metadata {
  contentType: string;
  license: string;
  title: string;
}

interface Quiz {
  id: string;
  name: string;
  introPage: IntroPage;
  progressType: string;
  passPercentage: number;
  questions: Question[];
  library: string;
  metadata: Metadata;
  subContentId: string;
}

const FeedbackSchema = new mongoose.Schema<Feedback>({
  from: { type: Number, required: true },
  to: { type: Number, required: true },
  feedback: { type: String, required: true },
});

const TipsAndFeedbackSchema = new mongoose.Schema<TipsAndFeedback>({
  tip: { type: String },
  chosenFeedback: { type: String },
  notChosenFeedback: { type: String },
});

const BehaviourSchema = new mongoose.Schema<Behaviour>({
  enableRetry: { type: Boolean },
  enableSolutionsButton: { type: Boolean },
  enableCheckButton: { type: Boolean },
  type: { type: String },
  singlePoint: { type: Boolean },
  randomAnswers: { type: Boolean },
  showSolutionsRequiresInput: { type: Boolean },
  confirmCheckDialog: { type: Boolean },
  confirmRetryDialog: { type: Boolean },
  autoCheck: { type: Boolean },
  passPercentage: { type: Number },
  showScorePoints: { type: Boolean },
});

const UISchema = new mongoose.Schema<UI>({
  checkAnswerButton: { type: String },
  submitAnswerButton: { type: String },
  showSolutionButton: { type: String },
  tryAgainButton: { type: String },
  tipsLabel: { type: String },
  scoreBarLabel: { type: String },
  tipAvailable: { type: String },
  feedbackAvailable: { type: String },
  readFeedback: { type: String },
  wrongAnswer: { type: String },
  correctAnswer: { type: String },
  shouldCheck: { type: String },
  shouldNotCheck: { type: String },
  noInput: { type: String },
  a11yCheck: { type: String },
  a11yShowSolution: { type: String },
  a11yRetry: { type: String },
});

const AnswerSchema = new mongoose.Schema<Answer>({
  correct: { type: Boolean },
  tipsAndFeedback: TipsAndFeedbackSchema,
  text: { type: String },
});

const QuestionSchema = new mongoose.Schema<Question>({
  id: { type: String },
  text: { type: String },
  overallFeedback: [FeedbackSchema],
  behaviour: BehaviourSchema,
  UI: UISchema,
  answers: [AnswerSchema],
});

const QuizSchema = new mongoose.Schema<Quiz>({
  id: { type: String },
  name: { type: String },
  introPage: {
    showIntroPage: { type: Boolean },
    startButtonText: { type: String },
    introduction: { type: String },
  },
  progressType: { type: String },
  passPercentage: { type: Number },
  questions: [QuestionSchema],
  library: { type: String },
  metadata: {
    contentType: { type: String },
    license: { type: String },
    title: { type: String },
  },
  subContentId: { type: String },
});

export const QuizModel: Model<Quiz> = mongoose.model('Quiz', QuizSchema);
export const QuestionModel: Model<Question> = mongoose.model(
  'Question',
  QuestionSchema
);
export const AnswerModel: Model<Answer> = mongoose.model(
  'Answer',
  AnswerSchema
);
export const FeedbackModel: Model<Feedback> = mongoose.model(
  'Feedback',
  FeedbackSchema
);
export const TipsAndFeedbackModel: Model<TipsAndFeedback> = mongoose.model(
  'TipsAndFeedback',
  TipsAndFeedbackSchema
);
export const BehaviourModel: Model<Behaviour> = mongoose.model(
  'Behaviour',
  BehaviourSchema
);
export const UIModel: Model<UI> = mongoose.model('UI', UISchema);
