import Navbar from './components/Navbar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home'; 
import About from './components/About';

export function App() {
  return (
    <>
    <Navbar>
    <BrowserRouter>
        <Routes>  
          <Route index elemet = {<Home/>}/>
          <Route path = "/Home" element = {<Home/>} />
          <Route path = "About" element = {<About/>} />
        </Routes>
      </BrowserRouter>
    </Navbar>
    </>
  );
}

export default App;
