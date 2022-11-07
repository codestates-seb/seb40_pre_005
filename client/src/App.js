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
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { loginUser } from './redux/store';
function App() {
  const userInfo = useSelector((state) => state.user);
  const dispatch = useDispatch();
  // console.log('현재 유저 정보', userInfo);
  const user = JSON.parse(localStorage.getItem('user'));
  useEffect(() => {
    if (localStorage.getItem('user') !== null) {
      dispatch(loginUser(user));
    }
  }, []);
  const [pageInfo, setPageInfo] = useState();

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home setPageInfo={setPageInfo} pageInfo={pageInfo} />}
          ></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/logout" element={<Logout />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route
            path="/questions/:id"
            element={<Detail setPageInfo={setPageInfo} pageInfo={pageInfo} />}
          ></Route>
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
