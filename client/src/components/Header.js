import { useState } from 'react';
import styled from 'styled-components';
import logo_svg from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple } from '@fortawesome/free-brands-svg-icons';

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
    margin-top: 2px;
    margin-left: 10px;
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
  margin: 10px;
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

const SearchBar = styled.input`
  width: 750px;
  height: 25px;
  border-radius: 2px;
  padding: 2px 10px;
  border: 1px solid grey;
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
  color: #fff;
  &:hover {
    background-color: #0073cc;
  }
`;

const LogoutBtn = styled.button``;

const OptionContainer = styled.div`
  width: 200px;
  display: flex;
  justify-content: end;
`;

function LoginChecked() {
  const [isLogin, setIsLogin] = useState(false);
}

function Header() {
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
      <SearchBar placeholder="Search.." />
      <ButtonContainer>
        <LoginBtn>Log in</LoginBtn>
        <SignUpBtn>Sign up</SignUpBtn>
      </ButtonContainer>
    </HeaderNav>
  );
}
export default Header;
