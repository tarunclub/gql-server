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
  TeacherSectionMapModel,
  TopicModel,
} from '../models/model';
import { ObjectId } from 'mongodb';
import { Role, Service, ServiceFeePlan, User } from '../models/services';
import bcrypt from 'bcryptjs';
import { generateToken } from '../utils/generateToken';
import { ChatMessage, Group, Reply, Thread } from '../models/chat';
import {
  ImageDetailsModel,
  OptionModel,
  QuestionModel,
  QuizModel,
} from '../models/quizz-app';

const resolvers = {
  Query: {
    // @ts-ignore
    getImage: async (_, { _id }) => {
      return await ImageModel.findById(_id);
    },
    getImages: async () => {
      return await ImageModel.find();
    },
    // @ts-ignore
    getBook: async (_, { _id }) => {
      return await BookModel.findById(_id);
    },
    getBooks: async () => {
      return await BookModel.find();
    },
    // @ts-ignore
    getSubject: async (_, { _id }) => {
      return await SubjectModel.findById(_id);
    },
    getSubjects: async () => {
      return await SubjectModel.find();
    },
    // @ts-ignore
    getClass: async (_, { _id }) => {
      return await ClassModel.findById(_id);
    },
    getClasses: async () => {
      return await ClassModel.find();
    },
    // @ts-ignore
    getBoard: async (_, { _id }) => {
      return await BoardModel.findById(_id);
    },
    getBoards: async () => {
      return await BoardModel.find();
    },
    // @ts-ignore
    getAcademicYear: async (_, { _id }) => {
      return await AcademicYearModel.findById(_id);
    },
    getAcademicYears: async () => {
      return await AcademicYearModel.find();
    },
    // @ts-ignore
    getSchool: async (_, { _id }) => {
      return await SchoolModel.findById(_id);
    },
    getSchools: async () => {
      return await SchoolModel.find();
    },
    // @ts-ignore
    getClassSection: async (
      _: any,
      { classID, schoolID, yearID, number }: any,
      context: any
    ) => {
      try {
        const classSection = await context.db
          .collection('classSections')
          .findOne({
            class: new ObjectId(classID),
            school: new ObjectId(schoolID),
            year: new ObjectId(yearID),
            number,
          });
        return classSection;
      } catch (error) {
        throw new Error('Error fetching class section');
      }
    },
    getClassSections: async () => {
      return await ClassSectionModel.find();
    },
    // @ts-ignore
    getOrganization: async (_, { _id }) => {
      return await OrganizationModel.findById(_id);
    },
    getOrganizations: async () => {
      return await OrganizationModel.find();
    },
    // @ts-ignore
    getTeacher: async (_, { _id }) => {
      return await TeacherModel.findById(_id);
    },
    getTeachers: async () => {
      return await TeacherModel.find();
    },
    // @ts-ignore
    getTeacherSectionMap: async (_, { _id }) => {
      return await TeacherSectionMapModel.findById(_id);
    },
    getTeacherSectionMaps: async () => {
      return await TeacherSectionMapModel.find();
    },
    // @ts-ignore
    getStudent: async (_, _id) => {
      return await StudentModel.findById(_id);
    },
    getStudents: async () => {
      return await StudentModel.find();
    },
    // @ts-ignore
    getParent: async (_, { _id }) => {
      return await ParentModel.findById(_id);
    },
    getParents: async () => {
      return await ParentModel.find();
    },
    // @ts-ignore
    getTopic: async (_, { _id }) => {
      return await TopicModel.findById(_id);
    },
    getTopics: async () => {
      return await TopicModel.find();
    },
    // @ts-ignore
    getExamQuestion: async (_, { _id }) => {
      return await ExamQuestionModel.findById(_id);
    },
    getExamQuestions: async () => {
      return await ExamQuestionModel.find();
    },
    // @ts-ignore
    getExamStudentResponse: async (_, { _id }) => {
      return await ExamStudentResponseModel.findById(_id);
    },
    getExamStudentResponses: async () => {
      return await ExamStudentResponseModel.find();
    },
    // @ts-ignore
    getService: async (_, { _id }) => {
      return await Service.findById(_id);
    },
    getServices: async () => {
      return await Service.find();
    },
    // @ts-ignore
    getRole: async (_, { _id }) => {
      return await Role.findById(_id);
    },
    getRoles: async () => {
      return await Role.find();
    },
    // @ts-ignore
    getUser: async (_, { _id }) => {
      return await User.findById(_id);
    },
    getUsers: async () => {
      return await User.find();
    },
    // @ts-ignore
    getServiceFeePlan: async (_, { _id }) => {
      return await ServiceFeePlan.findById(_id);
    },
    getServiceFeePlans: async () => {
      return await ServiceFeePlan.find();
    },
    // @ts-ignore
    getGroup: async (_, { _id }) => {
      return await Group.findById(_id);
    },
    getGroups: async () => {
      return await Group.find();
    },
    getChatMessages: async () => {
      return await ChatMessage.find();
    },
    // @ts-ignore
    getChatMessage: async (_, { _id }) => {
      return await ChatMessage.findById(_id);
    },
    // @ts-ignore
    getThread: async (_, { _id }) => {
      return await Thread.findById(_id);
    },
    getThreads: async () => {
      return await Thread.find();
    },
    // @ts-ignore
    getReply: async (_, { _id }) => {
      return await Reply.findById(_id);
    },
    getReplies: async () => {
      return await Reply.find();
    },
    // @ts-ignore
    getImageDetailsInput: async (_, { _id }) => {
      return await ImageDetailsModel.findById(_id);
    },
    getImageDetailsInputs: async () => {
      return await ImageDetailsModel.find();
    },
    // @ts-ignore
    getOptionInput: async (_, { _id }) => {
      return await OptionModel.findById(_id);
    },
    getOptionInputs: async () => {
      return await OptionModel.find();
    },
    // @ts-ignore
    getQuestionInput: async (_, { _id }) => {
      return await QuestionModel.findById(_id);
    },
    getQuestionInputs: async () => {
      return await QuestionModel.find();
    },
    // @ts-ignore
    getQuizInput: async (_, { _id }) => {
      return await QuizModel.findById(_id);
    },
    getQuizInputs: async () => {
      return await QuizModel.find();
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
    updateImage: async (_, { _id, input }) => {
      return await ImageModel.findByIdAndUpdate(_id, input, { new: true });
    },
    // @ts-ignore
    deleteImage: async (_, { _id }) => {
      const deletedImage = await ImageModel.findByIdAndDelete(_id);
      return deletedImage ? _id : null;
    },
    // @ts-ignore
    createBook: async (_, { _id }) => {
      const createBook = await BookModel.create(_id);
      return {
        // @ts-ignore
        ...createBook._doc,
        bookID: createBook._id,
      };
    },
    // @ts-ignore
    updateBook: async (_, { _id, input }) => {
      return await BoardModel.findByIdAndUpdate(_id, input, { new: true });
    },
    // @ts-ignore
    deleteBook: async (_, { _id }) => {
      const deletedBook = await BookModel.findByIdAndDelete(_id);
      return deletedBook ? _id : null;
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
    updateSubject: async (_, { _id, input }) => {
      return await SubjectModel.findByIdAndUpdate(_id, input, {
        new: true,
      });
    },
    // @ts-ignore
    deleteSubject: async (_, { _id }) => {
      const deletedSubject = await SubjectModel.findByIdAndDelete(_id);
      return deletedSubject ? _id : null;
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
    updateClass: async (_, { _id, input }) => {
      return await ClassModel.findByIdAndUpdate(_id, input, {
        new: true,
      });
    },
    // @ts-ignore
    deleteClass: async (_, { _id }) => {
      const deletedClass = await ClassModel.findByIdAndDelete(_id);
      return deletedClass ? _id : null;
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
    updateBoard: async (_, { _id, input }) => {
      return await BoardModel.findByIdAndUpdate(_id, input, {
        new: true,
      });
    },
    // @ts-ignore
    deleteBoard: async (_, { _id }) => {
      const deletedBoard = await BoardModel.findByIdAndDelete(_id);
      return deletedBoard ? _id : null;
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
    updateAcademicYear: async (_, { _id, input }) => {
      return await AcademicYearModel.findByIdAndUpdate(_id, input, {
        new: true,
      });
    },
    // @ts-ignore
    deleteAcademicYear: async (_, { _id }) => {
      const deletedAcademicYear = await AcademicYearModel.findByIdAndDelete(
        _id
      );
      return deletedAcademicYear ? _id : null;
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
    updateSchool: async (_, { _id, input }) => {
      return await SchoolModel.findByIdAndUpdate(_id, input, {
        new: true,
      });
    },
    // @ts-ignore
    deleteSchool: async (_, { _id }) => {
      const deletedSchool = await SchoolModel.findByIdAndDelete(_id);
      return deletedSchool ? _id : null;
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
        {
          class: new ObjectId(classID),
          school: new ObjectId(schoolID),
          year: new ObjectId(yearID),
          number,
        },
        input,
        { new: true }
      );
    },
    // @ts-ignore
    deleteClassSection: async (_, { classID, schoolID, yearID, number }) => {
      const deletedClassSection = await ClassSectionModel.findOneAndDelete({
        class: new ObjectId(classID),
        school: new ObjectId(schoolID),
        year: new ObjectId(yearID),
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
    updateOrganization: async (_, { _id, input }) => {
      const newOrg = await OrganizationModel.findByIdAndUpdate(_id, input, {
        new: true,
      });
      if (!newOrg) return null;
      return {
        // @ts-ignore
        ...newOrg._doc,
        _id: newOrg._id,
      };
    },
    // @ts-ignore
    deleteOrganization: async (_, { _id }) => {
      const deletedOrganization = await OrganizationModel.findByIdAndDelete(
        _id
      );
      return deletedOrganization ? _id : null;
    },
    // @ts-ignore
    createTeacher: async (_, { input }) => {
      const createTeacher = await TeacherModel.create(input);
      return {
        // @ts-ignore
        ...createTeacher._doc,
        _id: createTeacher._id,
      };
    },
    // @ts-ignore
    updateTeacher: async (_, { _id, input }) => {
      return await TeacherModel.findByIdAndUpdate(_id, input, {
        new: true,
      });
    },
    // @ts-ignore
    deleteTeacher: async (_, { _id }) => {
      const deletedTeacher = await TeacherModel.findByIdAndDelete(_id);
      return deletedTeacher ? _id : null;
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
    updateStudent: async (_, { _id, input }) => {
      return await StudentModel.findByIdAndUpdate(_id, input, {
        new: true,
      });
    },
    // @ts-ignore
    deleteStudent: async (_, { _id }) => {
      const deletedStudent = await StudentModel.findByIdAndDelete(_id);
      return deletedStudent ? _id : null;
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
    updateParent: async (_, { _id, input }) => {
      return await ParentModel.findByIdAndUpdate(_id, input, {
        new: true,
      });
    },
    // @ts-ignore
    deleteParent: async (_, { _id }) => {
      const deletedParent = await ParentModel.findByIdAndDelete(_id);
      return deletedParent ? _id : null;
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
    updateTopic: async (_, { _id, input }) => {
      return await TopicModel.findByIdAndUpdate(_id, input, {
        new: true,
      });
    },
    // @ts-ignore
    deleteTopic: async (_, { _id }) => {
      const deletedTopic = await TopicModel.findByIdAndDelete(_id);
      return deletedTopic ? _id : null;
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
    updateExamQuestion: async (_, { _id, input }) => {
      return await ExamQuestionModel.findByIdAndUpdate(_id, input, {
        new: true,
      });
    },
    // @ts-ignore
    deleteExamQuestion: async (_, { _id }) => {
      const deletedExamQuestion = await ExamQuestionModel.findByIdAndDelete(
        _id
      );
      return deletedExamQuestion ? _id : null;
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
    updateExamStudentResponse: async (_, { _id, input }) => {
      return await ExamStudentResponseModel.findByIdAndUpdate(_id, input, {
        new: true,
      });
    },
    // @ts-ignore
    deleteExamStudentResponse: async (_, { _id }) => {
      const deletedExamStudentResponse =
        await ExamStudentResponseModel.findByIdAndDelete(_id);
      return deletedExamStudentResponse ? _id : null;
    },
    // @ts-ignore
    createService: async (_, { input }, { userRole }) => {
      if (!userRole) {
        throw new Error('Not authorized');
      }
      const createService = await Service.create(input);
      return {
        // @ts-ignore
        ...createService._doc,
        serviceID: createService._id,
      };
    },
    // @ts-ignore
    updateService: async (_, { _id, input }) => {
      return await Service.findByIdAndUpdate(_id, input, {
        new: true,
      });
    },
    // @ts-ignore
    deleteService: async (_, { _id }) => {
      const deletedService = await Service.findByIdAndDelete(_id);
      return deletedService ? _id : null;
    },
    // @ts-ignore
    createRole: async (_, { input }) => {
      const createRole = await Role.create(input);
      return {
        // @ts-ignore
        ...createRole._doc,
        roleID: createRole._id,
      };
    },
    // @ts-ignore
    updateRole: async (_, { _id, input }) => {
      return await Role.findByIdAndUpdate(_id, input, {
        new: true,
      });
    },
    // @ts-ignore
    deleteRole: async (_, { _id }) => {
      const deletedRole = await Role.findByIdAndDelete(_id);
      return deletedRole ? _id : null;
    },
    // @ts-ignore
    createUser: async (_, { input }) => {
      const user = await User.findOne({ email: input.email });
      if (user) {
        throw new Error('User already exists');
      }

      // hash password
      const hashedPassword = await bcrypt.hash(input.password, 10);
      input.password = hashedPassword;
      const createUser = await User.create(input);
      return {
        // @ts-ignore
        ...createUser._doc,
        userID: createUser._id,
      };
    },
    // @ts-ignore
    userLogin: async (_, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new Error('Invalid email or password');
      }
      const isPasswordMatch = await bcrypt.compare(password, user.password);
      if (!isPasswordMatch) {
        throw new Error('Invalid email or password');
      }
      const token = generateToken(user.role);
      return {
        token,
      };
    },
    // @ts-ignore
    updateUser: async (_, { _id, input }) => {
      return User.findByIdAndUpdate(_id, input, {
        new: true,
      });
    },
    // @ts-ignore
    deleteUser: async (_, { _id }) => {
      const deletedUser = await User.findByIdAndDelete(_id);
      return deletedUser ? _id : null;
    },
    // @ts-ignore
    createServiceFeePlan: async (_, { input }) => {
      const createServiceFeePlan = await ServiceFeePlan.create(input);
      return {
        // @ts-ignore
        ...createServiceFeePlan._doc,
        planID: createServiceFeePlan._id,
      };
    },
    // @ts-ignore
    updateServiceFeePlan: async (_, { _id, input }) => {
      return await ServiceFeePlan.findByIdAndUpdate(_id, input, {
        new: true,
      });
    },
    // @ts-ignore
    deleteServiceFeePlan: async (_, { _id }) => {
      const deletedServiceFeePlan = await ServiceFeePlan.findByIdAndDelete(_id);
      return deletedServiceFeePlan ? _id : null;
    },
    // @ts-ignore
    createTeacherSectionMap: async (_, { input }) => {
      const createTeacherSectionMap = await TeacherSectionMapModel.create(
        input
      );
      return {
        // @ts-ignore
        ...createTeacherSectionMap._doc,
        mapID: createTeacherSectionMap._id,
      };
    },
    // @ts-ignore
    updateTeacherSectionMap: async (_, { _id, input }) => {
      return await TeacherSectionMapModel.findByIdAndUpdate(_id, input, {
        new: true,
      });
    },
    // @ts-ignore
    deleteTeacherSectionMap: async (_, { _id }) => {
      const deletedTeacherSectionMap =
        await TeacherSectionMapModel.findByIdAndDelete(_id);
      return deletedTeacherSectionMap ? _id : null;
    },
    // @ts-ignore
    createGroup: async (_, { input }) => {
      const createGroup = await Group.create(input);
      return {
        // @ts-ignore
        ...createGroup._doc,
        groupID: createGroup._id,
      };
    },
    // @ts-ignore
    updateGroup: async (_, { _id, input }) => {
      return await Group.findByIdAndUpdate(_id, input, {
        new: true,
      });
    },
    // @ts-ignore
    deleteGroup: async (_, { _id }) => {
      const deletedGroup = await Group.findByIdAndDelete(_id);
      return deletedGroup ? _id : null;
    },
    // @ts-ignore
    createChatMessage: async (_, { input }) => {
      const createChatMessage = await ChatMessage.create(input);
      return {
        // @ts-ignore
        ...createChatMessage._doc,
        messageID: createChatMessage._id,
      };
    },

    // @ts-ignore
    updateChatMessage: async (_, { _id, input }) => {
      return await ChatMessage.findByIdAndUpdate(_id, input, {
        new: true,
      });
    },
    // @ts-ignore
    deleteChatMessage: async (_, { _id }) => {
      const deletedChatMessage = await ChatMessage.findByIdAndDelete(_id);
      return deletedChatMessage ? _id : null;
    },
    // @ts-ignore
    createThread: async (_, { input }) => {
      const createThread = await Thread.create(input);
      return {
        // @ts-ignore
        ...createThread._doc,
        threadID: createThread._id,
      };
    },
    // @ts-ignore
    updateThread: async (_, { _id, input }) => {
      return await Thread.findByIdAndUpdate(_id, input, {
        new: true,
      });
    },
    // @ts-ignore
    deleteThread: async (_, { _id }) => {
      const deletedThread = await Thread.findByIdAndDelete(_id);
      return deletedThread ? _id : null;
    },
    // @ts-ignore
    createReply: async (_, { input }) => {
      const createReply = await Reply.create(input);
      return {
        // @ts-ignore
        ...createReply._doc,
        replyID: createReply._id,
      };
    },
    // @ts-ignore
    updateReply: async (_, { _id, input }) => {
      return await Reply.findByIdAndUpdate(_id, input, {
        new: true,
      });
    },
    // @ts-ignore
    deleteReply: async (_, { _id }) => {
      const deletedReply = await Reply.findByIdAndDelete(_id);
      return deletedReply ? _id : null;
    },
    // @ts-ignore
    createImageDetailsInput: async (_, { input }) => {
      const createImageDetailInput = await ImageDetailsModel.create(input);
      return {
        // @ts-ignore
        ...createImageDetailInput._doc,
        imageDetailID: createImageDetailInput._id,
      };
    },
    // @ts-ignore
    updateImageDetailsInput: async (_, { _id, input }) => {
      return await ImageDetailsModel.findByIdAndUpdate(_id, input, {
        new: true,
      });
    },
    // @ts-ignore
    deleteImageDetailsInput: async (_, { _id }) => {
      const deletedImageDetailInput = await ImageDetailsModel.findByIdAndDelete(
        _id
      );
      return deletedImageDetailInput ? _id : null;
    },
    // @ts-ignore
    createOptionInput: async (_, { input }) => {
      const createOptionInput = await OptionModel.create(input);
      return {
        // @ts-ignore
        ...createOptionInput._doc,
        optionID: createOptionInput._id,
      };
    },
    // @ts-ignore
    updateOptionInput: async (_, { _id, input }) => {
      return await OptionModel.findByIdAndUpdate(_id, input, {
        new: true,
      });
    },
    // @ts-ignore
    deleteOptionInput: async (_, { _id }) => {
      const deletedOptionInput = await OptionModel.findByIdAndDelete(_id);
      return deletedOptionInput ? _id : null;
    },
    // @ts-ignore
    createQuestionInput: async (_, { input }) => {
      const createQuestionInput = await QuestionModel.create(input);
      return {
        // @ts-ignore
        ...createQuestionInput._doc,
        questionID: createQuestionInput._id,
      };
    },
    // @ts-ignore
    updateQuestionInput: async (_, { _id, input }) => {
      return await QuestionModel.findByIdAndUpdate(_id, input, {
        new: true,
      });
    },
    // @ts-ignore
    deleteQuestionInput: async (_, { _id }) => {
      const deletedQuestionInput = await QuestionModel.findByIdAndDelete(_id);
      return deletedQuestionInput ? _id : null;
    },
    // @ts-ignore
    createQuizInput: async (_, { input }) => {
      const createQuizInput = await QuizModel.create(input);
      return {
        // @ts-ignore
        ...createQuizInput._doc,
        quizID: createQuizInput._id,
      };
    },
    // @ts-ignore
    updateQuizInput: async (_, { _id, input }) => {
      return await QuizModel.findByIdAndUpdate(_id, input, {
        new: true,
      });
    },
    // @ts-ignore
    deleteQuizInput: async (_, { _id }) => {
      const deletedQuizInput = await QuizModel.findByIdAndDelete(_id);
      return deletedQuizInput ? _id : null;
    },
  },
};

export default resolvers;
