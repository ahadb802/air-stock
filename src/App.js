import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavScroll from './components/Navbar/Navbar';
import Details from './pages/Detail/Details';
import Home from './pages/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <NavScroll />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Details/:name/" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
