import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import styled from 'styled-components';
import FacebookIcon from '../assets/img/facebook_logo.svg';
import GithubIcon from '../assets/img/github_logo.svg';
import GoogleIcon from '../assets/img/google_logo.svg';
import stack_logo_svg from '../assets/img/stack_logo.png';
import Header from '../components/Header';

const Wrapper = styled.div`
  height: 650px;
  display: flex;
  justify-content: center;
  align-items: center;
  .social_login {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .social_logo {
    margin: 5px;
  }
  .stack_logo {
    width: 32px;
    height: 37px;
    justify-content: center;
    &:hover {
      cursor: pointer;
    }
    margin-bottom: 10px;
  }
`;

const LoginContainer = styled.div`
  justify-content: center;
`;
const FormContainer = styled.div`
  display: flex;
  height: 500px;
  justify-content: center;
  align-items: center;
`;

export const SocialLoginBtn = styled.button`
  width: 250px;
  height: 37.8px;
  padding: 10.4px;
  margin: 4px 0px;
  border-radius: 5px;
  border: solid rgb(186, 191, 196);
  border-width: 1px;
  padding: 0.8em;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  font-size: 13px;

  &:hover {
    cursor: pointer;
  }
`;

const GoogleLoginBtn = styled(SocialLoginBtn)`
  background-color: white;
  :hover {
    background-color: rgb(248, 249, 249);
  }
`;
const GitHubLoginBtn = styled(SocialLoginBtn)`
  background-color: rgb(47, 52, 55);
  :hover {
    background-color: rgb(35, 39, 41);
  }
  color: white;
`;
const FacebookLoginBtn = styled(SocialLoginBtn)`
  background-color: rgb(56, 84, 153);
  :hover {
    background-color: rgb(54, 60, 121);
  }
  color: white;
`;
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate;

  return (
    <>
      <Header />
      <Wrapper>
        <LoginContainer>
          <div className="social_login">
            <img
              className="stack_logo"
              src={stack_logo_svg}
              alt="stack_logo"
            ></img>
          </div>

          <div className="social_login">
            <GoogleLoginBtn>
              <img className="social_logo" src={GoogleIcon} alt="google_logo" />
              Log in with Google
            </GoogleLoginBtn>
          </div>
          <div className="social_login">
            <GitHubLoginBtn>
              <img className="social_logo" src={GithubIcon} alt="github_logo" />
              Log in with Github
            </GitHubLoginBtn>
          </div>
          <div className="social_login">
            <FacebookLoginBtn>
              <img
                className="social_logo"
                src={FacebookIcon}
                alt="facebook_icon"
              />
              Log in with Facebook
            </FacebookLoginBtn>
          </div>
        </LoginContainer>
      </Wrapper>
    </>
  );
};

export default Login;
