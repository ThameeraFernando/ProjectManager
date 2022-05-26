import { initialState } from "./appContext";
import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  TOGGLE_SIDEBAR,
  LOGOUT_USER,
  UPDATE_USER_BEGIN,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  GET_ALL_USERS_BEGIN,
  GET_ALL_USERS_SUCCESS,
  SET_UPDATE_USER,
  UPDATE_USER_ADMIN_BEGIN,
  UPDATE_USER_ADMIN_SUCCESS,
  UPDATE_USER_ADMIN_ERROR,
  SET_DELETE_USER,
  DELETE_USER,
  SUPERVISE_BEGIN,
  SUPERVISE_SUCCESS,
  SUPERVISE_ERROR,
  STUDENT_GROUP_BEGIN,
  STUDENT_GROUP_SUCCESS,
  STUDENT_GROUP_ERROR,
  CLEAR_VALUES_STUDENT,
  GET_STUDENT_GROUP_BEGIN,
  GET_STUDENT_GROUP_SUCCESS,
  GET_STUDENT_GROUP_ERROR,
  GET_ALL_STUDENT_GROUPS_BEGIN,
  GET_ALL_STUDENT_GROUPS_SUCCESS,
  GET_ALL_STUDENT_GROUPS_END,
  GET_ALL_SUBMISSIONS_BEGIN,
  GET_ALL_SUBMISSIONS_SUCCESS,
  CREATE_A_SUBMISSION_BEGIN,
  CREATE_A_SUBMISSION_END,
  CREATE_A_SUBMISSION_SUCCESS,
  DELETE_A_SUBMISSION,
  DISPLAY_UPLOAD_SUCCESS_ALERT,
  GET_ALL_SUPERVISORS_BEGIN,
  GET_ALL_SUPERVISORS_SUCCESS,
  GET_ALL_SUPERVISORS_ERROR,
  GET_SUPERVISE_BEGIN,
  GET_SUPERVISE_SUCCESS,
  GET_SUPERVISE_ERROR,
  DELETE_SUPERVISE_BEGIN,
  DELETE_SUPERVISE_SUCCESS,
  DELETE_SUPERVISE_ERROR,
  SET_UPDATE_SUPERVISE,
  UPDATE_SUPERVISE_BEGIN,
  UPDATE_SUPERVISE_SUCCESS,
  UPDATE_SUPERVISE_ERROR,
  GET_SUPERVISOR_REQUEST_BEGIN,
  GET_SUPERVISOR_REQUEST_SUCCESS,
  GET_SUPERVISOR_REQUEST_ERROR,
  STUDENT_SUPERVISOR_REQUEST_BEGIN,
  STUDENT_SUPERVISOR_REQUEST_SUCCESS,
  STUDENT_SUPERVISOR_REQUEST_ERROR,

} from "./actions";
import Submission from "../components/Submission";
const reducer = (state, action) => {
  //alert actions
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: "danger",
      alertText: "Please provide all values.",
    };
  }
  if (action.type === CLEAR_ALERT) {
    return {
      ...state,
      showAlert: false,
      alertType: "",
      alertText: "",
    };
  }
  //register user actions
  if (action.type === REGISTER_USER_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === REGISTER_USER_SUCCESS) {
    return {
      ...state,
      user: action.payload.user,
      token: action.payload.token,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      alertText: "User Created Redirecting...",
    };
  }
  if (action.type === REGISTER_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }
  //login user actions
  if (action.type === LOGIN_USER_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === LOGIN_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      user: action.payload.user,
      token: action.payload.token,
      showAlert: true,
      alertText: "Login Successful! Redirecting...",
      alertType: "success",
    };
  }
  if (action.type === LOGIN_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertText: action.payload.msg,
      alertType: "danger",
    };
  }
  //toggle sidebar
  if (action.type === TOGGLE_SIDEBAR) {
    return { ...state, showSideBar: !state.showSideBar };
  }
  //logout the user
  if (action.type === LOGOUT_USER) {
    return {
      ...initialState,
      user: null,
      token: null,
      userLocation: "",
      jobLocation: "",
    };
  }
  if (action.type === UPDATE_USER_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === UPDATE_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      user: action.payload.user,
      token: action.payload.token,
      alertType: "success",
      alertText: "User Profile Updated!",
    };
  }
  if (action.type === UPDATE_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }
  //get all users
  if (action.type === GET_ALL_USERS_BEGIN) {
    return {
      ...state,
      isLoading: true,
      showAlert: false,
    };
  }
  if (action.type === GET_ALL_USERS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      users: action.payload.users,
      totalUsers: action.payload.totalUsers,
      numOfPages: action.payload.numOfPages,
    };
  }
  //set update user
  if (action.type === SET_UPDATE_USER) {
    const user = state.users.find((user) => user._id === action.payload.id);
    const { _id, createdAt, name, type, email, updatedAt, isValidStaff } = user;
    return {
      ...state,
      isUpdate: true,
      isDelete: false,
      updateUserId: _id,
      createdAt,
      name,
      type,
      email,
      updatedAt,
      isValidStaff,
    };
  }
  if (action.type === UPDATE_USER_ADMIN_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === UPDATE_USER_ADMIN_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      alertText: "User Updated",
    };
  }
  if (action.type === UPDATE_USER_ADMIN_ERROR) {
    return {
      ...state,
      isLoading: false,
      alertType: "danger",
      showAlert: true,
      alertText: action.payload.msg,
    };
  }
  if (action.type === SET_DELETE_USER) {
    const user = state.users.find((user) => user._id === action.payload.id);
    const { _id, createdAt, name, type, email, updatedAt, isValidStaff } = user;
    console.log(user);
    return {
      ...state,
      isDelete: true,
      isUpdate: false,
      deleteUserId: _id,
      createdAt,
      name,
      type,
      email,
      updatedAt,
      isValidStaff,
    };
  }
  if (action.type === DELETE_USER) {
    return {
      ...state,
      isLoading: true,
    };
  }

  // supervise
  if (action.type === SUPERVISE_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }

  //student reducer section
  if (action.type === STUDENT_GROUP_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === SUPERVISE_ERROR) {
    return {
      ...state,
      isLoading: false,
      alertType: "danger",
      showAlert: true,
      alertText: action.payload.msg,
    };
  }

  if (action.type === SUPERVISE_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      alertText: "Success",
    };
  }

  if (action.type === GET_SUPERVISE_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === GET_SUPERVISE_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      specificSupervise: action.payload.supervisor,
    };
  }
  if (action.type === GET_SUPERVISE_ERROR) {
    return {
      ...state,
      isLoading: false,
      alertType: "danger",
      showAlert: true,
      alertText: action.payload.msg,
    };
  }

  if (action.type === DELETE_SUPERVISE_BEGIN) {
    return {
      ...state,
      alertType: "success",
      showAlert: true,
      alertText: 'deleting',


    };
  }
  if (action.type === DELETE_SUPERVISE_SUCCESS) {
    return {
      ...state,
      alertType: "success",
      showAlert: true,
      alertText: action.payload.msg,
    };
  }
  if (action.type === DELETE_SUPERVISE_ERROR) {
    return {
      ...state,
      alertType: "danger",
      showAlert: true,
      alertText: action.payload.msg,
    };
  }
  if (action.type === SET_UPDATE_SUPERVISE) {
    return {
        ...state,
        isEditing: true,
        editSuperviseId: action.payload.id,
    };
  }

  if (action.type === UPDATE_SUPERVISE_BEGIN) {
    return {
      ...state,
      isLoading:true
    };
  }
  if (action.type === UPDATE_SUPERVISE_SUCCESS) {
    return {
      ...state,
      showAlert:true,
      alertType: "success",
      isLoading: false,
      alertText: 'Updated'
    };
  }
  if (action.type === UPDATE_SUPERVISE_ERROR) {
    return {
      ...state,
      isLoading:false,
      alertType: "danger",
      showAlert: true,
      alertText: action.payload.msg,
    };
  }


  

  if (action.type === STUDENT_GROUP_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      alertText: "Group Registration Successfull",
    };
  }

  if (action.type === STUDENT_GROUP_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }

  if (action.type === GET_STUDENT_GROUP_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      membergroupID: action.payload.groupID,
      memberitNumOne: action.payload.itNumOne,
      memberemailOne: action.payload.emailOne,
      memberitNumTwo: action.payload.itNumTwo,
      memberemailTwo: action.payload.emailTwo,
      memberitNumThree: action.payload.itNumThree,
      memberemailThree: action.payload.emailThree,
      memberitNumFour: action.payload.itNumFour,
      memberemailFour: action.payload.emailFour,
      membersupervisor: action.payload.supervisor,
      membercoSupervisor: action.payload.coSupervisor,
      memberTopic: action.payload.topic,
      memberisRegister: action.payload.isRegister,
    };
  }
  //get all student groups
  if (action.type === GET_ALL_STUDENT_GROUPS_BEGIN) {
    return {
      ...state,
      isLoading: true,
      showAlert: false,
    };
  }
  if (action.type === GET_ALL_STUDENT_GROUPS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      StudentGroups: action.payload.data,
    };
  }

  //create a submission
  if (action.type === CREATE_A_SUBMISSION_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === CREATE_A_SUBMISSION_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      alertText: "New Submission Created...",
    };
  }
  if (action.type === CREATE_A_SUBMISSION_END) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      // alertText: action.payload.msg,
    };
  }
  //get all student groups
  if (action.type === GET_ALL_SUBMISSIONS_BEGIN) {
    return {
      ...state,
      isLoading: true,
      showAlert: false,
    };
  }
  if (action.type === GET_ALL_SUBMISSIONS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      submissions: action.payload.data,
    };
  }
  //delete submission
  if (action.type === DELETE_A_SUBMISSION) {
    return {
      ...state,
      isLoading: true,
    };
  }

  //DISPLAY_UPLOAD_SUCCESS_ALERT
  if (action.type === DISPLAY_UPLOAD_SUCCESS_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: "success",
      alertText: "Document uploaded Successfully...",
    };
  }


  if (action.type === GET_ALL_SUPERVISORS_BEGIN) {
    return {
      ...state,
      isLoading: true,
      showAlert: false,
    };
  }

  if (action.type === GET_ALL_SUPERVISORS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      supervisors: action.payload.supervisors,
      totalSupervisors: action.payload.totalSupervisors,
    };
  }

  if (action.type === GET_SUPERVISOR_REQUEST_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (action.type === GET_SUPERVISOR_REQUEST_SUCCESS) {
    return {
      ...state,
      isLoading: false,
    };
  }

  if (action.type === GET_SUPERVISOR_REQUEST_ERROR) {
    return {
      ...state,
      isLoading: false,
    };
  }

  //get SUPERVISOR request from student
  if (action.type === STUDENT_SUPERVISOR_REQUEST_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      requestGroups: action.payload.requestGroups,
    };
  }

  throw new Error(`no such action :${action.type}`);
};
export default reducer;
