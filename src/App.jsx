import "rsuite/dist/rsuite-no-reset.min.css";
import "./SASS/App.scss";
import Main from "./components/layouts/main/Main";
import Header from "./components/layouts/header/Header";
import FooterL from "./components/layouts/footer/Footer";

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <Header />
        <Main />
        <FooterL />
      </div>
    </div>
  );
}

export default App;
