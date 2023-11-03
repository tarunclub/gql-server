import {
  AcademicYearModel,
  BoardModel,
  BookModel,
  ClassModel,
  ClassSectionModel,
  ExamQuestionModel,
  ExamStudentResponseModel,
  ImageModel,
  OrganizationModel,
  ParentModel,
  SchoolModel,
  StudentModel,
  SubjectModel,
  TeacherModel,
  TopicModel,
} from '../models/model';

const resolvers = {
  Query: {
    // @ts-ignore
    getImage: async (_, { imageID }) => {
      return await ImageModel.findById(imageID);
    },
    getImages: async () => {
      return await ImageModel.find();
    },
    // @ts-ignore
    getBook: async (_, { bookID }) => {
      return await BookModel.findById(bookID);
    },
    getBooks: async () => {
      return await BookModel.find();
    },
    // @ts-ignore
    getSubject: async (_, { subjectID }) => {
      return await SubjectModel.findById(subjectID);
    },
    getSubjects: async () => {
      return await SubjectModel.find();
    },
    // @ts-ignore
    getClass: async (_, { classID }) => {
      return await ClassModel.findById(classID);
    },
    getClasses: async () => {
      return await ClassModel.find();
    },
    // @ts-ignore
    getBoard: async (_, { boardID }) => {
      return await BoardModel.findById(boardID);
    },
    getBoards: async () => {
      return await BoardModel.find();
    },
    // @ts-ignore
    getAcademicYear: async (_, { yearID }) => {
      return await AcademicYearModel.findById(yearID);
    },
    getAcademicYears: async () => {
      return await AcademicYearModel.find();
    },
    // @ts-ignore
    getSchool: async (_, { schoolID }) => {
      return await SchoolModel.findById(schoolID);
    },
    getSchools: async () => {
      return await SchoolModel.find();
    },
    // @ts-ignore
    getClassSection: async (_, { classID, schoolID, yearID, number }) => {
      return await ClassSectionModel.findOne({
        class: classID,
        school: schoolID,
        year: yearID,
        number,
      });
    },
    getClassSections: async () => {
      return await ClassSectionModel.find();
    },
    // @ts-ignore
    getOrganization: async (_, { orgID }) => {
      return await OrganizationModel.findById(orgID);
    },
    getOrganizations: async () => {
      return await OrganizationModel.find();
    },
    // @ts-ignore
    getTeacher: async (_, { teacherID }) => {
      return await TeacherModel.findById(teacherID);
    },
    getTeachers: async () => {
      return await TeacherModel.find();
    },
    // @ts-ignore
    getStudent: async (_, studentID) => {
      return await StudentModel.findById(studentID);
    },
    getStudents: async () => {
      return await StudentModel.find();
    },
    // @ts-ignore
    getParent: async (_, { parentID }) => {
      return await ParentModel.findById(parentID);
    },
    getParents: async () => {
      return await ParentModel.find();
    },
    // @ts-ignore
    getTopic: async (_, { topicID }) => {
      return await TopicModel.findById(topicID);
    },
    getTopics: async () => {
      return await TopicModel.find();
    },
    // @ts-ignore
    getExamQuestion: async (_, { questionID }) => {
      return await ExamQuestionModel.findById(questionID);
    },
    getExamQuestions: async () => {
      return await ExamQuestionModel.find();
    },
    // @ts-ignore
    getExamStudentResponse: async (_, { responseID }) => {
      return await ExamStudentResponseModel.findById(responseID);
    },
    getExamStudentResponses: async () => {
      return await ExamStudentResponseModel.find();
    },
  },
  Mutation: {
    // @ts-ignore
    createImage: async (_, { input }) => {
      const createImage = await ImageModel.create(input);
      return {
        // @ts-ignore
        ...createImage._doc,
        imageID: createImage._id,
      };
    },
    // @ts-ignore
    updateImage: async (_, { imageID, input }) => {
      return await ImageModel.findByIdAndUpdate(imageID, input, { new: true });
    },
    // @ts-ignore
    deleteImage: async (_, { imageID }) => {
      const deletedImage = await ImageModel.findByIdAndDelete(imageID);
      return deletedImage ? imageID : null;
    },
    // @ts-ignore
    createBook: async (_, { input }) => {
      const createBook = await BookModel.create(input);
      return {
        // @ts-ignore
        ...createBook._doc,
        bookID: createBook._id,
      };
    },
    // @ts-ignore
    updateBook: async (_, { bookID, input }) => {
      return await BoardModel.findByIdAndUpdate(bookID, input, { new: true });
    },
    // @ts-ignore
    deleteBook: async (_, { bookID }) => {
      const deletedBook = await BookModel.findByIdAndDelete(bookID);
      return deletedBook ? bookID : null;
    },
    // @ts-ignore
    createSubject: async (_, { input }) => {
      const createSubject = await SubjectModel.create(input);
      return {
        // @ts-ignore
        ...createSubject._doc,
        subjectID: createSubject._id,
      };
    },
    // @ts-ignore
    updateSubject: async (_, { subjectID, input }) => {
      return await SubjectModel.findByIdAndUpdate(subjectID, input, {
        new: true,
      });
    },
    // @ts-ignore
    deleteSubject: async (_, { subjectID }) => {
      const deletedSubject = await SubjectModel.findByIdAndDelete(subjectID);
      return deletedSubject ? subjectID : null;
    },
    // @ts-ignore
    createClass: async (_, { input }) => {
      const createClass = await ClassModel.create(input);
      return {
        // @ts-ignore
        ...createClass._doc,
        classID: createClass._id,
      };
    },
    // @ts-ignore
    updateClass: async (_, { classID, input }) => {
      return await ClassModel.findByIdAndUpdate(classID, input, {
        new: true,
      });
    },
    // @ts-ignore
    deleteClass: async (_, { classID }) => {
      const deletedClass = await ClassModel.findByIdAndDelete(classID);
      return deletedClass ? classID : null;
    },
    // @ts-ignore
    createBoard: async (_, { input }) => {
      const createBoard = await BoardModel.create(input);
      return {
        // @ts-ignore
        ...createBoard._doc,
        boardID: createBoard._id,
      };
    },
    // @ts-ignore
    updateBoard: async (_, { boardID, input }) => {
      return await BoardModel.findByIdAndUpdate(boardID, input, {
        new: true,
      });
    },
    // @ts-ignore
    deleteBoard: async (_, { boardID }) => {
      const deletedBoard = await BoardModel.findByIdAndDelete(boardID);
      return deletedBoard ? boardID : null;
    },
    // @ts-ignore
    createAcademicYear: async (_, { input }) => {
      const createAcademicYear = await AcademicYearModel.create(input);
      return {
        // @ts-ignore
        ...createAcademicYear._doc,
        yearID: createAcademicYear._id,
      };
    },
    // @ts-ignore
    updateAcademicYear: async (_, { yearID, input }) => {
      return await AcademicYearModel.findByIdAndUpdate(yearID, input, {
        new: true,
      });
    },
    // @ts-ignore
    deleteAcademicYear: async (_, { yearID }) => {
      const deletedAcademicYear = await AcademicYearModel.findByIdAndDelete(
        yearID
      );
      return deletedAcademicYear ? yearID : null;
    },
    // @ts-ignore
    createSchool: async (_, { input }) => {
      const createSchool = await SchoolModel.create(input);
      return {
        // @ts-ignore
        ...createSchool._doc,
        schoolID: createSchool._id,
      };
    },
    // @ts-ignore
    updateSchool: async (_, { schoolID, input }) => {
      return await SchoolModel.findByIdAndUpdate(schoolID, input, {
        new: true,
      });
    },
    // @ts-ignore
    deleteSchool: async (_, { schoolID }) => {
      const deletedSchool = await SchoolModel.findByIdAndDelete(schoolID);
      return deletedSchool ? schoolID : null;
    },
    // @ts-ignore
    createClassSection: async (_, { input }) => {
      const createClassSection = await ClassSectionModel.create(input);
      return {
        // @ts-ignore
        ...createClassSection._doc,
        classSectionID: createClassSection._id,
      };
    },
    updateClassSection: async (
      // @ts-ignore
      _,
      // @ts-ignore
      { classID, schoolID, yearID, number, input }
    ) => {
      return await ClassSectionModel.findOneAndUpdate(
        { class: classID, school: schoolID, year: yearID, number },
        input,
        { new: true }
      );
    },
    // @ts-ignore
    deleteClassSection: async (_, { classID, schoolID, yearID, number }) => {
      const deletedClassSection = await ClassSectionModel.findOneAndDelete({
        class: classID,
        school: schoolID,
        year: yearID,
        number,
      });
      return deletedClassSection ? classID : null;
    },
    // @ts-ignore
    createOrganization: async (_, { input }) => {
      const createOrganization = await OrganizationModel.create(input);
      return {
        // @ts-ignore
        ...createOrganization._doc,
        orgID: createOrganization._id,
      };
    },
    // @ts-ignore
    updateOrganization: async (_, { orgID, input }) => {
      const newOrg = await OrganizationModel.findByIdAndUpdate(orgID, input, {
        new: true,
      });
      if (!newOrg) return null;
      return {
        // @ts-ignore
        ...newOrg._doc,
        orgID: newOrg._id,
      };
    },
    // @ts-ignore
    deleteOrganization: async (_, { orgID }) => {
      const deletedOrganization = await OrganizationModel.findByIdAndDelete(
        orgID
      );
      return deletedOrganization ? orgID : null;
    },
    // @ts-ignore
    createTeacher: async (_, { input }) => {
      const createTeacher = await TeacherModel.create(input);
      return {
        // @ts-ignore
        ...createTeacher._doc,
        teacherID: createTeacher._id,
      };
    },
    // @ts-ignore
    updateTeacher: async (_, { teacherID, input }) => {
      return await TeacherModel.findByIdAndUpdate(teacherID, input, {
        new: true,
      });
    },
    // @ts-ignore
    deleteTeacher: async (_, { teacherID }) => {
      const deletedTeacher = await TeacherModel.findByIdAndDelete(teacherID);
      return deletedTeacher ? teacherID : null;
    },
    // @ts-ignore
    createStudent: async (_, { input }) => {
      const createStudent = await StudentModel.create(input);
      return {
        // @ts-ignore
        ...createStudent._doc,
        studentID: createStudent._id,
      };
    },
    // @ts-ignore
    updateStudent: async (_, { studentID, input }) => {
      return await StudentModel.findByIdAndUpdate(studentID, input, {
        new: true,
      });
    },
    // @ts-ignore
    deleteStudent: async (_, { studentID }) => {
      const deletedStudent = await StudentModel.findByIdAndDelete(studentID);
      return deletedStudent ? studentID : null;
    },
    // @ts-ignore
    createParent: async (_, { input }) => {
      const createParent = await ParentModel.create(input);
      return {
        // @ts-ignore
        ...createParent._doc,
        parentID: createParent._id,
      };
    },
    // @ts-ignore
    updateParent: async (_, { parentID, input }) => {
      return await ParentModel.findByIdAndUpdate(parentID, input, {
        new: true,
      });
    },
    // @ts-ignore
    deleteParent: async (_, { parentID }) => {
      const deletedParent = await ParentModel.findByIdAndDelete(parentID);
      return deletedParent ? parentID : null;
    },
    // @ts-ignore
    createTopic: async (_, { input }) => {
      const createTopic = await TopicModel.create(input);
      return {
        // @ts-ignore
        ...createTopic._doc,
        topicID: createTopic._id,
      };
    },
    // @ts-ignore
    updateTopic: async (_, { topicID, input }) => {
      return await TopicModel.findByIdAndUpdate(topicID, input, {
        new: true,
      });
    },
    // @ts-ignore
    deleteTopic: async (_, { topicID }) => {
      const deletedTopic = await TopicModel.findByIdAndDelete(topicID);
      return deletedTopic ? topicID : null;
    },
    // @ts-ignore
    createExamQuestion: async (_, { input }) => {
      const createExamQuestion = await ExamQuestionModel.create(input);
      return {
        // @ts-ignore
        ...createExamQuestion._doc,
        questionID: createExamQuestion._id,
      };
    },
    // @ts-ignore
    updateExamQuestion: async (_, { questionID, input }) => {
      return await ExamQuestionModel.findByIdAndUpdate(questionID, input, {
        new: true,
      });
    },
    // @ts-ignore
    deleteExamQuestion: async (_, { questionID }) => {
      const deletedExamQuestion = await ExamQuestionModel.findByIdAndDelete(
        questionID
      );
      return deletedExamQuestion ? questionID : null;
    },
    // @ts-ignore
    createExamStudentResponse: async (_, { input }) => {
      const createExamStudentResponse = await ExamStudentResponseModel.create(
        input
      );
      return {
        // @ts-ignore
        ...createExamStudentResponse._doc,
        responseID: createExamStudentResponse._id,
      };
    },
    // @ts-ignore
    updateExamStudentResponse: async (_, { responseID, input }) => {
      return await ExamStudentResponseModel.findByIdAndUpdate(
        responseID,
        input,
        { new: true }
      );
    },
    // @ts-ignore
    deleteExamStudentResponse: async (_, { responseID }) => {
      const deletedExamStudentResponse =
        await ExamStudentResponseModel.findByIdAndDelete(responseID);
      return deletedExamStudentResponse ? responseID : null;
    },
  },
};

export default resolvers;
