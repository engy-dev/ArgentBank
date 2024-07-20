import { Routes, Route } from 'react-router-dom';
import Index from '../pages/indexpage';
import Footer from '../components/footer';
import Footerstyle from '../styles/footerstyle';
import Signinpage from '../pages/signinpage';
import Userpage from '../pages/userpage';
import Error404 from '../components/error';
import Header from '../components/header';
import Headerstyle from '../styles/headerstyle';

/*Create routes for differents pages of the site*/
function App() {
    return (
        <>
            <Header />
            <Headerstyle />
            <Routes>
                <Route exact path="/" element={<Index />} />
                <Route path="/login" element={<Signinpage />} />
                <Route path="/user" element={<Userpage />} />
                <Route path="/*" element={<Error404 />} />
            </Routes>
            <Footer />
            <Footerstyle />
        </>

    );
}

export default App;
