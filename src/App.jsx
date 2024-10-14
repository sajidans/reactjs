// src/App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MenuBar from './MenuBar';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import NotFound from './NotFound'; // Create this component
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
const App = () => {  
  return (
    <Router>
      <div>
        <MenuBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} /> {/* Fallback for unmatched routes */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
