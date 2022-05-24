import { Route, Routes } from 'react-router-dom';
import './App.css';
import ContactUs from './components/ContactUs/ContactUs';
import Home from './components/Home/Home';
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Header/Header';
import Technologies from './components/Technologies/Technologies';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/technologies' element={<Technologies />}></Route>
        <Route path='/contact' element={<ContactUs />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
