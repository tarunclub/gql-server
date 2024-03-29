import { gql } from 'apollo-server';

const typeDefs = gql`
  scalar Date

  type BookPage {
    _id: ID
    absoluteImageURL: String
    relativeS3ImageURI: String
    number: Int
    absoluteJSONFileURL: String
    relativeS3JSONFileURI: String
    bookID: ID
  }

  type Book {
    _id: ID
    name: String
    description: String
    languageCode: String
    subjectId: ID
    classId: ID
    boardId: ID
    academicYearId: ID
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
    ageGroup: [Int]
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

  type Schedule {
    dayOfWeek: String
    startTime: Date
    endTime: Date
  }

  type StudyMaterial {
    bookIds: [ID]
  }

  type Batch {
    _id: ID
    name: String
    teacherIds: [ID]
    studentIds: [ID]
    subjects: [String]
    announcementIds: [ID]
    schedule: [Schedule]
    studyMaterial: StudyMaterial
    description: String
  }

  type Student {
    _id: ID
    authId: String
    schoolId: ID
    name: String
    contactNumber: String
    email: String
    parentIds: [ID]
    classIds: [ID]
  }

  type Parent {
    _id: ID
    name: String
    contactNumber: String
    email: String
    studentIds: [ID]
  }

  type TeachingStaff {
    _id: ID
    authId: String
    schoolId: ID
    name: String
    contactNumber: String
    email: String
    role: String
    classList: [String]
    classSectionIds: [ID]
    onlineOrInPerson: String
    batchIds: [ID]
  }

  type NonTeachingStaff {
    _id: ID
    authId: String
    schoolId: ID
    name: String
    contactNumber: String
    email: String
    role: String
  }

  type SchoolSettings {
    publicOrPrivate: String
    location: String
    schoolSettingModules: SchoolSettingModules
  }

  type SchoolSettingModules {
    search: Boolean
    announcement: Boolean
    poll: Boolean
  }

  type School {
    _id: ID
    name: String
    adminId: ID
    teachingStaffIds: [ID]
    nonTeachingStaffIds: [ID]
    organizationId: ID
    schoolSettings: SchoolSettings
  }

  type ClassSection {
    _id: ID!
    teacherIds: [ID]
    studentIds: [ID]
    schoolId: ID
  }

  type Organization {
    _id: ID
    name: String
    adminId: ID
    schoolIds: [ID]
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

  type Course {
    _id: ID
    title: String
    teacherIds: [ID]
    classSectionId: ID
  }

  type Announcement {
    _id: ID
    title: String
    body: String
    type: String
  }

  type Assignment {
    _id: ID
    difficulty: String
    quiz: Quiz
  }

  type Topic {
    _id: ID
    name: String
    language_code: String
    level: String
    bookPageId: ID
    parent_topic_ID: ID
    position: Position
  }

  type Position {
    left: Float
    top: Float
    width: Float
    height: Float
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
    _id: ID
    questionID: ID
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
    authId: String
    name: String
    email: String
    password: String
    number: String
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
    messages: [ChatMessage]
  }

  type ChatMessage {
    _id: ID
    text: String
    image: String
    replies: [Reply]
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
  }

  type Token {
    token: String
  }

  type Quiz {
    _id: ID!
    questions: [Question!]
  }

  type Question {
    _id: ID
    questionText: String
    options: [Option]
    solution: String
    timer: Float
    questionType: String
    imageDetails: ImageDetails
    taskDescription: String
  }

  type ImageDetails {
    _id: ID
    path: String
    height: Float
    width: Float
  }

  type Option {
    _id: ID
    optionText: String
    tip: String
    correct: Boolean
    dropZone: DropZone
    imageDetails: ImageDetails
  }

  type DropZone {
    x: Float
    y: Float
    width: Float
    height: Float
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
    getImageDetailsInput(_id: ID!): ImageDetails
    getImageDetailsInputs: [ImageDetails]
    getOptionInput(_id: ID!): Option
    getOptionInputs: [Option]
    getQuestionInput(_id: ID!): Question
    getQuestionInputs: [Question]
    getQuizInput(_id: ID!): Quiz
    getQuizInputs: [Quiz]
    getAnnouncement(_id: ID!): Announcement
    getAnnouncements: [Announcement]
    getAssignment(_id: ID!): Assignment
    getAssignments: [Assignment]
    getBatch(_id: ID!): Batch
    getBatches: [Batch]
    getCourse(_id: ID!): Course
    getCourses: [Course]
    getTeachingStaff(_id: ID!): TeachingStaff
    getTeachingStaffs: [TeachingStaff]
    getNonTeachingStaff(_id: ID!): NonTeachingStaff
    getNonTeachingStaffs: [NonTeachingStaff]
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

    createImageDetailsInput(input: ImageDetailsInput): ImageDetails
    updateImageDetailsInput(_id: ID!, input: ImageDetailsInput): ImageDetails
    deleteImageDetailsInput(_id: ID!): ID

    createOptionInput(input: OptionInput): Option
    updateOptionInput(_id: ID!, input: OptionInput): Option
    deleteOptionInput(_id: ID!): ID

    createQuestionInput(input: QuestionInput): Question
    updateQuestionInput(_id: ID!, input: QuestionInput): Question
    deleteQuestionInput(_id: ID!): ID

    createQuizInput(input: QuizInput): Quiz
    updateQuizInput(_id: ID!, input: QuizInput): Quiz
    deleteQuizInput(_id: ID!): ID

    createAnnouncement(input: AnnouncementInput): Announcement
    updateAnnouncement(_id: ID!, input: AnnouncementInput): Announcement
    deleteAnnouncement(_id: ID!): ID

    createAssignment(input: AssignmentInput): Assignment
    updateAssignment(_id: ID!, input: AssignmentInput): Assignment
    deleteAssignment(_id: ID!): ID

    createBatch(input: BatchInput): Batch
    updateBatch(_id: ID!, input: BatchInput): Batch
    deleteBatch(_id: ID!): ID

    createCourse(input: CourseInput): Course
    updateCourse(_id: ID!, input: CourseInput): Course
    deleteCourse(_id: ID!): ID

    createTeachingStaff(input: TeachingStaffInput): TeachingStaff
    updateTeachingStaff(_id: ID!, input: TeachingStaffInput): TeachingStaff
    deleteTeachingStaff(_id: ID!): ID

    createNonTeachingStaff(input: NonTeachingStaffInput): NonTeachingStaff
    updateNonTeachingStaff(
      _id: ID!
      input: NonTeachingStaffInput
    ): NonTeachingStaff
    deleteNonTeachingStaff(_id: ID!): ID
  }

  input AnnouncementInput {
    title: String
    body: String
    type: String
  }

  input AssignmentInput {
    difficulty: String
    quiz: QuizInput
  }

  input BatchInput {
    name: String
    teacherIds: [ID]
    studentIds: [ID]
    subjects: [String]
    announcementIds: [ID]
    schedule: [ScheduleInput]
    studyMaterial: StudyMaterialInput
    description: String
  }

  input ScheduleInput {
    dayOfWeek: String
    startTime: Date
    endTime: Date
  }

  input StudyMaterialInput {
    bookIds: [ID]
  }

  input TeachingStaffInput {
    authId: String
    schoolId: ID
    name: String
    contactNumber: String
    email: String
    role: String
    classList: [String]
    classSectionIds: [ID]
    onlineOrInPerson: String
    batchIds: [ID]
  }

  input NonTeachingStaffInput {
    authId: String
    schoolId: ID
    name: String
    contactNumber: String
    email: String
    role: String
  }

  input CourseInput {
    title: String
    teacherIds: [ID]
    classSectionId: ID
  }

  input ImageDetailsInput {
    path: String!
    height: Float
    width: Float
  }

  input DropZoneInput {
    x: Float
    y: Float
    width: Float
    height: Float
  }

  input OptionInput {
    optionText: String!
    tip: String
    correct: Boolean
    dropZone: DropZoneInput
    imageDetails: ImageDetailsInput
  }

  input QuestionInput {
    quizID: ID!
    questionText: String
    options: [OptionInput]
    solution: String!
    timer: Float!
    questionType: String!
    imageDetails: ImageDetailsInput
    taskDescription: String
  }

  input QuizInput {
    questions: [QuestionInput]!
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
