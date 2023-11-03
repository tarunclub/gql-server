import mongoose, { Document, Schema, Model } from 'mongoose';

interface ImageDoc extends Document {
  absoluteImageURL: string;
  relativeS3ImageURI: string;
  number: number;
  absoluteJSONFileURL: string;
  relativeS3JSONFileURI: string;
  book: BookDoc['_id'];
}

interface BookDoc extends Document {
  name: string;
  languageCode: string;
  subject: SubjectDoc['_id'];
  class: ClassDoc['_id'];
  board: BoardDoc['_id'];
  year: AcademicYearDoc['_id'];
}

interface SubjectDoc extends Document {
  name: string;
  description: string;
  shortCode: string;
  type: string;
  languageType: string;
  includeInCGPA: boolean;
  credits: number;
}

interface ClassDoc extends Document {
  name: string;
  student_age: number;
}

interface BoardDoc extends Document {
  name: string;
}

interface AcademicYearDoc extends Document {
  start: number;
  end: number;
}

interface SchoolDoc extends Document {
  name: string;
  org: OrganizationDoc['_id'];
}

interface ClassSectionDoc extends Document {
  class: ClassDoc['_id'];
  school: SchoolDoc['_id'];
  year: AcademicYearDoc['_id'];
  number: number;
  board: BoardDoc['_id'];
}

interface OrganizationDoc extends Document {
  name: string;
}

const imageSchema = new Schema<ImageDoc>({
  absoluteImageURL: String,
  relativeS3ImageURI: String,
  number: Number,
  absoluteJSONFileURL: String,
  relativeS3JSONFileURI: String,
  book: {
    type: Schema.Types.ObjectId,
    ref: 'Book',
  },
});

const bookSchema = new Schema<BookDoc>({
  name: String,
  languageCode: String,
  subject: {
    type: Schema.Types.ObjectId,
    ref: 'Subject',
  },
  class: {
    type: Schema.Types.ObjectId,
    ref: 'Class',
  },
  board: {
    type: Schema.Types.ObjectId,
    ref: 'Board',
  },
  year: {
    type: Schema.Types.ObjectId,
    ref: 'AcademicYear',
  },
});

const subjectSchema = new Schema<SubjectDoc>({
  name: String,
  description: String,
  shortCode: String,
  type: String,
  languageType: String,
  includeInCGPA: Boolean,
  credits: Number,
});

const classSchema = new Schema<ClassDoc>({
  name: String,
  student_age: Number,
});

const boardSchema = new Schema<BoardDoc>({
  name: String,
});

const academicYearSchema = new Schema<AcademicYearDoc>({
  start: Number,
  end: Number,
});

const schoolSchema = new Schema<SchoolDoc>({
  name: String,
  org: {
    type: Schema.Types.ObjectId,
    ref: 'Organization',
  },
});

const classSectionSchema = new Schema<ClassSectionDoc>({
  class: {
    type: Schema.Types.ObjectId,
    ref: 'Class',
  },
  school: {
    type: Schema.Types.ObjectId,
    ref: 'School',
  },
  year: {
    type: Schema.Types.ObjectId,
    ref: 'AcademicYear',
  },
  number: Number,
  board: {
    type: Schema.Types.ObjectId,
    ref: 'Board',
  },
});

const organizationSchema = new Schema<OrganizationDoc>({
  name: String,
});

const ImageModel: Model<ImageDoc> = mongoose.model('Image', imageSchema);
const BookModel: Model<BookDoc> = mongoose.model('Book', bookSchema);
const SubjectModel: Model<SubjectDoc> = mongoose.model(
  'Subject',
  subjectSchema
);
const ClassModel: Model<ClassDoc> = mongoose.model('Class', classSchema);
const BoardModel: Model<BoardDoc> = mongoose.model('Board', boardSchema);
const AcademicYearModel: Model<AcademicYearDoc> = mongoose.model(
  'AcademicYear',
  academicYearSchema
);
const SchoolModel: Model<SchoolDoc> = mongoose.model('School', schoolSchema);
const ClassSectionModel: Model<ClassSectionDoc> = mongoose.model(
  'ClassSection',
  classSectionSchema
);
const OrganizationModel: Model<OrganizationDoc> = mongoose.model(
  'Organization',
  organizationSchema
);

export {
  ImageModel,
  BookModel,
  SubjectModel,
  ClassModel,
  BoardModel,
  AcademicYearModel,
  SchoolModel,
  ClassSectionModel,
  OrganizationModel,
};

// Part - 2

