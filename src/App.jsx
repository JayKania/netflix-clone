import Nav from "./components/Nav";
import TitleSection from "./components/TitleSection";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <div className="nav-title-wrapper">
        <Nav />
        <TitleSection />
      </div>
    </div>
  );
};

export default App;
