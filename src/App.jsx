import './App.css'
import About from './components/About.jsx'
import Footer from './components/Footer.jsx'
import GoTop from './components/GoTop.jsx'
import Home from './components/Home.jsx'
import Navbar from './components/Navbar.jsx'
import Project from './components/Project.jsx'
import Skills from './components/Skills.jsx'


function App() {
  

  return (
    <>
      <Navbar />
      <GoTop/>
      <Home />
      <About />
      <Skills />
      <Project />
      <Footer />

    </>
  )
}

export default App
