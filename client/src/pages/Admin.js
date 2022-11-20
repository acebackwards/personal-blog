import React, { useState } from "react";
import "../components/Admin/Admin.css";
import AddRepo from "../components/modals/AddRepo";

const Admin = () => {
  const [repoVisible, setRepoVisible] = useState(false)
  return (
    <div className="admin-container">
      <h2 className="admin-h2">ADMIN PANEL</h2>
      <button className="admin-button" onClick={() => setRepoVisible(true)}>Add REPO</button>
      {repoVisible ? 
      <AddRepo onHide={() => setRepoVisible(false)}/> : null}
      {/* <button>Remove REPO</button> */}
    </div>
  );
};

export default Admin;
