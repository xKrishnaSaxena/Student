import React from "react";
import {
  BrowserRouter,
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
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
