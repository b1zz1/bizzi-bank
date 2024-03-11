import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import NewProject from './components/pages/NewProject'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import Projects from './components/pages/Projects'

import Navbar from './components/layout/Navbar'
import Container from './components/layout/Container'
import Footer from './components/layout/Footer'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Company" element={<Company />}  />
          <Route exact path="/Contact" element={<Contact />} />
          <Route exact path="/NewProject" element={<NewProject />} />
          <Route exact path="/Projects" element={<Projects />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  )
}

export default App;
