import Header from './components/Header';
import Nav from './components/Nav';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Home from './components/Home';
import Signup from './pages/signup';
import Detail from './pages/detail';
import SearchPage from './pages/search';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/questions/:id" element={<Detail />}></Route>
          <Route path="/search" element={<SearchPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
