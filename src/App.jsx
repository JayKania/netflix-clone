import Nav from "./components/Nav";
import TitleSection from "./components/TitleSection";

import "./App.scss";
import Section_1 from "./components/Section_1";
import Section_2 from "./components/Section_2";
import Section_3 from "./components/Section_3";
import Section_4 from "./components/Section_4";

const App = () => {
  return (
    <div className="App">
      <div className="nav-title-wrapper">
        <Nav />
        <TitleSection />
      </div>
      <Section_1 />
      <Section_2 />
      <Section_3 />
      <Section_4 />
    </div>
  );
};

export default App;
