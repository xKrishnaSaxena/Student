import React from "react";
import { Link } from "react-router-dom";

function StudentHome() {
  const username = "Krishna";
  return (
    <div>
      <h2>Student Home</h2>
      <p>Username: {username}</p>
      <p>Telephone: 9876543210</p>
      <Link to={`/studentDetails/${username}`}>Student Details</Link>
    </div>
  );
}

export default StudentHome;
