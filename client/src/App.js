import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import { Landing, Register, Error } from "./pages/index";
import ProtectedRoute from "./pages/ProtectedRoute";
import {
  SharedLayout,
  Profile,
  AllUsers,
  Home,
  User,
  UpdateUser,
} from "./pages/dashboard/index";
function App() {
  return (
    <>
      <BrowserRouter>
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
            <Route path="update-user" element={<UpdateUser />} />
            <Route path="user" element={<User />} />
            <Route path="all-users" element={<AllUsers />} />
          </Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/landing" element={<Landing />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
