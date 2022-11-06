import { useState } from 'react';
import styled from 'styled-components';
import logo_svg from '../assets/img/logo.png';
import { Link } from 'react-router-dom';
import Search from './Search';
import { useDispatch, useSelector } from 'react-redux';
import { changeLogin } from '../redux/store';
import Modal from './Modal';

const HeaderNav = styled.header`
  width: 100%;
  height: 50px;
  background-color: #f8f9f9;
  border-top: 3px solid #f48225;
  border-bottom: 1px solid #e5e5e5;
  position: fixed;
  display: flex;
  top: 0px;
  left: 0px;
  align-items: center;
  z-index: 10;
  .logo_icon {
    width: 150px;
    height: 40px;
    margin-bottom: 2px;
    margin-left: 10px;
  }

  .search_icon {
    position: relative;
    left: 25px;
  }

  .ForTeams {
    width: 65px;
  }

  @media only screen and (max-width: 980px) {
    .About {
      display: none;
    }
    .ForTeams {
      display: none;
    }
  }
`;

const LogoContainer = styled.div`
  display: flex;
  height: 50px;
  align-items: center;
  padding: 0 15px;
  cursor: pointer;
  span {
    padding-left: 3px;
    font-size: 1.2rem;
  }
`;

const NavItemContainer = styled.div`
  display: flex;
  align-items: center;

  height: 100%;
  padding: 0 7.5px;
  cursor: pointer;
  span {
    padding: 5px;
    margin: 5px;
    border-radius: 20px;
    background: #f8f9f9;
    font-size: 13px;
    color: #232629;
  }
  span:hover {
    background: #e3e6e8;
  }
`;

const ButtonContainer = styled.div`
  width: 170px;
  display: flex;
  justify-content: end;
`;

const LoginBtn = styled.button`
  width: 60px;
  height: 33px;
  border-radius: 5px;
  text-decoration: none;
  background: #c0e7f9;
  border: 1px solid #c0e7f9;
  margin: 5px;
  opacity: 0.75;
  color: #2c5877;
  padding: 8px 10px 8px 10px;
  font-size: 12px;

  &:hover {
    background-color: #b3d3ea;
  }
`;

const SignUpBtn = styled.button`
  width: 60px;
  height: 33px;
  border-radius: 5px;
  text-decoration: none;
  background: #4ca8ff;
  margin: 5px;
  border: 1px solid;
  font-size: 12px;
  color: #fff;
  &:hover {
    background-color: #0073cc;
  }
`;

const LogoutBtn = styled.button`
  width: 80px;
  height: 33px;
  border-radius: 5px;
  text-decoration: none;
  background: #c0e7f9;
  border: 1px solid #c0e7f9;
  margin: 5px;
  opacity: 0.75;
  color: #2c5877;
  padding: 8px 10px 8px 10px;
  font-size: 12px;

  &:hover {
    background-color: #b3d3ea;
  }
`;

const Profile = styled.button`
  border-radius: 15px;
  width: 33px;
  height: 33px;
  margin: 5px 15px 5px 5px;
  background-color: white;
  border: 1px solid grey;
  background-image: ${process.env.PUBLIC_URL + '/profile.png'};
  :hover {
    cursor: pointer;
  }

  div {
    /* margin-right: 10px; */
  }

  img {
    margin-right: 10px;
    position: absolute;
    top: 15%;
    right: 12.6%;
  }
`;

function Header() {
  // const [isLogin, setIsLogin] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const modalClose = () => {
    setModalOpen(!modalOpen);
  };
  const isLogin = useSelector((state) => state.user.isLogin);
  const dispatch = useDispatch();
  const myPage = () => {};

  // const onClick = () => {
  //   dispatch(changeLogin());
  //   console.log('isLogin', isLogin);
  // };
  return (
    <>
      <HeaderNav>
        <LogoContainer>
          <a href="/" className="logo">
            <img src={logo_svg} className="logo_icon" alt="logo_icon" />
          </a>
        </LogoContainer>
        <NavItemContainer>
          <span className="About">About</span>
          <span className="Product">Product</span>
          <span className="ForTeams">For Teams</span>
        </NavItemContainer>
        <Search />
        {!isLogin ? (
          <ButtonContainer>
            <Link to="/login">
              <LoginBtn>Log in</LoginBtn>
            </Link>
            <Link to="/signup">
              <SignUpBtn>Sign up</SignUpBtn>
            </Link>
          </ButtonContainer>
        ) : (
          <ButtonContainer>
            <Profile onClick={modalClose}>
              <div>
                <img
                  src={process.env.PUBLIC_URL + '/profile.png'}
                  alt="profile"
                ></img>
              </div>
            </Profile>

            <Link to="/logout">
              <LogoutBtn>Log out</LogoutBtn>
            </Link>
          </ButtonContainer>
        )}
      </HeaderNav>
      {modalOpen && <Modal modalClose={modalClose}></Modal>}
    </>
  );
}
export default Header;
