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
import Ask from './pages/ask';
import Logout from './pages/logout';
import { useSelector } from 'react-redux';

function App() {
  // const user = useSelector((state) => state.user);
  // console.log('현재 유저 정보', user); -> 참조하시려면 주석 해제 후 콘솔확인 해보세요
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/logout" element={<Logout />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/questions/:id" element={<Detail />}></Route>
          <Route path="/search" element={<SearchPage />}></Route>
          <Route path="/questions/ask" element={<Ask />}></Route>
          <Route
            path="/questions/:id/edit"
            element={<Ask mode="EDIT" />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
