import './App.css'
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Classes from './pages/Classes'
import About from './pages/Aboutus'
import ScrollToTop from './components/scroll'

function App() {


  return (
    <>

      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/about-us" element={<About />} />
      </Routes>


    </>
  )
}

export default App
