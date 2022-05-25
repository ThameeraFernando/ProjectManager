import { AiTwotoneHome } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { ImProfile, ImUserPlus, ImFilesEmpty, ImPlus } from "react-icons/im";
import { ImProfile } from "react-icons/im";
import { BiGroup } from "react-icons/bi";


const links = [
  {
    id: 1,
    text: "home",
    path: "/",
    icon: <AiTwotoneHome />,
  },
  {
    id: 2,
    text: "all users",
    path: "all-users",
    icon: <FaUsers />,
  },
  {
    id: 3,
    text: "Student Group Requests",
    path: "studentrequsets",
    icon: <ImUserPlus />,
  },
  {
    id: 4,
    text: "Report & Submissions",
    path: "reportsubmissions",
    icon: <ImFilesEmpty />,
  },
  {
    id: 5,
    text: "profile",
    path: "profile",
    icon: <ImProfile />,
  },
  {
    id: 6,
    text: "supervise",
    path: "supervise",
    icon: <ImPlus />,
  },
  {
    id: 7,
    text: "upload documents",
    path: "upload-docs",
    icon: <ImProfile />,
  },
  {
    id: 8,
    text: "student groups",
    path: "student-groups",
    icon: <BiGroup />,
  },
  {
    id: 9,
    text: "All student groups",
    path: "all-student-groups",
    icon: <BiGroup />,
  },
  {
    id: 10,
    text: "staff members",
    path: "staff-members",
    icon: <BiGroup />,
  },
  {
    id: 11,
    text: "Submissions",
    path: "submissions",
    icon: <BiGroup />,
  },
  {
    id: 12,
    text: "create submissions",
    path: "create-submissions",
    icon: <BiGroup />,

  },
  {
    id: 13,
    text: "supervisors",
    path: "supervisors",
    icon: <BiGroup />,
  },
];

export default links;
