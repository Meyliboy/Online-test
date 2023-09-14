import "rsuite/dist/rsuite-no-reset.min.css";
import "../../SASS/App.scss";
import Main from "../layouts/main/Main";
import Header from "../layouts/header/Header";
// import FooterL from "./components/layouts/footer/Footer";
import { Route, Routes } from "react-router-dom";
import Test from "../pages/tests/Tests";
import Results from "../pages/results/Results";
import News from "../pages/news/News";
import Universities from "../pages/universities/Universities";
import Suggestions from "../pages/suggestions/Suggestions";
import AboutAs from "../pages/aboutAs/AboutAs";
import Matematika from "../pages/tests/category/Matematika";
import Onatili from "../pages/tests/category/Onatili";
import Tarix from "../pages/tests/category/Tarix";
import LogIn from "../profile/logIn";
import Register from "../profile/Register";
import TopResult from "../views/topResult/TopResult";

function App() {
  const ex = JSON.parse(localStorage.getItem("oauth-token"));
  return (
    <div className="wrapper">
      <div className="navbar__bg"></div>
      {!ex && (
        <div
          style={{
            left: "0",
            right: "0",
            textAlign: "center",
            position: "absolute",
            top: "50px",
            backgroundColor: "#DA9D9B",
            color: "#EB3124",
          }}
        >
          You are not eligible to take the test. Log in.
        </div>
      )}
      <div className="container">
        <Header />
        <div className="main__container">
          <div className="main__box">
            <Routes>
              <Route index element={<Main />} />
              <Route path="/test/matematika" element={<Test />} />
              <Route path="/test/matematika/:id" element={<Matematika />} />
              <Route path="/test/onatili" element={<Onatili />} />
              <Route path="/test/tarix" element={<Tarix />} />
              <Route path="/results" element={<Results />} />
              <Route path="/news" element={<News />} />
              <Route path="/universities" element={<Universities />} />
              <Route path="/aboutas" element={<AboutAs />} />
              <Route path="/suggestions" element={<Suggestions />} />
              <Route path="/login" element={<LogIn />} />
              <Route path="/register" element={<Register />} />
              {/* <Route path="/" element={<TopResult />} /> */}
            </Routes>
          </div>
          <aside className="math__top-users">
            <TopResult />
          </aside>
        </div>
      </div>
    </div>
  );
}

export default App;
