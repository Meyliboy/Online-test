import "rsuite/dist/rsuite-no-reset.min.css";
import "./SASS/App.scss";
import Main from "./components/layouts/main/Main";
import Header from "./components/layouts/header/Header";
// import FooterL from "./components/layouts/footer/Footer";
import { Route, Routes } from "react-router-dom";
import Test from "./components/pages/tests/Tests";
import Results from "./components/pages/results/Results";
import News from "./components/pages/news/News";
import Universities from "./components/pages/universities/Universities";
import Suggestions from "./components/pages/suggestions/Suggestions";
import AboutAs from "./components/pages/aboutAs/AboutAs";
import Matematika from "./components/pages/tests/category/Matematika";
import Onatili from "./components/pages/tests/category/Onatili";
import Tarix from "./components/pages/tests/category/Tarix";
import LogIn from "./components/profile/logIn";
import Register from "./components/profile/Register";

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <Header />
        <Routes>
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <div className="main__container">
          {/* <div className="breadCamp">breadCrumb</div> */}
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/test" element={<Test />} />
            <Route path="/test/matematika" element={<Matematika />} />
            <Route path="/test/onatili" element={<Onatili />} />
            <Route path="/test/tarix" element={<Tarix />} />
            <Route path="/results" element={<Results />} />
            <Route path="/news" element={<News />} />
            <Route path="/universities" element={<Universities />} />
            <Route path="/aboutas" element={<AboutAs />} />
            <Route path="/suggestions" element={<Suggestions />} />
          </Routes>
        </div>
        {/* <FooterL /> */}
      </div>
    </div>
  );
}

export default App;
