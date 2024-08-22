import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Admin from './pages/Admin';
import About from './pages/About';
import Menu from './pages/Menu';
import NotFound from './pages/NotFound';
import Login from './pages/Login';

function App() {


  return (
    <div className="h-full  bg-gradient-to-br from-[#FFE8C2] to-[#CECFC7] scroll-smooth font-[M PLUS Rounded 1c]">
      <div className="bg-cover bg-center h-full min-h-screen">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/about' element={<About/>}/>
          <Route path='/menu' element={<Menu/>}/>
          <Route path="/admin" element={<Admin/>} />
          <Route path="/login" element={<Login/>} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </div>

    </div>

  );
}

export default App;
