import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import "./App.scss";
import Browse from "./components/browse/Browse";
import RequireAuth from "./components/browse/RequireAuth";
import Home from "./components/Home/Home";
import Login from "./components/Signin/Login";
import UserContextProvider, { useAuth } from "./context/UserContextProvider";

const App = () => {
  const location = useLocation();
  const authObject = useAuth();

  return (
    <div className="App">
      <UserContextProvider>
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
        </Routes>
      </UserContextProvider>
    </div>
  );
};

export default App;
