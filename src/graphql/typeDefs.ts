import { gql } from 'apollo-server';

const typeDefs = gql`
  scalar Date
  type Image {
    imageID: ID!
    absoluteImageURL: String
    relativeS3ImageURI: String
    number: Int
    absoluteJSONFileURL: String
    relativeS3JSONFileURI: String
    book: Book
  }

  type Book {
    bookID: ID!
    name: String
    subject: Subject
    languageCode: String
    class: Class
    board: Board
    year: AcademicYear
  }

  type Subject {
    subjectID: ID!
    name: String
    description: String
    shortCode: String
    type: String
    languageType: String
    includeInCGPA: Boolean
    credits: Int
  }

  type Class {
    classID: ID!
    name: String
    student_age: Int
  }

  type Board {
    boardID: ID!
    name: String
  }

  type AcademicYear {
    yearID: ID!
    start: Int
    end: Int
  }

  type School {
    schoolID: ID!
    name: String
    org: Organization
  }

  type ClassSection {
    classID: ID!
    schoolID: ID!
    yearID: ID!
    number: Int
    board: Board
  }

  type Organization {
    orgID: ID!
    name: String
  }

  type Teacher {
    teacherID: ID!
    name: String!
    phone: String!
    recentBoards: [Board]
    recentClasses: [Class]
    recentSubjects: [Subject]
  }

  type TeacherSectionMap {
    teacherSectionmapID: ID!
    teacherID: ID!
    classSectionID: ID!
  }

  type Student {
    studentID: ID!
    name: String!
    date_of_birth: Date
    classSectionID: ID!
    roll_number: Int!
    parentID: ID!
    phone: String
  }

  type Parent {
    parentID: ID!
    name: String!
    phone: String!
  }

  type Topic {
    topicID: ID!
    name: String!
    subjectID: ID!
    language_code: String!
    classID: ID!
    boardID: ID!
    yearID: ID!
    parent_topic_ID: ID
  }

  type ExamQuestion {
    questionID: ID!
    topicID: ID!
    image_URL: String
    text: String
    author: Teacher
    correct_answer_value: Int
  }

  type ExamStudentResponse {
    responseID: ID!
    questionID: ID!
    studentID: ID
    roll_number: Int
    className: String
    sectionName: String
    responseValue: Int
    isCorrect: Boolean
  }

  type Query {
    getImage(imageID: ID!): Image
    getImages: [Image]
    getBook(bookID: ID!): Book
    getBooks: [Book]
    getSubject(subjectID: ID!): Subject
    getSubjects: [Subject]
    getClass(classID: ID!): Class
    getClasses: [Class]
    getBoard(boardID: ID!): Board
    getBoards: [Board]
    getAcademicYear(yearID: ID!): AcademicYear
    getAcademicYears: [AcademicYear]
    getSchool(schoolID: ID!): School
    getSchools: [School]
    getClassSection(
      classID: ID!
      schoolID: ID!
      yearID: ID!
      number: Int
    ): ClassSection
    getClassSections: [ClassSection]
    getOrganization(orgID: ID!): Organization
    getOrganizations: [Organization]
    getTeacher(teacherID: ID!): Teacher
    getTeachers: [Teacher]
    getStudent(studentID: ID!): Student
    getStudents: [Student]
    getParent(parentID: ID!): Parent
    getParents: [Parent]
    getTopic(topicID: ID!): Topic
    getTopics: [Topic]
    getExamQuestion(questionID: ID!): ExamQuestion
    getExamQuestions: [ExamQuestion]
    getExamStudentResponse(responseID: ID!): ExamStudentResponse
    getExamStudentResponses: [ExamStudentResponse]
  }

  type Mutation {
    createImage(input: ImageInput): Image
    updateImage(imageID: ID!, input: ImageInput): Image
    deleteImage(imageID: ID!): ID
    createBook(input: BookInput): Book
    updateBook(bookID: ID!, input: BookInput): Book
    deleteBook(bookID: ID!): ID
    createSubject(input: SubjectInput): Subject
    updateSubject(subjectID: ID!, input: SubjectInput): Subject
    deleteSubject(subjectID: ID!): ID
    createClass(input: ClassInput): Class
    updateClass(classID: ID!, input: ClassInput): Class
    deleteClass(classID: ID!): ID
    createBoard(input: BoardInput): Board
    updateBoard(boardID: ID!, input: BoardInput): Board
    deleteBoard(boardID: ID!): ID
    createAcademicYear(input: AcademicYearInput): AcademicYear
    updateAcademicYear(yearID: ID!, input: AcademicYearInput): AcademicYear
    deleteAcademicYear(yearID: ID!): ID
    createSchool(input: SchoolInput): School
    updateSchool(schoolID: ID!, input: SchoolInput): School
    deleteSchool(schoolID: ID!): ID
    createClassSection(input: ClassSectionInput): ClassSection
    updateClassSection(
      classID: ID!
      schoolID: ID!
      yearID: ID!
      number: Int
      input: ClassSectionInput
    ): ClassSection
    deleteClassSection(
      classID: ID!
      schoolID: ID!
      yearID: ID!
      number: Int
    ): ID
    createOrganization(input: OrganizationInput): Organization
    updateOrganization(orgID: ID!, input: OrganizationInput): Organization
    deleteOrganization(orgID: ID!): ID
    createTeacher(input: TeacherInput): Teacher
    updateTeacher(teacherID: ID!, input: TeacherInput): Teacher
    deleteTeacher(teacherID: ID!): ID
    createStudent(input: StudentInput): Student
    updateStudent(studentID: ID!, input: StudentInput): Student
    deleteStudent(studentID: ID!): ID
    createParent(input: ParentInput): Parent
    updateParent(parentID: ID!, input: ParentInput): Parent
    deleteParent(parentID: ID!): ID
    createTopic(input: TopicInput): Topic
    updateTopic(topicID: ID!, input: TopicInput): Topic
    deleteTopic(topicID: ID!): ID
    createExamQuestion(input: ExamQuestionInput): ExamQuestion
    updateExamQuestion(questionID: ID!, input: ExamQuestionInput): ExamQuestion
    deleteExamQuestion(questionID: ID!): ID
    createExamStudentResponse(
      input: ExamStudentResponseInput
    ): ExamStudentResponse
    updateExamStudentResponse(
      responseID: ID!
      input: ExamStudentResponseInput
    ): ExamStudentResponse
    deleteExamStudentResponse(responseID: ID!): ID
  }

  input ImageInput {
    absoluteImageURL: String
    relativeS3ImageURI: String
    number: Int
    absoluteJSONFileURL: String
    relativeS3JSONFileURI: String
    bookID: ID
  }

  input BookInput {
    name: String
    languageCode: String
    subjectID: ID
    classID: ID
    boardID: ID
    yearID: ID
  }

  input SubjectInput {
    name: String
    description: String
    shortCode: String
    type: String
    languageType: String
    includeInCGPA: Boolean
    credits: Int
  }

  input ClassInput {
    name: String
    student_age: Int
  }

  input BoardInput {
    name: String
  }

  input AcademicYearInput {
    start: Int
    end: Int
  }

  input SchoolInput {
    name: String
    orgID: ID
  }

  input ClassSectionInput {
    classID: ID
    schoolID: ID
    yearID: ID
    number: Int
    boardID: ID
  }

  input OrganizationInput {
    name: String
  }

  input TeacherInput {
    name: String!
    phone: String!
    recentBoards: [ID]
    recentClasses: [ID]
    recentSubjects: [ID]
  }

  input StudentInput {
    name: String!
    date_of_birth: Date
    classSectionID: ID!
    roll_number: Int!
    parentID: ID!
    phone: String
  }

  input ParentInput {
    name: String!
    phone: String!
  }

  input TopicInput {
    name: String!
    subjectID: ID!
    language_code: String!
    classID: ID!
    boardID: ID!
    yearID: ID!
    parent_topic_ID: ID
  }

  input ExamQuestionInput {
    topicID: ID!
    image_URL: String
    text: String
    author: ID!
    correct_answer_value: Int
  }

  input ExamStudentResponseInput {
    questionID: ID!
    studentID: ID
    roll_number: Int
    className: String
    sectionName: String
    responseValue: Int
    isCorrect: Boolean
  }
`;

export default typeDefs;
