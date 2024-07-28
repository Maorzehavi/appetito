
import './App.css';
import { Route, Routes } from 'react-router-dom';
import DishList from './features/DishList';
import Home from './pages/Home';
import background from './assets/images/HOME.jpg'
import NavBar from './components/NavBar';
function App() {
  return (
    <div className='h-full '>
      <div className='bg-cover bg-center h-full min-h-screen' style={{ backgroundImage: `url(${background})` }}>
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
