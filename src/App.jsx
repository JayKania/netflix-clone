import Nav from "./components/Nav";
import TitleSection from "./components/TitleSection";

import "./App.scss";
import Section1 from "./components/Section_1";

const App = () => {
  return (
    <div className="App">
      <div className="nav-title-wrapper">
        <Nav />
        <TitleSection />
      </div>
      <Section1 />
    </div>
  );
};

export default App;
