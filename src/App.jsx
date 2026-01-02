import './App.css'
import NavBar from './Components/NavBar/NavBar'
import ProfileContent from './Components/ProfileContent/ProfileContent'
import About from "./Components/About/About"
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contacts.jsx/Contact'
import Experiences from './Components/Experiences/Experiences'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <>
      <NavBar />
      <ProfileContent />
      <About />
      <Projects />
      <Experiences />
      <Contact /><hr />
      <Footer />
    </>
  )
}

export default App
