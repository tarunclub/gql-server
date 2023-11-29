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

interface Batch {
  name: string;
  teachersIds: string[];
  studentsIds: string[];
  subjects: string[];
  announcementIds: string[];
  schedule: {
    dayOfWeek: string;
    startTime: Date;
    endTime: Date;
  }[];
  studyMaterial: {
    bookIds: string[];
  };
  description: string;
}

interface Student {
  authId: string;
  schoolId: string;
  name: string;
  contactNumber: string;
  emailId: string;
  parentIds: string[];
  classIds: string[];
}

interface School {
  name: string;
  adminId: string;
  teachingStaffIds: string[];
  nonTeachingStaffIds: string[];
  organizationId: string;
  schoolSettings: {
    publicOrPrivate: string;
    location: string;
    schoolSettingsModules: {
      search: boolean;
      announcement: boolean;
      poll: boolean;
    };
  };
}

interface Parent {
  authId: string;
  name: string;
  contactNumber: string;
  emailId: string;
  studentIds: string[];
}

interface Class {
  name: string;
  ageGroup: number[];
}

interface classSection {
  teacherIds: string[];
  studentIds: string[];
  schoolId: string;
}

interface Course {
  title: string;
  teacherIds: string[];
  classSectionId: string;
}

interface Announcement {
  title: string;
  body: string;
  type: string;
}

interface Assignment {
  difficulty: string;
  quiz: Quiz;
}

interface Organization {
  name: string;
  adminId: string;
  schoolIds: string[];
}

interface TeachingStaff {
  authId: string;
  schoolId: string;
  name: string;
  contactNumber: string;
  emailId: string;
  role: string;
  classList: string[];
  classSectionIds: string[];
  onlineOrInPerson: string;
  batchIds: string[];
}

interface NonTeachingStaff {
  authId: string;
  schoolId: string;
  name: string;
  contactNumber: string;
  emailId: string;
  role: string;
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

const batchSchema = new Schema<Batch>({
  name: String,
  teachersIds: [String],
  studentsIds: [String],
  subjects: [String],
  announcementIds: [String],
  schedule: [
    {
      dayOfWeek: String,
      startTime: Date,
      endTime: Date,
    },
  ],
  studyMaterial: {
    bookIds: [String],
  },
  description: String,
});

const studentSchema = new Schema<Student>({
  authId: String,
  schoolId: String,
  name: String,
  contactNumber: String,
  emailId: String,
  parentIds: [String],
  classIds: [String],
});

const parentSchema = new Schema<Parent>({
  authId: String,
  name: String,
  contactNumber: String,
  emailId: String,
  studentIds: [String],
});

const classSchema = new Schema<Class>({
  name: String,
  ageGroup: [Number],
});

const classSectionSchema = new Schema<classSection>({
  teacherIds: [String],
  studentIds: [String],
  schoolId: String,
});

const courseSchema = new Schema<Course>({
  title: String,
  teacherIds: [String],
  classSectionId: String,
});

const announcementSchema = new Schema<Announcement>({
  title: String,
  body: String,
  type: String,
});

const assignmentSchema = new Schema<Assignment>({
  difficulty: String,
  quiz: quizSchema,
});

const schoolSchema = new Schema<School>({
  name: String,
  adminId: String,
  teachingStaffIds: [String],
  nonTeachingStaffIds: [String],
  organizationId: String,
  schoolSettings: {
    publicOrPrivate: String,
    location: String,
    schoolSettingsModules: {
      search: Boolean,
      announcement: Boolean,
      poll: Boolean,
    },
  },
});

const organizationSchema = new Schema<Organization>({
  name: String,
  adminId: String,
  schoolIds: [String],
});

const teachingStaffSchema = new Schema<TeachingStaff>({
  authId: String,
  schoolId: String,
  name: String,
  contactNumber: String,
  emailId: String,
  role: String,
  classList: [String],
  classSectionIds: [String],
  onlineOrInPerson: String,
  batchIds: [String],
});

const nonTeachingStaffSchema = new Schema<NonTeachingStaff>({
  authId: String,
  schoolId: String,
  name: String,
  contactNumber: String,
  emailId: String,
  role: String,
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

const BatchModel = mongoose.model<Batch>('Batch', batchSchema);
const StudentModel = mongoose.model<Student>('Student', studentSchema);
const ParentModel = mongoose.model<Parent>('Parent', parentSchema);
const ClassModel = mongoose.model<Class>('Class', classSchema);
const ClassSectionModel = mongoose.model<classSection>(
  'ClassSection',
  classSectionSchema
);

const CourseModel = mongoose.model<Course>('Course', courseSchema);
const AnnouncementModel = mongoose.model<Announcement>(
  'Announcement',
  announcementSchema
);
const AssignmentModel = mongoose.model<Assignment>(
  'Assignment',
  assignmentSchema
);

const SchoolModel = mongoose.model<School>('School', schoolSchema);
const OrganizationModel = mongoose.model<Organization>(
  'Organization',
  organizationSchema
);
const TeachingStaffModel = mongoose.model<TeachingStaff>(
  'TeachingStaff',
  teachingStaffSchema
);
const NonTeachingStaffModel = mongoose.model<NonTeachingStaff>(
  'NonTeachingStaff',
  nonTeachingStaffSchema
);

export {
  QuizModel,
  QuestionModel,
  OptionModel,
  ImageDetailsModel,
  BatchModel,
  StudentModel,
  ParentModel,
  ClassModel,
  ClassSectionModel,
  CourseModel,
  AnnouncementModel,
  AssignmentModel,
  SchoolModel,
  OrganizationModel,
  TeachingStaffModel,
  NonTeachingStaffModel,
};
