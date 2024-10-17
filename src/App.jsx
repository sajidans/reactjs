// src/App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {routes} from './Routes/index';
// import Layout from './Layout/Layout';
// import Home from './components/pages/Home';
// import About from './components/pages/About';
// import Services from './components/pages/Services';
// import Contact from './components/pages/Contact';
// import NotFound from './components/pages/NotFound';
// import SubCategory from './components/pages/SubCategory';

const App = () => {  
  return (
    <Router>
      <div>
       
        <Routes>
          {/* <Route path="/" element={ <Layout ><Home/></Layout>} />
          <Route path="/about" element={<Layout ><About/></Layout>} />
          <Route path="/services" element={<Layout ><Services/></Layout>} />
          <Route path="/contact" element={<Layout ><Contact/></Layout>} />
          <Route path="/details/:id" element={<Layout ><SubCategory/></Layout>} />
          <Route path="*" element={NotFound} /> */}
          { routes?.map((route, index) => {
            return (
              <Route key={index} path={route?.path} element={route?.component} />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
