// src/App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
 import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import NotFound from './NotFound'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Layout from './Layout/Layout';
const App = () => {  
  return (
    <Router>
      <div>
       
        <Routes>
          <Route path="/" element={ <Layout ><Home /></Layout>} />
          <Route path="/about" element={<Layout ><About /></Layout>} />
          <Route path="/services" element={<Layout ><Services /></Layout>} />
          <Route path="/contact" element={<Layout ><Contact /></Layout>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
