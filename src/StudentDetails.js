import React from "react";
import { Link, useParams } from "react-router-dom";

function StudentDetails() {
  const { username } = useParams();
  return (
    <div>
      <h2>Student Details</h2>
      <p>Username: {username}</p>
      <Link to="/studentHome">Student Home</Link>
    </div>
  );
}

export default StudentDetails;
