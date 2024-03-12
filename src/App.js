import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useParams,
} from "react-router-dom";
import StudentHome from "./StudentHome";
import StudentDetails from "./StudentDetails";

function App() {
  const { username } = useParams();

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          exact
          element={<Link to="/studentHome">Student Home</Link>}
        ></Route>
        <Route path="/studentHome" element={<StudentHome />} />
        <Route path="/studentDetails/:username" element={<StudentDetails />} />
      </Routes>
      {!username ? "" : <Link to="/studentHome">Student Home</Link>}
    </Router>
  );
}

export default App;
