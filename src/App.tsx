import './App.css'
import './index.css'
import Contact from './components/contact'
import About from './components/about'
import Navbar from './components/navbar'
import Home from './components/home'
import Skills from './components/skills'
import Portfolio from './components/portfolio'
function App() {

  return (
    <>
      <div className='overflow-x-hidden min-h-screen overflow-y-auto snap-start scroll-mt-0'>
        <title>Ethan Trebish Portfolio</title>
        <link rel='icon' type='image/x-icon' href='../src/assets/images/Desktop Icon.ico' />
        {/* Navbar */}
        <Navbar/>
        {/* Home Section */}
        <Home/>
        {/* About Me Section */}
        <About/>
        {/* Skills Section */}
        <Skills/>
        {/* Portfolio Section */}
        <Portfolio/>
        {/*Contact Me Section*/}
        <Contact/>
      </div>
    </>
  )
}

export default App
