import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import { Landing, Register, Error, DashBoard } from "./pages/index";
function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/">Dashboard</Link>
          <Link to="/register">Register</Link>
          <Link to="/landing">Landing</Link>
        </nav>
        <Routes>
          <Route path="/" element={<DashBoard />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/landing" element={<Landing />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
