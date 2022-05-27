import React, { useState, useEffect, useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import reducer from "./reducer";
import axios from "axios";
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
  SET_VIEW_SUPERVISOR,
  DISPLAY_UPLOAD_SUCCESS_ALERT,
  GET_ALL_SUPERVISORS_BEGIN,
  GET_ALL_SUPERVISORS_SUCCESS,
  GET_ALL_SUPERVISORS_ERROR,
  GET_SUPERVISE_BEGIN,
  GET_SUPERVISE_SUCCESS,
  GET_SUPERVISE_ERROR,
  DELETE_SUPERVISE_BEGIN,
  DELETE_SUPERVISE_SUCCESS,
  SET_UPDATE_SUPERVISE,
  DELETE_SUPERVISE_ERROR,
  UPDATE_SUPERVISE_BEGIN,
  UPDATE_SUPERVISE_SUCCESS,
  UPDATE_SUPERVISE_ERROR,
  GET_SUPERVISOR_REQUEST_BEGIN,
  GET_SUPERVISOR_REQUEST_SUCCESS,
  GET_SUPERVISOR_REQUEST_ERROR,
  STUDENT_SUPERVISOR_REQUEST_BEGIN,
  STUDENT_SUPERVISOR_REQUEST_SUCCESS,
  STUDENT_SUPERVISOR_REQUEST_ERROR,
  GET_ALL_COSUPERVISORS_BEGIN,
  GET_ALL_COSUPERVISORS_SUCCESS,
  REQUEST_FOR_SUPERVISOR_SUCCESS,
  ACCEPT_REQUEST_SUCCESS,
  ACCEPT_REQUEST_ERROR,
  DECLINED_REQUEST_SUCCESS,
  GET_SUPERVISOR_GROUP_BEGIN,
  GET_SUPERVISOR_GROUP_SUCCESS,
  GET_COSUPERVISOR_REQUEST_BEGIN,
  GET_COSUPERVISOR_REQUEST_SUCCESS,
  GET_COSUPERVISOR_REQUEST_ERROR,
  STUDENT_COSUPERVISOR_REQUEST_SUCCESS,
  STUDENT_SUPERVISOR_EDIT_TOPIC_BEGIN,
  STUDENT_SUPERVISOR_EDIT_TOPIC_SUCCESS,
  STUDENT_SUPERVISOR_EDIT_TOPIC_ERROR,
} from "./actions";
const user = localStorage.getItem("user");
const token = localStorage.getItem("token");
const grpID = localStorage.getItem("groupid");
export const initialState = {
  isLoading: false,
  isEditing: false,
  showAlert: true,
  alertText: "",
  alertType: "",
  user: user ? JSON.parse(user) : null,
  token: token,
  showSideBar: false,
  users: [],
  totalUsers: 0,
  numOfPages: 1,
  page: 1,
  updateUserId: "",
  deleteUserId: "",
  isUpdate: false,
  isDelete: false,
  deleteSuperviseId: "",
  editSuperviseId: "",
  editTopic: false,

  membergroupID: grpID,
  membermember: "",
  memberitNumOne: "",
  memberemailOne: "",
  memberitNumTwo: "",
  memberemailTwo: "",
  memberitNumThree: "",
  memberemailThree: "",
  memberitNumFour: "",
  memberemailFour: "",
  membersupervisor: "pending",
  membercoSupervisor: "pending",
  memberTopic: "",
  memberisRegister: false,
  StudentGroups: [],
  submissions: [],
  supervisors: [],
  totalSupervisors: [],
  specificSupervise: [],
  requestGroups: [],
  requestCoGroups: [],
  coSupervisors: [],
  totalCoSupervisors: [],
  studentRequests:[],
  supervisorGroup:[],

};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  //display alert
  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
    clearAlert();
  };
  //clear alert
  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 3000);
  };
  //add user to local storage
  const addUserToLocalStorage = ({ user, token }) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
    localStorage.setItem("token", token);
  };
  //remove user from local storage
  const removeUserFromLocalStorage = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  const addStudentDetailsToLocalStorage = ({ membergroupID }) => {
    localStorage.setItem("groupid", membergroupID);
  };

  const removeStudentDetailsToLocalStorage = () => {
    localStorage.removeItem("groupid");
  };

  //register user
  const registerUser = async (currentUser) => {
    dispatch({ type: REGISTER_USER_BEGIN });
    console.log(currentUser);
    try {
      const response = await axios.post("/api/v1/auth/register", currentUser);
      console.log(response.data);
      const { user, token } = response.data;
      dispatch({
        type: REGISTER_USER_SUCCESS,
        payload: {
          user,
          token,
        },
      });
      addUserToLocalStorage({ user, token });
    } catch (error) {
      console.log(error.response);
      dispatch({
        type: REGISTER_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };
  //login user
  const loginUser = async (currentUser) => {
    //console.log(currentUser);
    dispatch({ type: LOGIN_USER_BEGIN });
    try {
      const { data } = await axios.post("/api/v1/auth/login", currentUser);
      const { user, token } = data;
      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: { user, token },
      });
      addUserToLocalStorage({ user, token });
    } catch (error) {
      dispatch({
        type: LOGIN_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };
  //toggle side bar
  const toggleSideBar = () => {
    dispatch({ type: TOGGLE_SIDEBAR });
  };
  //logout User
  const logoutUser = () => {
    dispatch({ type: LOGOUT_USER });
    removeStudentDetailsToLocalStorage();
    removeUserFromLocalStorage();
  };
  //Axios setup instance
  const authFetch = axios.create({
    baseURL: "/api/v1",
    headers: {
      Authorization: `Bearer ${state.token}`,
    },
  });
  //check for unauthorize users
  authFetch.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response.status === 401) {
        logoutUser();
      }
      return Promise.reject(error);
    }
  );
  //update user
  const updateUser = async (currentUser) => {
    console.log(currentUser);
    dispatch({ type: UPDATE_USER_BEGIN });
    try {
      const { data } = await authFetch.patch("auth/updateUser", currentUser);
      const { user, token } = data;
      console.log(data);
      dispatch({
        type: UPDATE_USER_SUCCESS,
        payload: { user, token },
      });
      addUserToLocalStorage({ user, token });
    } catch (error) {
      if (error.response.status !== 401) {
        dispatch({
          type: UPDATE_USER_ERROR,
          payload: { msg: error.response.data.msg },
        });
      }
    }
    clearAlert();
  };
  //get all users
  const getUsers = async () => {
    let url = "/users";
    dispatch({ type: GET_ALL_USERS_BEGIN });
    try {
      const { data } = await authFetch.get(url);
      const { users, totalUsers, numOfPages } = data;
      dispatch({
        type: GET_ALL_USERS_SUCCESS,
        payload: { users, totalUsers, numOfPages },
      });
    } catch (error) {
      console.log(error);
      logoutUser();
    }
    clearAlert();
  };
  //set update user
  const setUpdateUser = (id) => {
    // console.log(`set update User ${id}`);
    dispatch({ type: SET_UPDATE_USER, payload: { id } });
  };
  //delete user
  const setDeleteUser = (id) => {
    // console.log(`delete User ${id}`);
    dispatch({ type: SET_DELETE_USER, payload: { id } });
  };
  //update user
  const updateUserAdmin = async ({
    UPisValidStaff,
    UPname,
    UPtype,
    UPemail,
  }) => {
    dispatch({ type: UPDATE_USER_ADMIN_BEGIN });
    try {
      console.log({
        UPisValidStaff,
        UPname,
        UPtype,
        UPemail,
      });
      await authFetch.patch(`/users/${state.updateUserId}`, {
        email: UPemail,
        name: UPname,
        type: UPtype,
        isValidStaff: UPisValidStaff,
      });
      dispatch({ type: UPDATE_USER_ADMIN_SUCCESS });
      navigator("/all-users");
    } catch (error) {
      console.log(error);
      dispatch({
        type: UPDATE_USER_ADMIN_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };
  //delete user
  const navigator = useNavigate();
  const deleteUser = async () => {
    const id = state.deleteUserId;
    dispatch({ type: DELETE_USER });
    try {
      await authFetch.delete(`/users/${id}`);
      getUsers();
      navigator("/all-users");
    } catch (error) {
      logoutUser();
    }
  };

  // add supervisor type and field
  const supervise = async ({ name, email, type, field, userId }) => {
    try {
      dispatch({ type: SUPERVISE_BEGIN });
      const response = await axios.post("/api/v1/supervisor", {
        name,
        email,
        type,
        field,
        userId,
      });
      dispatch({
        type: SUPERVISE_SUCCESS,
        payload: { msg: response.data.msg },
      });
    } catch (error) {
      dispatch({
        type: SUPERVISE_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };

  //get specific supervise
  const getSupervise = async (uid) => {
    dispatch({ type: GET_SUPERVISE_BEGIN });
    try {
      const response = await axios.get(`/api/v1/supervisor/${uid}`);
      const supervisor = response.data;
      // console.log(supervisor);
      dispatch({
        type: GET_SUPERVISE_SUCCESS,
        payload: { supervisor },
      });
    } catch (error) {
      dispatch({
        type: GET_SUPERVISE_ERROR,
        payload: { msg: error.response.data.msg },
      });
      // console.log(error);
    }
    clearAlert();
  };

  const setEditSupervise = ({_id, name, type, email, availability, field, count }) => {
    dispatch({type:SET_UPDATE_SUPERVISE,payload:{_id, name, type, email, availability, field, count }})
  }


  //edit specific supervise
  const editSupervise = async ({ name, email, type, field, userId, count }) => {
    dispatch({ type: UPDATE_SUPERVISE_BEGIN })
    try {
      await axios.patch(`/api/v1/supervisor/${state.editSuperviseId}`, {
        name, email, type, field, userId, count
  })

      dispatch({type: UPDATE_SUPERVISE_SUCCESS})
    } catch (error) {
      if (error.response.status === 401) return;
      dispatch({
        type: UPDATE_SUPERVISE_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert()
    getSupervise(state.user._id)
  }


  //delete specific supervise
  const nav = useNavigate();
  const deleteSupervise = async (sid, user) => {
    dispatch({ type: DELETE_SUPERVISE_BEGIN });
    try {
      const response = await axios.delete(`/api/v1/supervisor/${sid}`);
      const msg = response.data.msg;
      console.log(msg);
      dispatch({ type: DELETE_SUPERVISE_SUCCESS, payload: msg });
      getSupervise(user);
      nav("/supervisorhome");
    } catch (error) {
      dispatch({
        type: GET_SUPERVISE_ERROR,
        payload: { msg: error.response.data.msg },
      });
      console.log(error);
    }

    clearAlert()
  }


  //get all supervisor student
  const getAllSupervisor = async () => {
    dispatch({ type: GET_ALL_SUPERVISORS_BEGIN });
    let sup = "supervisor";
    try {
      const { data } = await authFetch.get(
        `/supervisor/supervisorsdetails/${sup}`
      );
      const { supervisors, totalSupervisors } = data;

      dispatch({
        type: GET_ALL_SUPERVISORS_SUCCESS,
        payload: { supervisors, totalSupervisors },
      });
    } catch (error) {
      logoutUser();
    }
    clearAlert();
  };

  //get all co-supervisor
  const getAllCoSupervisor = async () => {
    dispatch({ type: GET_ALL_COSUPERVISORS_BEGIN });
    let cosup = "co-supervisor";
    try {
      const { data } = await authFetch.get(
        `/supervisor/cosupervisors/${cosup}`
      );
      const { coSupervisors, totalCoSupervisors } = data;

      dispatch({
        type: GET_ALL_COSUPERVISORS_SUCCESS,
        payload: { coSupervisors, totalCoSupervisors },
      });
    } catch (error) {
      logoutUser();
    }
    clearAlert();
  };

  //student group register

  const groupReg = async ({ groupDetails }) => {
    dispatch({ type: STUDENT_GROUP_BEGIN });
    try {
      const group = await authFetch.post(
        "/students/groupRegister",
        groupDetails
      );
      dispatch({ type: STUDENT_GROUP_SUCCESS });
    } catch (error) {
      dispatch({
        type: STUDENT_GROUP_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };

  //get specific student group

  const getGroups = async () => {
    try {
      const data = await authFetch.get(
        `/students/groupRegister/${state.user.email}`
      );

      const {
        groupID,
        itNumOne,
        emailOne,
        itNumTwo,
        emailTwo,
        itNumThree,
        emailThree,
        itNumFour,
        emailFour,
        supervisor,
        coSupervisor,
        topic,
        isRegister,
      } = data.data;

      dispatch({
        type: GET_STUDENT_GROUP_SUCCESS,
        payload: {
          groupID,
          itNumOne,
          emailOne,
          itNumTwo,
          emailTwo,
          itNumThree,
          emailThree,
          itNumFour,
          emailFour,
          supervisor,
          coSupervisor,
          topic,
          isRegister,
        },
      });
      addStudentDetailsToLocalStorage({ membergroupID: groupID });
    } catch (error) {}
  };

  //request supervisor
  const requestSupervisor = async (email, name) => {
    getGroups();
    dispatch({ type: GET_SUPERVISOR_REQUEST_BEGIN });
    try {
      const { membergroupID, memberTopic } = state;
      let groupID = membergroupID;
      let topic = memberTopic;
      let supervisorEmail = email;
      let supervisorName = name;
      const studentReequest = await authFetch.post("/requests", {
        groupID,
        supervisorEmail,
        supervisorName,
        topic,
      });
      dispatch({ type: GET_SUPERVISOR_REQUEST_SUCCESS });
    } catch (error) {
      dispatch({
        type: GET_SUPERVISOR_REQUEST_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };

  //request co-supervisor
  const requestCoSupervisor = async (email, name) => {
    getGroups();
    dispatch({ type: GET_COSUPERVISOR_REQUEST_BEGIN });
    try {
      const { membergroupID, memberTopic } = state;
      let groupID = membergroupID;
      let topic = memberTopic;
      let coSupervisorEmail = email;
      let coSupervisorName = name;
      const studentCoRequest = await authFetch.post("/corequests", {
        groupID,
        coSupervisorEmail,
        coSupervisorName,
        topic,
      });

      dispatch({ type: GET_COSUPERVISOR_REQUEST_SUCCESS });
    } catch (error) {
      dispatch({
        type: GET_COSUPERVISOR_REQUEST_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };

  //get request supervisor from student

  const getRequestSupervisor = async () => {
    dispatch({ type: STUDENT_SUPERVISOR_REQUEST_BEGIN });
    getGroups();

    try {
      const response = await authFetch.get(`/requests/${state.membergroupID}`);
      const { requestGroups } = response.data;
      dispatch({
        type: STUDENT_SUPERVISOR_REQUEST_SUCCESS,
        payload: { requestGroups },
      });
    } catch (error) {
      console.log(error);
    }
  };

  //get request co-supervisor from student

  const getRequestCoSupervisor = async () => {
    getGroups();

    try {
      const response = await authFetch.get(
        `/corequests/${state.membergroupID}`
      );
      const { requestCoGroups } = response.data;
      dispatch({
        type: STUDENT_COSUPERVISOR_REQUEST_SUCCESS,
        payload: { requestCoGroups },
      });
    } catch (error) {}
  };

  //set edit topic when rejected this will be updated in Group collection

  const editTopic = async ({ groupID, topic }) => {
    dispatch({ type: STUDENT_SUPERVISOR_EDIT_TOPIC_BEGIN });
    try {
      const { response } = await authFetch.patch(
        `/students/groupRegister/${groupID}`,
        { topic }
      );
      dispatch({ type: STUDENT_SUPERVISOR_EDIT_TOPIC_SUCCESS });
    } catch (error) {
      dispatch({
        type: STUDENT_SUPERVISOR_EDIT_TOPIC_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };

  //set edit topic when rejected this will be updated in request collection

  const editTopicRequest = async ({ groupID, topic }) => {
    try {
      const { response } = await authFetch.patch(
        `requests/groupRegister/${groupID}`,
        { topic }
      );
    } catch (error) {}
  };

  //get all Student Groups
  const getAllStudents = async () => {
    let url = "/students";
    dispatch({ type: GET_ALL_STUDENT_GROUPS_BEGIN });
    try {
      const { data } = await authFetch.get(url);

      // const { users, totalUsers, numOfPages } = data;
      dispatch({
        type: GET_ALL_STUDENT_GROUPS_SUCCESS,
        payload: { data },
      });
    } catch (error) {
      console.log(error);
      logoutUser();
    }
    clearAlert();
  };

  //get all submissions
  const getALlSubmissions = async () => {
    let url = "/submissions";
    dispatch({ type: GET_ALL_SUBMISSIONS_BEGIN });
    try {
      const { data } = await authFetch.get(url);
      console.log(data);
      dispatch({
        type: GET_ALL_SUBMISSIONS_SUCCESS,
        payload: { data },
      });
    } catch (error) {
      console.log(error);
      logoutUser();
    }
    clearAlert();
  };

  //create a new submission
  const CreateSubmission = async (newSubmission) => {
    dispatch({ type: CREATE_A_SUBMISSION_BEGIN });
    try {
      const response = await authFetch.post("/submissions", newSubmission);
      console.log(response.data);
      dispatch({ type: CREATE_A_SUBMISSION_SUCCESS });
      getALlSubmissions();
    } catch (error) {
      dispatch({
        type: CREATE_A_SUBMISSION_END,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };

  //remove submission
  const removeSubmission = async (sid) => {
    console.log(sid);
    dispatch({ type: DELETE_A_SUBMISSION });
    try {
      await authFetch.delete(`/submissions/${sid}`);
      getALlSubmissions();
    } catch (error) {
      logoutUser();
    }
  };

  //view Supervisor Student
  const setView = (id) => {
    dispatch({ type: SET_VIEW_SUPERVISOR, payload: { id } });
  };
  //DISPLAY_UPLOAD_SUCCESS_ALERT
  const displaySuccessUpload = () => {
    dispatch({ type: DISPLAY_UPLOAD_SUCCESS_ALERT });
    clearAlert();
  };


 //supervisor fetch request (supervisor dashboard)
  const getStudentGroupReq = async () => {
    try {
      const response = await axios.get(`api/v1/requests/supervisors/${state.user.email}`);
      const {request}  = response.data;
      dispatch({type:REQUEST_FOR_SUPERVISOR_SUCCESS, payload:{request:request}})
    }catch(error){
      console.log(error);
    }
  };

  //supervisor dashboard
  const acceptStudentGroupReq = async (gid,rid) => {
    try {
      const response = await axios.get(`/api/v1/supervisor/${state.user._id}`);
      const data = response.data
      // console.log(data[0].count);
      if(data[0].count===0){
        const accept = await axios.patch(`/api/v1/students/groupSupervisor/${gid}`,{"supervisor":state.user.name})
        // console.log(accept.data);
        const updateReq = await axios.patch(`/api/v1/requests/${rid}`,{"status":"accepted"})
        // console.log(updateReq.data);
        const updateCount = await axios.patch(`/api/v1/supervisor/${data[0]._id}`, { count:data[0].count+1 })
        // console.log(updateCount);
        dispatch({type:ACCEPT_REQUEST_SUCCESS,payload:{msg:'request accepted !'}})
      }else{
        console.log('you already have a group');
        dispatch({type:ACCEPT_REQUEST_ERROR,payload:{msg:'You already supervise a group !'}})
      }
    } catch (error) {
      dispatch({type:ACCEPT_REQUEST_ERROR,payload:{msg:error.response.data.msg}})
    }
    clearAlert()
  }

  //supervisor dashboard
  const rejectStudentGroupReq =async (rid) => {
    try {
      const updateReq = await axios.patch(`/api/v1/requests/${rid}`,{"status":"declined"})
      dispatch({type:DECLINED_REQUEST_SUCCESS,payload:{msg:'Request declined !!'}})
    } catch (error) {
      console.log(error);
    }
    clearAlert()
  }

  const getSupervisorGroup = async (sName) =>{

    try{
      dispatch({type:GET_SUPERVISOR_GROUP_BEGIN})
      const response = await axios.get(`/api/v1/students/groupSupervisor/${sName}`)
      const {group}  = response.data;
      console.log(group);
      dispatch({type:GET_SUPERVISOR_GROUP_SUCCESS, payload:{group}})
    }catch(error){
      console.log(error);
    }
  } 


  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,
        registerUser,
        loginUser,
        toggleSideBar,
        logoutUser,
        updateUser,
        getUsers,
        setDeleteUser,
        setUpdateUser,
        updateUserAdmin,
        deleteUser,
        supervise,
        groupReg,
        getGroups,
        getAllStudents,
        CreateSubmission,
        getALlSubmissions,
        removeSubmission,
        setView,
        displaySuccessUpload,
        getAllSupervisor,
        requestSupervisor,
        getSupervise,
        setEditSupervise,
        editSupervise,
        deleteSupervise,
        getRequestSupervisor,
        editTopic,
        getAllCoSupervisor,
        getStudentGroupReq,
        acceptStudentGroupReq,
        rejectStudentGroupReq,
        getSupervisorGroup,
        requestCoSupervisor,
        getRequestCoSupervisor,
        editTopicRequest,

      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
export { AppProvider };
