import { render, screen, cleanup } from "@testing-library/react";
import { AppProvider } from "../../context/appContext";
import { BrowserRouter } from "react-router-dom";
import Alert from "../Alert";
import User from "../User";
import Message from "../Message";
import CoSupervisor from "../CoSupervisor";
import Loading from "../Loading";
import MyCoSupervise from "../MyCoSupervise";
import Profile from "../../pages/dashboard/Profile";
import MyDocuments from "../../pages/dashboard/MyDocuments";
import "@testing-library/jest-dom";

//Thameera Fernando
test("Should render the alert component", () => {
  render(
    <BrowserRouter>
      <AppProvider>
        <Alert />
      </AppProvider>
    </BrowserRouter>
  );
  const alertElement = screen.getByTestId("test-1");
  expect(alertElement).toBeInTheDocument();
});

test("check the props in User Component", () => {
  const user = {
    _id: 11,
    createdAt: 1212,
    name: "poorna",
    type: "Admin",
    email: "sdsdn@gmail.com",
    updatedAt: "dsdsd",
    isValidStaff: true,
  };
  render(
    <BrowserRouter>
      <AppProvider>
        <User key={1} {...user} />
      </AppProvider>
    </BrowserRouter>
  );
  const userElement = screen.getByTestId("test-2");
  expect(userElement).toBeInTheDocument();
  const nameElement = screen.getByTestId("test-3");
  expect(nameElement).toHaveTextContent("poorna");
});

//Dilupa Girambe
test("Should render the message component", () => {
  render(
    <BrowserRouter>
      <AppProvider>
        <Message />
      </AppProvider>
    </BrowserRouter>
  );
  const messageElement = screen.getByTestId("test-4");
  expect(messageElement).toBeInTheDocument();
});
test("check the props in MyCoSupervise Component", () => {
  const user = {
    _id: 12,
    name: "dilupa",
    type: "sds",
    email: "abc@gmail.com",
    availability: "sds",
    field: "sds",
    count: 1,
  };
  render(
    <BrowserRouter>
      <AppProvider>
        <MyCoSupervise key={1} {...user} />
      </AppProvider>
    </BrowserRouter>
  );
  const MyCoSuperviseElement = screen.getByTestId("test-8");
  expect(MyCoSuperviseElement).toBeInTheDocument();
  const MyCoSupervisenameElement = screen.getByTestId("test-9");
  expect(MyCoSupervisenameElement).toHaveTextContent("dilupa");
});

//Poorna RanaSinghe

test("Should render the StudentGroup page", () => {
  render(
    <BrowserRouter>
      <AppProvider>
        <Loading />
      </AppProvider>
    </BrowserRouter>
  );
  const LoadingElement = screen.getByTestId("test-7");
  expect(LoadingElement).toBeInTheDocument();
});

test("check the props in CoSupervisor Component", () => {
  const Couser = {
    name: "abc",
    type: "sdbshj",
    email: "sdbsgbd@gmail.com",
    availability: "djshdj",
    field: "jbdfjsbhj",
  };
  render(
    <BrowserRouter>
      <AppProvider>
        <CoSupervisor key={1} {...Couser} />
      </AppProvider>
    </BrowserRouter>
  );
  const CoSupervisorElement = screen.getByTestId("test-5");
  expect(CoSupervisorElement).toBeInTheDocument();
  const CoSupervisornameElement = screen.getByTestId("test-6");
  expect(CoSupervisornameElement).toHaveTextContent("abc");
});

//Thimira nana

test("Should render the profile page", () => {
  render(
    <BrowserRouter>
      <AppProvider>
        <Profile />
      </AppProvider>
    </BrowserRouter>
  );
  const ProfileElement = screen.getByTestId("test-10");
  expect(ProfileElement).toBeInTheDocument();
});

test("Should render the myDocument page", () => {
  render(
    <BrowserRouter>
      <AppProvider>
        <MyDocuments />
      </AppProvider>
    </BrowserRouter>
  );
  const MyDocumentsElement = screen.getByTestId("test-12");
  expect(MyDocumentsElement).toBeInTheDocument();
});
