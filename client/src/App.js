
import './App.css';
import { Routes, Route} from 'react-router-dom';
import HomePage from './pages/Homepage';
import Gallery from './pages/Gallery';
import Services from './pages/Services';
import Contacts from './pages/Contacts';

import Navbar from './Navbar';
import Footer from './Footer';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element= {<HomePage />} />
        <Route path="/gallery" element= {<Gallery />} />
        <Route path="/services" element= {<Services />} />
        <Route path="/contacts" element= {<Contacts />} />
       
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
