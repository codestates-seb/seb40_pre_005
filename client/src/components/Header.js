import { useState } from 'react';
import styled from 'styled-components';
import logo_svg from '../assets/img/logo.png';
import { Link } from 'react-router-dom';
import Search from './Search';

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
    padding: 7.5px;
    border-radius: 1000px;
    background: #f8f9f9;
    font-size: 14px;
  }
  span:hover {
    background: #e3e6e8;
  }
`;

const ButtonContainer = styled.div`
  width: 200px;
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

const ProfileBtn = styled.button``;

function Header() {
  const [isLogin, setIsLogin] = useState(false);
  const onClick = () => {
    setIsLogin(!isLogin);
  };
  return (
    <HeaderNav>
      <LogoContainer>
        <a href="/" className="logo">
          <img src={logo_svg} className="logo_icon" alt="logo_icon" />
        </a>
      </LogoContainer>
      <NavItemContainer>
        <span>About</span>
        <span>Product</span>
        <span>For Teams</span>
      </NavItemContainer>
      <Search />
      {!isLogin ? (
        <ButtonContainer>
          <Link to="/login">
            <LoginBtn onClick={onClick}>Log in</LoginBtn>
          </Link>
          <SignUpBtn>Sign up</SignUpBtn>
        </ButtonContainer>
      ) : (
        <ButtonContainer>
          <ProfileBtn></ProfileBtn>
          <Link to="/logout">
            <LogoutBtn onClick={onClick}>Log out</LogoutBtn>
          </Link>
        </ButtonContainer>
      )}
    </HeaderNav>
  );
}
export default Header;
