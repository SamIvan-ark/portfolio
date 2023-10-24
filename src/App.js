import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';
import Project from './pages/Project';
import ScrollToTop from './helpers/ScrollToTop';
import './styles/main.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/portfolio" element={<Home />} />
        <Route path="/portfolio/projects" element={<Projects />} />
        <Route path="/portfolio/project/:projectId" element={<Project />} />
        <Route path="/portfolio/contacts" element={<Contacts />} />
        <Route path="*" element={<h1 style={{ textAlign: 'center', fontSize: '100px' }}>404</h1>} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
