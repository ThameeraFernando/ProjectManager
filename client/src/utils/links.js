import { AiTwotoneHome } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
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
    text: "profile",
    path: "profile",
    icon: <ImProfile />,
  },
  {
    id: 4,
    text: "upload documents",
    path: "upload-docs",
    icon: <ImProfile />,
  },
  {
    id: 5,
    text: "student groups",
    path: "student-groups",
    icon: <BiGroup />,
  },

  {
    id: 6,
    text: "All student groups",
    path: "all-student-groups",
    icon: <BiGroup />,
  },

  {
    id: 8,
    text: "supervisors",
    path: "supervisors",
    icon: <BiGroup />,
  },
];

export default links;
