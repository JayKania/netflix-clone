import { Route, Routes, useLocation } from "react-router-dom";
import Browse from "./components/Browse/Browse";
import RequireAuth from "./components/Browse/RequireAuth";
import Home from "./components/Home/Home";
import Login from "./components/Signin/Login";
import Signup from "./components/Signup/Signup";
import { useEffect } from "react";
import Profiles from "./components/Home/Profiles";
const App = () => {
  // const location = useLocation();

  // useEffect(() => {
  //   console.log(location);
  // });
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/browse"
          element={
            <RequireAuth>
              <Browse />
            </RequireAuth>
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profiles" element={<Profiles />} />
      </Routes>
    </div>
  );
};

export default App;
