import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";
import UpdateProfile from "./tabs/updateForm";
import AddAssignment from "./tabs/addAssignment";
import AddCourse from "./tabs/addCourse";
import AddScore from "./tabs/addScore";
import DashboardNav from "./dashboardNav";
import DashboardPage from "../pages/Indexpage";
import { useState } from "react";

type TabType = "update" | "assignment" | "course" | "score";

function AdminDashboard() {
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
          Add Assignments
        </button>
        <button className="tabBtn" onClick={(e) => handleTabClick("course", e)}>
          Add Course Materials
        </button>
        <button className="tabBtn" onClick={(e) => handleTabClick("score", e)}>
          Add Scores
        </button>
      </div>

      <div>
        {activeTab === "update" && <UpdateProfile />}
        {activeTab === "assignment" && <AddAssignment />}
        {activeTab === "course" && <AddCourse />}
        {activeTab === "score" && <AddScore />}
      </div>
      <DashboardPage />
    </>
  );
}
export default AdminDashboard;
