import { gql } from 'apollo-server';

const typeDefs = gql`
  scalar Date

  type Image {
    _id: ID
    absoluteImageURL: String
    relativeS3ImageURI: String
    number: Int
    absoluteJSONFileURL: String
    relativeS3JSONFileURI: String
    book: Book
  }

  type Book {
    _id: ID
    name: String
    subject: Subject
    languageCode: String
    class: Class
    board: Board
    year: AcademicYear
  }

  type Subject {
    _id: ID
    name: String
    description: String
    shortCode: String
    type: String
    languageType: String
    includeInCGPA: Boolean
    credits: Int
  }

  type Class {
    _id: ID
    name: String
    student_age: Int
  }

  type Board {
    _id: ID
    name: String
  }

  type AcademicYear {
    _id: ID
    start: Int
    end: Int
  }

  type School {
    _id: ID
    name: String
    org: Organization
  }

  type ClassSection {
    _id: ID
    schoolID: ID
    yearID: ID
    number: Int
    board: Board
  }

  type Organization {
    _id: ID
    name: String
  }

  type Teacher {
    _id: ID
    name: String
    phone: String
    recentBoards: [Board]
    recentClasses: [Class]
    recentSubjects: [Subject]
  }

  type TeacherSectionMap {
    _id: ID
    teacherID: ID
    classSectionID: ID
  }

  type Student {
    _id: ID!
    name: String!
    date_of_birth: Date
    classSectionID: ID!
    roll_number: Int!
    parentID: ID!
    phone: String
  }

  type Parent {
    _id: ID!
    name: String!
    phone: String!
  }

  type Topic {
    _id: ID!
    name: String!
    subjectID: ID!
    language_code: String!
    classID: ID!
    boardID: ID!
    yearID: ID!
    parent_topic_ID: ID
  }

  type ExamQuestion {
    _id: ID!
    topicID: ID!
    image_URL: String
    text: String
    author: Teacher
    correct_answer_value: Int
  }

  type ExamStudentResponse {
    _id: ID!
    questionID: ID!
    studentID: ID
    roll_number: Int
    className: String
    sectionName: String
    responseValue: Int
    isCorrect: Boolean
  }

  type Service {
    _id: ID
    Category: String
    ServiceName: String
    AcademicYear: String
    Providers: String
    isPaid: String
    paidBy: String
    createdAt: Date
    updatedAt: Date
  }

  type Amount {
    OneTime: Float
    Weekly: Float
    BiWeeks: Float
    TriWeeks: Float
    Monthly: Float
    Days45: Float
    BiMonthly: Float
    Quarterly: Float
    InstallmentWise: Float
    HalfYearly: Float
    Yearly: Float
    createdAt: Date
    updatedAt: Date
  }

  type ServiceFeePlan {
    _id: ID
    PlanName: String
    SubscriberTypes: String
    ApplicationPlanDate: Date
    ProviderName: String
    Location: String
    FeeAccountName: String
    Amount: Amount
    createdAt: Date
    updatedAt: Date
  }

  type User {
    _id: ID
    name: String
    email: String
    password: String
    role: String
    createdAt: Date
    updatedAt: Date
  }

  type Role {
    _id: ID
    name: String
    permissions: [String]
    createdAt: Date
    updatedAt: Date
  }

  type Group {
    _id: ID
    name: String
    description: String
    members: [User]
    # Define other fields relevant to a group
  }

  type ChatMessage {
    _id: ID
    text: String
    image: String
    group: Group
    author: User
    # Other relevant fields
  }

  type Thread {
    _id: ID
    parentMessage: ChatMessage
    replies: [Reply]
    # Other fields
  }

  type Reply {
    _id: ID
    text: String
    image: String
    author: User
    # Other relevant fields
  }

  type Token {
    token: String!
  }

  type Query {
    getImage(_id: ID!): Image
    getImages: [Image]
    getBook(_id: ID!): Book
    getBooks: [Book]
    getSubject(_id: ID!): Subject
    getSubjects: [Subject]
    getClass(_id: ID!): Class
    getClasses: [Class]
    getBoard(_id: ID!): Board
    getBoards: [Board]
    getAcademicYear(_id: ID!): AcademicYear
    getAcademicYears: [AcademicYear]
    getSchool(_id: ID!): School
    getSchools: [School]
    getClassSection(
      classID: ID!
      schoolID: ID!
      yearID: ID!
      number: Int
    ): ClassSection
    getClassSections: [ClassSection]
    getOrganization(_id: ID!): Organization
    getOrganizations: [Organization]
    getTeacher(_id: ID!): Teacher
    getTeachers: [Teacher]
    getStudent(_id: ID!): Student
    getStudents: [Student]
    getParent(_id: ID!): Parent
    getParents: [Parent]
    getTopic(_id: ID!): Topic
    getTopics: [Topic]
    getExamQuestion(_id: ID!): ExamQuestion
    getExamQuestions: [ExamQuestion]
    getExamStudentResponse(_id: ID!): ExamStudentResponse
    getExamStudentResponses: [ExamStudentResponse]
    getService(_id: ID!): Service
    getServices: [Service]
    getAmount(_id: ID!): Amount
    getAmounts: [Amount]
    getServiceFeePlan(_id: ID!): ServiceFeePlan
    getServiceFeePlans: [ServiceFeePlan]
    getUser(_id: ID!): User
    getUsers: [User]
    getRole(_id: ID!): Role
    getRoles: [Role]
    getTeacherSectionMap(_id: ID!): TeacherSectionMap
    getTeacherSectionMaps: [TeacherSectionMap]
    getGroup(_id: ID!): Group
    getGroups: [Group]
    getChatMessage(_id: ID!): ChatMessage
    getChatMessages: [ChatMessage]
    getThread(_id: ID!): Thread
    getThreads: [Thread]
    getReply(_id: ID!): Reply
    getReplies: [Reply]
  }

  type Mutation {
    createImage(input: ImageInput): Image
    updateImage(_id: ID!, input: ImageInput): Image
    deleteImage(_id: ID!): ID
    createBook(input: BookInput): Book
    updateBook(_id: ID!, input: BookInput): Book
    deleteBook(_id: ID!): ID
    createSubject(input: SubjectInput): Subject
    updateSubject(_id: ID!, input: SubjectInput): Subject
    deleteSubject(_id: ID!): ID
    createClass(input: ClassInput): Class
    updateClass(_id: ID!, input: ClassInput): Class
    deleteClass(_id: ID!): ID
    createBoard(input: BoardInput): Board
    updateBoard(_id: ID!, input: BoardInput): Board
    deleteBoard(_id: ID!): ID
    createAcademicYear(input: AcademicYearInput): AcademicYear
    updateAcademicYear(_id: ID!, input: AcademicYearInput): AcademicYear
    deleteAcademicYear(_id: ID!): ID
    createSchool(input: SchoolInput): School
    updateSchool(_id: ID!, input: SchoolInput): School
    deleteSchool(_id: ID!): ID
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
    updateOrganization(_id: ID!, input: OrganizationInput): Organization
    deleteOrganization(_id: ID!): ID
    createTeacher(input: TeacherInput): Teacher
    updateTeacher(_id: ID!, input: TeacherInput): Teacher
    deleteTeacher(_id: ID!): ID
    createStudent(input: StudentInput): Student
    updateStudent(_id: ID!, input: StudentInput): Student
    deleteStudent(_id: ID!): ID
    createParent(input: ParentInput): Parent
    updateParent(_id: ID!, input: ParentInput): Parent
    deleteParent(_id: ID!): ID
    createTopic(input: TopicInput): Topic
    updateTopic(_id: ID!, input: TopicInput): Topic
    deleteTopic(_id: ID!): ID
    createExamQuestion(input: ExamQuestionInput): ExamQuestion
    updateExamQuestion(_id: ID!, input: ExamQuestionInput): ExamQuestion
    deleteExamQuestion(_id: ID!): ID
    createExamStudentResponse(
      input: ExamStudentResponseInput
    ): ExamStudentResponse
    updateExamStudentResponse(
      _id: ID!
      input: ExamStudentResponseInput
    ): ExamStudentResponse
    deleteExamStudentResponse(_id: ID!): ID
    createService(input: ServiceInput!): Service
    updateService(_id: ID!, input: ServiceInput!): Service
    deleteService(_id: ID!): ID
    createAmount(input: AmountInput!): Amount
    updateAmount(_id: ID!, input: AmountInput!): Amount
    deleteAmount(_id: ID!): ID
    createServiceFeePlan(input: ServiceFeePlanInput!): ServiceFeePlan
    updateServiceFeePlan(_id: ID!, input: ServiceFeePlanInput!): ServiceFeePlan
    deleteServiceFeePlan(_id: ID!): ID
    createUser(input: UserInput!): User
    userLogin(email: String!, password: String!): Token
    updateUser(_id: ID!, input: UserInput!): User
    deleteUser(_id: ID!): ID
    createRole(input: RoleInput!): Role
    updateRole(_id: ID!, input: RoleInput!): Role
    deleteRole(_id: ID!): ID
    createTeacherSectionMap(
      teacherID: ID!
      classSectionID: ID!
    ): TeacherSectionMap
    updateTeacherSectionMap(
      teacherID: ID!
      classSectionID: ID!
    ): TeacherSectionMap
    deleteTeacherSectionMap(
      teacherID: ID!
      classSectionID: ID!
    ): TeacherSectionMap
    createGroup(input: GroupInput): Group
    updateGroup(_id: ID!, input: GroupInput): Group
    deleteGroup(_id: ID!): ID

    createChatMessage(input: ChatMessageInput): ChatMessage
    updateChatMessage(_id: ID!, input: ChatMessageInput): ChatMessage
    deleteChatMessage(_id: ID!): ID

    createThread(input: ThreadInput): Thread
    updateThread(_id: ID!, input: ThreadInput): Thread
    deleteThread(_id: ID!): ID

    createReply(input: ReplyInput): Reply
    updateReply(_id: ID!, input: ReplyInput): Reply
    deleteReply(_id: ID!): ID
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

  input ServiceInput {
    Category: String!
    ServiceName: String!
    AcademicYear: String!
    Providers: String!
    isPaid: String!
    paidBy: String
  }

  input AmountInput {
    OneTime: Float!
    Weekly: Float!
    BiWeeks: Float!
    TriWeeks: Float!
    Monthly: Float!
    Days45: Float!
    BiMonthly: Float!
    Quarterly: Float!
    InstallmentWise: Float!
    HalfYearly: Float!
    Yearly: Float!
  }

  input ServiceFeePlanInput {
    PlanName: String!
    SubscriberTypes: String!
    ApplicationPlanDate: Date!
    ProviderName: String!
    Location: String!
    FeeAccountName: String!
    Amount: AmountInput!
  }

  input UserInput {
    name: String!
    email: String!
    password: String!
    role: String!
  }

  input RoleInput {
    name: String!
    permissions: [String]!
  }

  input GroupInput {
    name: String
    description: String
    members: [ID]
  }

  input ChatMessageInput {
    text: String
    image: String
    group: ID
    author: ID
  }

  input ThreadInput {
    parentMessage: ID
    replies: [ID]
  }

  input ReplyInput {
    text: String
    image: String
    author: ID
  }
`;

export default typeDefs;