// Teacher model
export interface ITeacher extends Document {
  name: string;
  phone: string;
  recentBoards: Schema.Types.ObjectId[];
  recentClasses: Schema.Types.ObjectId[];
  recentSubjects: Schema.Types.ObjectId[];
}

export const TeacherModel: Model<ITeacher> = mongoose.model(
  'Teacher',
  new Schema<ITeacher>({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    recentBoards: [{ type: Schema.Types.ObjectId, ref: 'Board' }],
    recentClasses: [{ type: Schema.Types.ObjectId, ref: 'Class' }],
    recentSubjects: [{ type: Schema.Types.ObjectId, ref: 'Subject' }],
  })
);

// Teacher Section Map model
export interface ITeacherSectionMap extends Document {
  teacherID: Schema.Types.ObjectId;
  classSectionID: Schema.Types.ObjectId;
}

export const TeacherSectionMapModel: Model<ITeacherSectionMap> = mongoose.model(
  'TeacherSectionMap',
  new Schema<ITeacherSectionMap>({
    teacherID: { type: Schema.Types.ObjectId, ref: 'Teacher' },
    classSectionID: { type: Schema.Types.ObjectId, ref: 'ClassSection' },
  })
);

// Student model
export interface IStudent extends Document {
  name: string;
  date_of_birth: Date;
  classSectionID: Schema.Types.ObjectId;
  roll_number: number;
  parentID: Schema.Types.ObjectId;
  phone: string;
}

export const StudentModel: Model<IStudent> = mongoose.model(
  'Student',
  new Schema<IStudent>({
    name: { type: String },
    date_of_birth: { type: Date },
    classSectionID: { type: Schema.Types.ObjectId, ref: 'ClassSection' },
    roll_number: { type: Number },
    parentID: { type: Schema.Types.ObjectId, ref: 'Parent' },
    phone: { type: String },
  })
);

// Parent model
export interface IParent extends Document {
  name: string;
  phone: string;
}

export const ParentModel: Model<IParent> = mongoose.model(
  'Parent',
  new Schema<IParent>({
    name: { type: String, required: true },
    phone: { type: String, required: true },
  })
);

// Topic model
export interface ITopic extends Document {
  name: string;
  subjectID: Schema.Types.ObjectId;
  language_code: string;
  classID: Schema.Types.ObjectId;
  boardID: Schema.Types.ObjectId;
  yearID: Schema.Types.ObjectId;
  parent_topic_ID: Schema.Types.ObjectId;
}

export const TopicModel: Model<ITopic> = mongoose.model(
  'Topic',
  new Schema<ITopic>({
    name: { type: String },
    subjectID: { type: Schema.Types.ObjectId, ref: 'Subject' },
    language_code: { type: String },
    classID: { type: Schema.Types.ObjectId, ref: 'Class' },
    boardID: { type: Schema.Types.ObjectId, ref: 'Board' },
    yearID: { type: Schema.Types.ObjectId, ref: 'AcademicYear' },
    parent_topic_ID: { type: Schema.Types.ObjectId, ref: 'Topic' },
  })
);

// Exam Question model
export interface IExamQuestion extends Document {
  topicID: Schema.Types.ObjectId;
  image_URL: string;
  text: string;
  author: Schema.Types.ObjectId;
  correct_answer_value: number;
}

export const ExamQuestionModel: Model<IExamQuestion> = mongoose.model(
  'ExamQuestion',
  new Schema<IExamQuestion>({
    topicID: { type: Schema.Types.ObjectId, ref: 'Topic' },
    image_URL: { type: String },
    text: { type: String },
    author: { type: Schema.Types.ObjectId, ref: 'Teacher' },
    correct_answer_value: { type: Number },
  })
);

// Exam Student Response model
export interface IExamStudentResponse extends Document {
  questionID: Schema.Types.ObjectId;
  studentID: Schema.Types.ObjectId;
  roll_number: number;
  className: string;
  sectionName: string;
  responseValue: number;
  isCorrect: boolean;
}

export const ExamStudentResponseModel: Model<IExamStudentResponse> =
  mongoose.model(
    'ExamStudentResponse',
    new Schema<IExamStudentResponse>({
      questionID: { type: Schema.Types.ObjectId, ref: 'ExamQuestion' },
      studentID: { type: Schema.Types.ObjectId, ref: 'Student' },
      roll_number: { type: Number },
      className: { type: String },
      sectionName: { type: String },
      responseValue: { type: Number },
      isCorrect: { type: Boolean },
    })
  );
