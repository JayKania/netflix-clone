import Nav from "./components/Nav";
import TitleSection from "./components/TitleSection";

import "./App.scss";
import About from "./components/About";

const App = () => {
  return (
    <div className="App">
      <div className="nav-title-wrapper">
        <Nav />
        <TitleSection />
      </div>
      <About />
    </div>
  );
};

export default App;
