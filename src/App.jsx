import { Route, Routes } from "react-router-dom";
import Browse from "./components/Browse/Browse";
import CheckUser from "./components/Browse/CheckUser";
import RequireAuth from "./components/Browse/RequireAuth";
import Home from "./components/Home/Home";
import Profiles from "./components/Home/Profiles";
import Login from "./components/Signin/Login";
import Signup from "./components/Signup/Signup";
const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <CheckUser>
              <Home />
            </CheckUser>
          }
        />
        <Route
          path="/login"
          element={
            <CheckUser>
              <Login />
            </CheckUser>
          }
        />
        <Route
          path="/browse"
          element={
            <RequireAuth>
              <Browse />
            </RequireAuth>
          }
        />
        <Route
          path="/profiles"
          element={
            <RequireAuth>
              <Profiles />
            </RequireAuth>
          }
        />
        <Route
          path="/signup"
          element={
            <CheckUser>
              <Signup />
            </CheckUser>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
