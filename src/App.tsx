
import './App.css';
import { Route, Routes } from 'react-router-dom';
import DishList from './features/DishList';
import Home from './pages/Home';
import background from './assets/images/HOME.jpg'
import NavBar from './components/NavBar';
import axios from 'axios';
import apiClient from './utils/api';
function App() {


  return (
    <div className='h-full '>
      <div className='bg-cover bg-center h-full min-h-screen' style={{ backgroundImage: `url(${background})` }}>
        <img src='http://localhost:8080/api/image/5' alt="" />
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dishes" element={<DishList />} />
          <Route path='*' element={<h1>Not Found</h1>} />
        </Routes>
      </div>

    </div>

  );
}

export default App;
