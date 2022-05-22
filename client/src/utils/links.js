import { AiTwotoneHome } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { ImProfile } from "react-icons/im";

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
    id: 4,
    text: "profile",
    path: "profile",
    icon: <ImProfile />,
  },
];

export default links;
