import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/Navbar/Navbar";
import AboutMe from "./components/AboutMe/AboutMe";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div id="main-container" className="main-container">
      <NavBar></NavBar>
      <AboutMe></AboutMe>
      <Footer></Footer>
    </div>
  );
}

export default App;
