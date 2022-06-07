import { Route, Routes, useLocation } from "react-router-dom";
import Browse from "./components/browse/Browse";
import RequireAuth from "./components/browse/RequireAuth";
import Home from "./components/Home/Home";
import Login from "./components/Signin/Login";
import Signup from "./components/Signup/Signup";
const App = () => {
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
      </Routes>
    </div>
  );
};

export default App;
