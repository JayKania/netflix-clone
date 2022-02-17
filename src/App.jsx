import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { firebaseApp } from "./firebase/FirebseConfig";
import "./App.scss";
import Home from "./components/Home/Home";
import Login from "./components/Signin/Login";

const App = () => {
  const [user, SetUser] = useState(null);
  useEffect(() => {
    const auth = getAuth(firebaseApp);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
      } else {
        console.log("no user");
      }
    });
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
