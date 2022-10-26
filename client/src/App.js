import Header from './components/Header';
import Nav from './components/Nav';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Nav />
        <Sidebar />
        <Footer />
        <Routes>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
