import React from "react";
import "../style/dashboard.css";
import { NavLink, Outlet, useMatch, useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const matchAdmin = useMatch("/admin");
  function handleLogout() {
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  }

  return (
    <>
      <h1 className="dashbord_hading"> Welcome To Fshind Dashboard</h1>
      <div className="smHeader">
        <NavLink
          to="upload"
          className={`nested_link ${matchAdmin ? "active" : ""}`}
        >
          Admin
        </NavLink>
        <NavLink
          to="list"
          className={({ isActive }) =>
            isActive ? "nested_link active" : "nested_link"
          }
        >
          My List
        </NavLink>
        <NavLink
          to="myenquiry"
          className={({ isActive }) =>
            isActive ? "nested_link active" : "nested_link"
          }
        >
          My Enquiry
        </NavLink>
        <button onClick={handleLogout} className="smHeader_button">
          Logout
        </button>
      </div>
      <Outlet />
    </>
  );
}

export default Dashboard;
