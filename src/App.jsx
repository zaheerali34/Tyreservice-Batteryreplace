import Header from './Layout/Header';
import Home from './Home/Home';
import Footer from './Layout/Footer';
import { Routes, Route } from 'react-router-dom';
import About from './About/About';
import Contact from './Contact/Contact';
import Services from './Services/Services';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App