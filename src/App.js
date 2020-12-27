import './App.css';
import Home from './components/Home'
import Contact from './components/Contact'
import Watchlist from './components/Watchlist'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {BrowserRouter as Router, Routes, Route}  from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/watchlist' element={<Watchlist/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
