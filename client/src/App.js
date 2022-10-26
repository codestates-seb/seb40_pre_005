import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Nav />
        <Sidebar />
        <Routes>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
