import SubCategory from '../components/pages/SubCategory';
import Home from '../components/pages/Home';
import Layout from '../Layout/Layout';
import About from '../components/pages/About';
import Services from '../components/pages/Services';
import Contact from '../components/pages/Contact';
import NotFound from '../components/pages/NotFound';

export const routes = [
    {
        path: "/details/:id",
        component: <Layout><SubCategory /></Layout>
    },
    {
        path: "/",
        component: <Layout><Home /></Layout>
    },
    { 
        path:"/about",
        component:<Layout ><About/></Layout>
    },
    { 
        path:"/Services",
        component:<Layout ><Services/></Layout>
    },
    { 
        path:"/Contact",
        component:<Layout ><Contact/></Layout>
    },
    { 
        path:"/NotFound",
        component:<Layout ><NotFound/></Layout>
    }
];