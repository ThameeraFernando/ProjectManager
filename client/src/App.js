import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import { Landing, Register, Error } from "./pages/index";
import ProtectedRoute from "./pages/ProtectedRoute";
import { AppProvider } from "./context/appContext";
import { Wait } from "./pages/Wait";
import {
  SharedLayout,
  Profile,
  AllUsers,
  Home,
  User,
  UpdateUser,
  StudentRequestList,
  ReportSubmissions,
  Supervise,
  Uploaddocs,
  StudnetGroup,
  Supervisors,
  DownloadFile,
  AllStudentGroups,
  StaffMembers,
  Submissions,
  CreateSubmission,
  AddSubmissions,
  StudentResearchRequest,
  CoSupervisors,
  SupervisorHome,
  SupervisorGroup,
  MyDocuments,
  CoSupervisorHome,
  CoSupervise,
  StudentCoRequestList,
  CoSupervisorGroup,
  SupervisorMessage,
  EvaluationPanel,
  CoSupervisorMessage,
  StudentMessage

} from "./pages/dashboard/index";
function App() {
  return (
    <>
      <BrowserRouter>
        <AppProvider>
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <SharedLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Home />} />
              <Route path="profile" element={<Profile />} />
              <Route path="download-file/:id" element={<DownloadFile />} />
              <Route
                path="my-docs/download-file/:id"
                element={<DownloadFile />}
              />
              <Route path="update-user" element={<UpdateUser />} />
              <Route path="user" element={<User />} />
              <Route path="all-users" element={<AllUsers />} />
              <Route path="studentrequsets" element={<StudentRequestList />} />
              <Route path="reportsubmissions" element={<ReportSubmissions />} />
              <Route path="supervise" element={<Supervise />} />
              <Route path="all-student-groups" element={<AllStudentGroups />} />
              <Route path="upload-docs" element={<Uploaddocs />} />
              <Route path="create-submissions" element={<CreateSubmission />} />
              <Route path="student-submissions" element={<AddSubmissions />} />
              <Route path="submissions" element={<Submissions />} />
              <Route path="staff-members" element={<StaffMembers />} />
              <Route path="student-groups" element={<StudnetGroup />} />
              <Route path="supervisors" element={<Supervisors />} />

              <Route path="co-supervisors" element={<CoSupervisors />} />

              <Route path="supervisorhome" element={<SupervisorHome />} />
              <Route path="supervisorgroup" element={<SupervisorGroup />} />
              <Route path="my-docs" element={<MyDocuments />} />

              <Route path="cosupervisorhome" element={<CoSupervisorHome />} />
              <Route path="cosupervise" element={<CoSupervise />} />
              <Route path="studentcorequsets" element={<StudentCoRequestList />} />
              <Route path="cosupervisorgroup" element={<CoSupervisorGroup />} />
              <Route path="supervisormessage" element={<SupervisorMessage />} />
              <Route path="evaluationpanel" element={<EvaluationPanel />} /> {/* panel member */}
              <Route path="cosupervisormessage" element={<CoSupervisorMessage />} />
              <Route path="studentmessage" element={<StudentMessage />} />
              
              <Route
                path="student-research-request"
                element={<StudentResearchRequest />}
              />
            </Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/landing" element={<Landing />}></Route>
            <Route path="/wait" element={<Wait />}></Route>
            <Route path="*" element={<Error />}></Route>
          </Routes>
        </AppProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
