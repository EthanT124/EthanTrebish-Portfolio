import './App.css';
import About from './Components/About';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Navbar from './Components/Navbar';
import Portfolio from './Components/Portfolio';
import 'jquery/dist/jquery.min.js'
import Contact from './Components/Contact';
import Home from './Components/Home';
import Skills from './Components/Skills';
function App() {

  return (
      <div className="App">
          <div className="app-container">

              <Navbar/>
              <div className="container-fluid">
                  <div className="row">
                      <div id="home">
                          <Home/>
                      </div>
                      <div id="about">
                          <About/>
                      </div>
                      <div id="skills">
                          <Skills/>
                      </div>
                      <div id="portfolio">
                          <Portfolio/>
                      </div>
                      <div id="contact">
                          <Contact/>
                      </div>
                  </div>
              </div>


          </div>
      </div>
  );
}

export default App;
