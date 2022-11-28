import './template.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutPage from './components/AboutPage';
import Sponsers from './components/Sponsers';
import Team from './components/Team';
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/about' element={<AboutPage/>}/>
        <Route exact path='/sponsers' element={<Sponsers/>}/>
        <Route exact path='/team' element={<Team/>}/>
        <Route exact path='/events' element={<Sponsers/>}/>
        <Route exact path='/contact' element={<Sponsers/>}/>
        <Route exact path='/techteam' element={<Sponsers/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
