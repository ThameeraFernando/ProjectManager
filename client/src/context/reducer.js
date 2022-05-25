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
  STUDENT_GROUP_BEGIN,
  STUDENT_GROUP_SUCCESS,
  STUDENT_GROUP_ERROR,
  GET_ALL_STUDENT_GROUPS_BEGIN,
  GET_ALL_STUDENT_GROUPS_SUCCESS,
  GET_ALL_STUDENT_GROUPS_END,
  GET_ALL_SUBMISSIONS_BEGIN,
  GET_ALL_SUBMISSIONS_SUCCESS,
  CREATE_A_SUBMISSION_BEGIN,
  CREATE_A_SUBMISSION_END,
  CREATE_A_SUBMISSION_SUCCESS,
  DELETE_A_SUBMISSION,
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

  //student reducer section

  if (action.type === STUDENT_GROUP_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (action.type === STUDENT_GROUP_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      alertText: "Gropu Registration Successfull",
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

  throw new Error(`no such action :${action.type}`);
};
export default reducer;
