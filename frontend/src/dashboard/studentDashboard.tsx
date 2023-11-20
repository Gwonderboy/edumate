import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";
import UpdateProfile from "./tabs/updateForm";
import ViewAssignment from "./tabs/viewAssignment";
import ViewCourse from "./tabs/viewCourse";
import ViewScore from "./tabs/viewScore";
import DashboardNav from "./dashboardNav";
import DashboardPage from "../pages/Indexpage";
import { useState } from "react";

type TabType = "update" | "assignment" | "course" | "score";

function StudentDashboard() {
  const [activeTab, setActiveTab] = useState<TabType | null>(null);
  const handleTabClick = (
    tab: TabType,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    setActiveTab((prevTab) => (prevTab === tab ? null : tab));
  };

  return (
    <>
      <DashboardNav />

      <div className="userTab">
        <button className="tabBtn" onClick={(e) => handleTabClick("update", e)}>
          Update Profile
        </button>
        <button
          className="tabBtn"
          onClick={(e) => handleTabClick("assignment", e)}
        >
          View Assignments
        </button>
        <button className="tabBtn" onClick={(e) => handleTabClick("course", e)}>
          View Course Materials
        </button>
        <button className="tabBtn" onClick={(e) => handleTabClick("score", e)}>
          View Scores
        </button>
      </div>

      <div>
        {activeTab === "update" && <UpdateProfile />}
        {activeTab === "assignment" && <ViewAssignment />}
        {activeTab === "course" && <ViewCourse />}
        {activeTab === "score" && <ViewScore />}
      </div>
      <DashboardPage />
    </>
  );
}

export default StudentDashboard;
