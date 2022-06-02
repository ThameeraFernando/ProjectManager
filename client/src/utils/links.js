import { AiTwotoneHome } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { ImProfile, ImUserPlus, ImFilesEmpty, ImPlus } from "react-icons/im";
import { BiGroup } from "react-icons/bi";
import {
  AiOutlineUsergroupAdd,
  AiOutlineFileAdd,
  AiOutlineUpload,
} from "react-icons/ai";
import { GiTeacher } from "react-icons/gi";
import { MdOutlineDriveFolderUpload } from "react-icons/md";

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
    text: "Student Requests",
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
    icon: <MdOutlineDriveFolderUpload />,
  },
  {
    id: 8,
    text: "student groups",
    path: "student-groups",
    icon: <AiOutlineUsergroupAdd />,
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
    icon: <GiTeacher />,
  },
  {
    id: 11,
    text: "Submissions",
    path: "submissions",
    icon: <AiOutlineUpload />,
  },
  {
    id: 12,
    text: "create submissions",
    path: "create-submissions",

    icon: <AiOutlineFileAdd />,
  },
  {
    id: 13,
    text: "supervisors",
    path: "supervisors",
    icon: <BiGroup />,
  },
  {
    id: 14,
    text: "co-supervisors",
    path: "co-supervisors",
    icon: <BiGroup />,
  },
  {
    id: 15,
    text: "requests",
    path: "student-research-request",
    icon: <BiGroup />,
  },

  {
    id: 16,
    text: "Supervisor Home",
    path: "supervisorhome",
    icon: <AiTwotoneHome />,
  },
  {
    id: 17,
    text: "Research Group",
    path: "supervisorgroup",
    icon: <FaUsers />,
  },
  {
    id: 18,
    text: "Review Documents",
    path: "my-docs",
    icon: <MdOutlineDriveFolderUpload />,
  },
  {
    id: 19,
    text: "Co-Supervisor Home",
    path: "cosupervisorhome",
    icon: <AiTwotoneHome />,
  },
  {
    id: 20,
    text: "Co Supervise",
    path: "cosupervise",
    icon: <ImPlus />,
  },
  {
    id: 21,
    text: "Requests",
    path: "studentcorequsets",
    icon: <ImUserPlus />,
  },
  {
    id: 22,
    text: "Research Group",
    path: "cosupervisorgroup",
    icon: <FaUsers />,
  },
];

export default links;
